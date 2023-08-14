import Link from 'next/link'
import Image from 'next/image'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer>
      <Link href="#" className={`${styles.btn} ${styles.btnCreate}`}>
        <Image
          src="assets/loginBtn.svg"
          alt="login-image"
          width="24"
          height="24"
        />
        create your hoo.be
      </Link>

      <Link href="#" className={`${styles.btn} ${styles.btnLogin}`}>
        login
      </Link>
    </footer>
  )
}
