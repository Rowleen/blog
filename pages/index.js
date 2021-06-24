import Head from 'next/head'
import styles from '../styles/index.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>Julian's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.home}></div>
    </>
  )
}
