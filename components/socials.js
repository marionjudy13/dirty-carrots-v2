import AiFillGithub from '@meronex/icons/ai/AiFillGithub'
import AiFillTwitterCircle from '@meronex/icons/ai/AiFillTwitterCircle'
import EnLinkedinWithCircle from '@meronex/icons/en/EnLinkedinWithCircle'
import styles from '../styles/socials.module.scss'

export default function Socials() {
  return (
    <div className={styles.socials}>
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
        href="https://twitter.com/MsMarion13"
        alt="Twitter Profile"
      >
        <AiFillTwitterCircle />
      </a>
    </div>
  )
}
