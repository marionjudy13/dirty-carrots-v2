import Link from 'next/link'
import styles from '../styles/post-list.module.scss'

export default function PostList({ posts }) {
  return (
    <section className={styles.container}>
      <div className="content-wrap">
        <h3>Dem Carrots:</h3>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              {console.log(id)}
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
