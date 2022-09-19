import styles from '../styles/work-in-progress.module.scss'

export default function WorkInProgress(props) {
  return (
    <div className={styles.wrapper}>
      <span className={props.className}>Work In Progress</span>
    </div>
  )
}
