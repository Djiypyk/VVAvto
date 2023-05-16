import { NavLink } from 'react-router-dom'
// import { PATH } from '~/constants/path'
import { PATH } from '../../../../constants/path'

import styles from './HeaderMain.module.css'



export const HeaderMain = () => {
	

	const onActive = (props: { isActive: boolean; isPending: boolean }) => {
		const { isActive } = props
		return `${styles.link} ${isActive ? styles.activeLink : ''}`
	}

	return (
		<div className={styles.headerMain}>
			<nav className={styles.navBlock}>
				<NavLink
					className={onActive}
					to={PATH.HOME}
					onClick={() => console.log('click')}
				>
					Главная
				</NavLink>
				<NavLink
					className={onActive}
					to={PATH.SERVICES}
					onClick={() => console.log('click')}
				>
					Услуги
				</NavLink>
				<NavLink
					className={onActive}
					to={PATH.CONTACT}
					onClick={() => console.log('click')}
				>
					Контакты
				</NavLink>
				<NavLink
					className={onActive}
					to={PATH.ABOUT_COMPANY}
					onClick={() => console.log('click')}
				>
					О компании
				</NavLink>
			</nav>

			
		</div>
	)
}
