import propTypes from 'prop-types'
import { Header } from 'components'

import styles from 'styles/components/layout.module.sass'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Header />

        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.object,
}

export default Layout
