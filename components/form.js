import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import style from "../styles/form.module.scss";
import { ThreeDots } from "react-loader-spinner";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "124ceb2f-d979-485c-9695-98a16e3aded1";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Dirty Carrots",
      subject: "New Contact Message from Dirty Carrots",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      ></input>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoComplete="false"
          className={`${errors.name ? "error" : "no-error"}`}
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        />
        {errors.name && (
          <div>
            <small className={style.small}>{errors.name.message}</small>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="email_address">Email Address</label>
        <input
          id="email_address"
          type="email"
          name="email"
          autoComplete="false"
          className={`${errors.email ? "error" : "no-error"}`}
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <div>
            <small className={style.small}>{errors.email.message}</small>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className={`${errors.message ? "error" : "no-error"}`}
          {...register("message", {
            required: "Enter your Message",
          })}
        />
        {errors.message && (
          <div>
            {" "}
            <small className={style.small}>{errors.message.message}</small>
          </div>
        )}
      </div>

      <button type="submit">
        {isSubmitting ? (
          <ThreeDots
            height="20"
            width="50"
            radius="20"
            color="#fff"
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ marginBottom: 0 }}
          />
        ) : (
          "Send Message"
        )}
      </button>
      {isSubmitSuccessful && isSuccess && (
        <div>{message || "Success. Message sent successfully"}</div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div>{message || "Something went wrong. Please try later."}</div>
      )}
    </form>
  );
}

// import React from "react";
// import { useState } from "react";
// import style from "../styles/form.module.scss";

// function Form() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", `124ceb2f-d979-485c-9695-98a16e3aded1`);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setResult(res.message);
//     } else {
//       console.log("Error", res);
//       setResult(res.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className={style.form}>
//       <div class="h-captcha" data-captcha="true"></div>
//       <p>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" required />
//       </p>
//       <p>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" required />
//       </p>
//       <p>
//         <label htmlFor="message">Message</label>
//         <textarea name="message" id="message" required></textarea>
//       </p>
//       <button type="submit">Submit</button>
//       <span>{result}</span>
//     </form>
//   );
// }

// export default Form;
