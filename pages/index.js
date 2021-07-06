import Head from 'next/head'
import styles from '../styles/index.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julian's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.home}>
        <section className={styles.posts}>
          <h2 className={styles.sectionTitle}>Últimas publicaciones</h2>
        </section>
        <aside></aside>
      </main>
    </>
  )
}
