import styles from './Header.module.css'
import PhoneSvg from '../../../../assets/svg/phone.svg'
import Logo from '../../../../assets/img/logo.png'

export const Header = () => {
	return (
		<header className={styles.headerWrapper}>
			<div className={styles.headerWrapperTitleBlock}>
				<h1>ВВ-Авто</h1>
				<img
					className={styles.logo}
					src={Logo}
					alt='Логотип и переход на главную страницу'
				/>
			</div>

			<div className={styles.phoneContainer}>
				<img
					className={styles.phoneSvg}
					src={PhoneSvg}
					alt='Номер телефона для связи с автомастерской'
				/>
				<div className={styles.headerContact}>
					<a href='tel:+375296941603'>+375 (29) 694-16-03</a>
					<a href='tel:+375296632428'>+375 (29) 694-16-03</a>
				</div>
			</div>
		</header>
	)
}
