
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dawaai | Global Medicine Search</title>
        <meta name="description" content="Search medicines and find where to buy them locally or online" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dawaai</h1>
        <p className={styles.description}>Search for medicine across the world</p>
        <input type="text" placeholder="Enter medicine name..." className={styles.searchInput} />
      </main>
    </div>
  )
}
