import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Agnieszka Mandal. Fotografia ślubna, rodzinna i noworodkowa. Katowice</title>
        <meta name="description" content="Fotografia rodzinna i dziecięca, Artystyczna fotografia ślubna. Sesje ciążowe i noworodkowe. Warsztaty fotograficzne. Katowice. Kraków" />
        <link rel="icon" href="/ico.png" />
        <link rel="canonical" href="https://agnieszkamandal.com/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fotografia Agnieszka Mandal" />
        <meta property="og:description" content="Fotografia rodzinna i dziecięca, Artystyczna fotografia ślubna. Sesje ciążowe i noworodkowe. Warsztaty fotograficzne. Katowice. Kraków" />
        <meta property="og:url" content="https://agnieszkamandal.com/" />
        <meta property="og:site_name" content="Fotografia Agnieszka Mandal" />
        <meta property="article:publisher" content="https://www.facebook.com/agnieszkamandalphotography" />
        <meta property="article:modified_time" content="2022-09-18T08:51:10+00:00" />
        <meta property="og:image" content="https://agnieszkamandal.com/wp-content/uploads/2021/07/noworodkowee-1.jpg" />
        <meta property="og:image:width" content="2200" />
        <meta property="og:image:height" content="1485" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to site
        </h1>
        <br/>
        <Link href="./portfolio/">Portfolio</Link>
        <Link href="./oferta/">Oferta</Link>
        <Link href="./blog/">Blog</Link>
        <Link href="./warsztaty-fotograficzne/">Warsztaty</Link>
        <Link href="./kontakt">Kontakt</Link>
        <Link href="./prywatnosc">Polityka prywatności</Link>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

