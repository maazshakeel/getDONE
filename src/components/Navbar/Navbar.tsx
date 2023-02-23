import Link from 'next/link'
import Logo from '../Logo'
import styles from './styles.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Logo height={50} width={120} />
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonLogIn}>Log in</button>
                <button className={styles.buttonRegister}><Link href="/register" className={styles.link} >Get started</Link></button>
            </div>
        </nav>
    )
}