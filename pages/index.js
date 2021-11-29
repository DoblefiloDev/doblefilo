import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import doblefilo from '../public/doblefilo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doblefilo</title>
        <meta name="description" content="Doblefilo is a free software organization." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={doblefilo} alt="Doblefilo logo" />
      </main>

    </div>
  )
}
