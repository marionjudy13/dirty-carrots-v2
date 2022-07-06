import styles from '../styles/main.module.scss'

export default function Main() {
  return (
    <main className={styles.container}>
      <div className="main-content-wrap">
        <div className="h1-logo-wrap">
          <img
            src="/images/carrot-01.jpg" // Route of the image file
            alt="Awesome Carrot Illustration"
          />
          <h1>
            Dirty <br />
            Carrots
          </h1>
        </div>

        <h2>
          Just a girl trying to keep a record of all the gosh dang things
          she's&nbsp;learning.
        </h2>
      </div>
    </main>
  )
}
