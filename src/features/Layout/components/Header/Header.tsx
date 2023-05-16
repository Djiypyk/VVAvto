import styles from './Header.module.css'
import PhoneSvg from '../../../../assets/svg/phone.svg'

export const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<span>ВВ-Авто</span>
			<div className={styles.phoneContainer}>
				<img
					className={styles.phoneSvg}
					src={PhoneSvg}
					alt='Номер телефона для связи с автомастерской'
				/>
				<div className={styles.headerContact}>
					<span>+375 (29) 694-16-03</span>
					<span>+375 (29) 663-24-28</span>
				</div>
			</div>
		</div>
	)
}
