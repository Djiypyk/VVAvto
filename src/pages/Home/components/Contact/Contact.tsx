import { YMap } from '../YMap'
import styles from './Contact.module.css'

export const Contact = () => {
	return (
		<section>
			<span className={styles.contact}>Контакты</span>
			<div className={styles.mapBlock}>
				<div className={styles.contactInfo}>
					<div className={styles.contactInfoEach}>
						<p>Адрес: </p>
						<p>ул. Ленина 213, г.Речица</p>
					</div>

					<div className={styles.contactInfoEach}>
						<p>Телефон: </p>
						<div>
							<p>8 029 694-16-03</p>
							<p>8 029 663-24-28</p>
						</div>
					</div>
                    
					<div className={styles.contactInfoEach}>
						<p>Часы работы: </p>
						<div>
							<p>С 08:00 до 18:00</p>
							<p>Суббота с 08:00 до 12:00</p>
							<p>Воскресенье выходной</p>
						</div>
					</div>
				</div>

				<div className={styles.map}>
					<YMap />
				</div>
			</div>
		</section>
	)
}
