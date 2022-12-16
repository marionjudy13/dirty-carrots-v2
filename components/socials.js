import AiFillGithub from "@meronex/icons/ai/AiFillGithub";
import EnInstagramWithCircle from "@meronex/icons/en/EnInstagramWithCircle";
import EnLinkedinWithCircle from "@meronex/icons/en/EnLinkedinWithCircle";
import EnMailWithCircle from "@meronex/icons/en/EnMailWithCircle";
import Link from "next/link";
import styles from "../styles/socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.socials}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.dirtycarrots.dev/contact"
        alt="Contact Me"
        className={styles.email}
      >
        <EnMailWithCircle />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/marionjudy13"
        alt="Github Profile"
      >
        <AiFillGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/marionerose/"
        alt="LinkedIn Profile"
      >
        <EnLinkedinWithCircle />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/mary_vontschudi/"
        alt="Instagram Profile"
      >
        <EnInstagramWithCircle />
      </a>
    </div>
  );
}
