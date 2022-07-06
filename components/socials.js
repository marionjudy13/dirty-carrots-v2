import AiFillGithub from '@meronex/icons/ai/AiFillGithub'
import AiFillTwitterCircle from '@meronex/icons/ai/AiFillTwitterCircle'
import EnLinkedinWithCircle from '@meronex/icons/en/EnLinkedinWithCircle'
import styles from '../styles/socials.module.scss'

export default function Socials() {
  return (
    <div className={styles.socials}>
      <a href="https://github.com/marionrose13" alt="Github Profile">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/marionerose/" alt="LinkedIn Profile">
        <EnLinkedinWithCircle />
      </a>
      <a href="https://twitter.com/DirtyCarrots13" alt="Twitter Profile">
        <AiFillTwitterCircle />
      </a>
    </div>
  )
}
