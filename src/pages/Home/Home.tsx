import { Map, Placemark } from '@pbe/react-yandex-maps'

import { ServiceBlock } from './components'
import { InfoItem, Slider } from '../../components'

import Avto from './assets/img/avto.jpeg'
import Avto1 from './assets/img/avto4.jpeg'
import Avto2 from './assets/img/avto5.jpeg'
import Wallet from './assets/svg/wallet.svg'
import Time from './assets/svg/time.svg'
import Quality from './assets/svg/quality.svg'
import Personal from './assets/svg/personal.svg'

import styles from './Home.module.css'

const windowWidth = window.innerWidth

const skillsItem = [
	{ title: 'Экономия времени', image: Time },
	{ title: 'Профессиональный персонал', image: Personal },
	{ title: 'Низкие цены', image: Wallet },
	{ title: 'Гарантия на все работы', image: Quality },
]

export const Home = () => {
	const images = [Avto, Avto1, Avto2]

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.mainGradient} />
			{windowWidth >= 1078 && (
				<div className={styles.homeSlider}>
					<Slider images={images} />
				</div>
			)}
			<div className={styles.mainContent}>
				<h1>Автомастерская ВВ-Авто</h1>
				<div className={styles.skillBlock}>
					{skillsItem.map((item) => (
						<InfoItem key={item.title} title={item.title} image={item.image} />
					))}
				</div>
				<h3>Предоставляем следующие услуги в нашей мастерской</h3>
				<ServiceBlock />

				<div>
					<span className={styles.contact}>Контакты</span>
					<div className={styles.mapBlock}>
						<div className={styles.mapContact}>
							<span className={styles.contactTitle}>Адрес: </span>
							<span>ул. Ленина 213, г.Речица</span>
						</div>

						<div className={styles.map}>
							<Map
								width={'100%'}
								height={'100%'}
								defaultState={{ center: [52.351703, 30.40508], zoom: 18 }}
							>
								<Placemark geometry={[52.351703, 30.40508]} />
							</Map>
						</div>
						<div className={styles.mapBottonContent}>
							<div className={styles.mapContact}>
								<span className={styles.contactTitle}>Телефон: </span>
								<div className={styles.moreInfo}>
									<span>8 029 694-16-03</span>
									<span>8 029 663-24-28</span>
								</div>
							</div>
							<div className={styles.mapContact}>
								<span className={styles.contactTitle}>Часы работы: </span>
								<div className={styles.moreInfo}>
									<span>С 08:00 до 18:00</span>
									<span>Суббота с 08:00 до 12:00</span>
									<span>Воскресенье выходной</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
