import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>𝗟𝗘𝗞𝗦.𝗚𝗚</title>
        <meta name="description" content="𝗟𝗘𝗞𝗦.𝗚𝗚" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>Contact: <a href="mailto:hello@leks.gg">hello@leks.gg</a>
        </p>
      </main>

      <footer className={styles.footer}>
      <p>𝗟𝗘𝗞𝗦.𝗚𝗚</p>
      </footer>
    </div>
  )
}
