import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from "next/link"

import styles from '../../styles/Home.module.css'

const index = (req, res) => {
  const { query } = useRouter()

  console.log(query);
  
  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{query.slug}</h1>
        <br/>
        <Link href="../warsztaty-fotograficzne">Warsztaty index</Link>
        <Link href="../warsztaty-fotograficzne/rezerwacja">rezerwacja terminu</Link>
        <Link href="../">Home</Link>
        </main>

        <footer className={styles.footer}>
        
        </footer>
    </div>  
  )
}

export default index