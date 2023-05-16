import { Outlet } from 'react-router-dom'
import { Header, HeaderMain } from './components'
import styles from './Layout.module.css'

export const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
            <HeaderMain/>
			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	)
}
