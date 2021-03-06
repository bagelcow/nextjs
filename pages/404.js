import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Custom404() {
    return (
        <div className={styles.container}>
          <Head>
            <title>𝗟𝗘𝗞𝗦.𝗚𝗚</title>
            <meta name="description" content="𝗟𝗘𝗞𝗦.𝗚𝗚" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <p>Error 404 <span className={styles.f}>Page Not Found</span></p>
          </main>
        </div>
      )
  }
  