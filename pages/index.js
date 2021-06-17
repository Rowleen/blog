import Head from 'next/head'
import styles from '../styles/index.module.sass'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Julian's Blog</title>
      </Head>
    </div>
  )
}
