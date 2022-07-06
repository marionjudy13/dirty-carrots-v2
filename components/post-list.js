import Link from 'next/link'
import styles from '../styles/post-list.module.scss'

export default function PostList({ posts }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Dem Carrots:</h3>
        <ul className={styles.listStyles}>
          {posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
