import Link from 'next/link'

import styles from 'styles/components/header.module.sass'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.title}>
          <h1>
            JPA. <small>jupeac.dev</small>
          </h1>
        </div>

        <nav className={styles.principalNav}>
          <Link href="/">
            <a>Inicio</a>
          </Link>

          <Link href="/about-me">
            <a>Sobre mi</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
