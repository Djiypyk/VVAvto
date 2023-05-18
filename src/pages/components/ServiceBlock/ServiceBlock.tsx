import { Services } from '../Service/Services'

import Diagnost from '../../assets/img/diagnost.png'
import AKPP from '../../assets/img/akpp.png'
import Oil from '../../assets/img/oil.jpg'
import Color from '../../assets/img/colorfull.png'
import GRM from '../../assets/img/grm.png'
import Motor from '../../assets/img/motor.jpg'
import RoadSlice from '../../assets/img/road_slice.png'
import Roll from '../../assets/img/rollmontag.png'
import Rules from '../../assets/img/rules.png'

import styles from './ServiceBlock.module.css'

const servicesList = [
	{ title: 'Диагностика автомобиля', image: Diagnost },
	{ title: 'Замена масла', image: Oil },
	{ title: 'Ремон двигателей', image: Motor },
	{ title: 'Ремонт АКПП и МКПП', image: AKPP },
	{ title: 'Ремонт рулевых реек', image: Rules },
	{ title: 'Ремонт ходовой части', image: RoadSlice },
	{ title: 'Покрасочные работы', image: Color },
	{ title: 'Шиномонтаж', image: Roll },
	{ title: 'Замена ремня ГРМ', image: GRM },
]

export const ServiceBlock = () => {
	return (
		<div className={styles.serviceBlock}>
			{servicesList.map((item) => (
				<Services title={item.title} image={item.image} />
			))}
		</div>
	)
}
