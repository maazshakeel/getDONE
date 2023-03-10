import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Dashboard.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | getDONE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.text}>
          <h1 className={styles.heading}>No projects yet</h1>
          <div className={styles.buttonContainer}>

            <Link href="/create_project" className={styles.link}>
              <button className={styles.buttonRegister}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={styles.icon}
                />
                Work on a project
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
