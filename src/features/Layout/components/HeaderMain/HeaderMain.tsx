import { NavLink } from 'react-router-dom'
import { Slider } from '../../../../components'
import { PATH } from '../../../../constants/path'

import Avto from './assets/img/avto.jpeg'
import Avto1 from './assets/img/avto4.jpeg'
import Avto2 from './assets/img/avto5.jpeg'

import styles from './HeaderMain.module.css'

export const HeaderMain = () => {
	const onActive = (props: { isActive: boolean; isPending: boolean }) => {
		const { isActive } = props
		return `${styles.link} ${isActive ? styles.activeLink : ''}`
	}
	const images = [Avto, Avto1, Avto2]
	return (
		<div className={styles.headerMain}>
			<nav className={styles.navBlock}>
				<NavLink
					className={onActive}
					to={'/'}
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
			<div className={styles.homeSlider}>
				<Slider images={images} />
			</div>
		</div>
	)
}
