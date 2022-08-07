import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chinese Food SG</title>
        <meta name="description" content="A map to display the types of Chinese food in Singapore" />
      </Head>

      <div className={styles.main}>
        Map area
      </div>

      <footer className={styles.footer}>
        Built by @liangyuanruo
      </footer>
    </div>
  )
}

export default Home
