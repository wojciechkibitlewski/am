import Head from 'next/head'
import Link from "next/link"

import styles from '../styles/Home.module.css'

const studio = () => {
  return (
    <div className={styles.container}>
        <Head>
        <title>Studio. Fotografia Agnieszka Mandal.</title>
        <meta name="description" content=" Nasze studio. Fotografia rodzinna i dziecięca, Artystyczna fotografia ślubna. Sesje ciążowe i noworodkowe. Warsztaty fotograficzne.Katowice. Kraków" />
        <link rel="icon" href="/ico.png" />
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Studio</h1>
        <br/>
        <Link href="./">Home</Link>
        </main>

        <footer className={styles.footer}>
        
        </footer>
    </div>  
  )
}

export default studio