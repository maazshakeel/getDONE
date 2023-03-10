import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import styles from '@/styles/Register.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLogoGoogle } from "react-icons/io5";


export default function Register() {
    return (
        <>
            <Head>
                <title>Register | getDONE</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navbar />

                <div className={styles.text}>
                    <h1 className={styles.heading}>Sign Up</h1>
                    <form className={styles.form}>

                        <input type="email" name="" id="" placeholder="Enter your email address..." className={styles.inputs} />
                        <input type="text" name="" id="" placeholder="Enter your username..." className={styles.inputs} />
                        <input type="password" name="" id="" placeholder="Enter your password..." className={styles.inputs} />

                        <input type="submit" value="Continue with password" id="" placeholder="Enter your password..." className={styles.submitInput} />
                        <div className={styles.hr}></div>
                        <button type="submit" id="" className={styles.submitGoogle}>
                            <IoLogoGoogle className={styles.icon} />
                            Continue with Google
                        </button >
                    </form>
                </div>
            </main>
        </>
    )
}