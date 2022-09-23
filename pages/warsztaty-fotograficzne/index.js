import Head from 'next/head'
import Link from "next/link"

import styles from '../../styles/Home.module.css'

const index = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Warsztaty index</h1>
        <br/>
        <Link href="/warsztaty-fotograficzne/warsztaty-fotografii-noworodkowej/">Warsztaty fotografii noworodkowej</Link>
      <Link href="./">Home</Link>
        </main>

        <footer className={styles.footer}>
        
        </footer>
    </div>  
  )
}

export default index