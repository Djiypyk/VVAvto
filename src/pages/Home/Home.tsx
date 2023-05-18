import { Contact } from './components'
import styles from './Home.module.css'

import { ServiceBlock } from '../components'
import Wallet from '../assets/svg/wallet.svg'
import Time from '../assets/svg/time.svg'
import Quality from '../assets/svg/quality.svg'
import Personal from '../assets/svg/personal.svg'
import { InfoItem } from '../../components'

const skillsItem = [
	{ title: 'Экономия времени', image: Time },
	{ title: 'Профессиональный персонал', image: Personal },
	{ title: 'Низкие цены', image: Wallet },
	{ title: 'Гарантия на все работы', image: Quality },
]

export const Home = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.mainContent}>
				<h1>Автомастерская ВВ-Авто</h1>
				<div className={styles.skillBlock}>
					{skillsItem.map((item) => (
						<InfoItem key={item.title} title={item.title} image={item.image} />
					))}
				</div>
				<h3>Предоставляем следующие услуги в нашей мастерской</h3>
				<ServiceBlock />
				<Contact />
			</div>
		</div>
	)
}
