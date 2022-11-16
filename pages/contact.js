import Form from "../components/form";
import Topnav from "../components/topnav";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <div>
        <Topnav />
        <div className={styles.contact}>
                <h1>Contact Me!</h1>
                <h2>I&apos;d love to hear from you!</h2>
                <Form />
        </div>
    </div>
  )
}
