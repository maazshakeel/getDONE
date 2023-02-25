import Link from 'next/link'
import Logo from '../Logo'
import styles from './styles.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/"><Logo height={50} width={120} /></Link>
            </div>
            <div className={styles.buttons}>
                <Link href="/login" className={styles.buttonLogIn} >Log in</Link>
                <button className={styles.buttonRegister}><Link href="/register" className={styles.link} >Get started</Link></button>
            </div>
        </nav>
    )
}