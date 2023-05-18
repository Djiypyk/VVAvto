import { Outlet } from 'react-router-dom'
import { Footer, Header, HeaderMain } from './components'
import styles from './Layout.module.css'

export const Layout = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				<HeaderMain />
				<div className={styles.mainGradient} />
				<main className={styles.content}>
					<Outlet />
				</main>
				{/* <Footer /> */}
			</div>
			
		</>
	)
}
