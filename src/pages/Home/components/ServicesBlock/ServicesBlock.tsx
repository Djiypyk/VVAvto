
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

import styles from './ServicesBlock.module.css'

export const ServiceBlock = () => {
    return <div className={styles.serviceBlock}>
    <Services title='Диагностика автомобиля' image={Diagnost} />
    <Services title='Замена масла' image={Oil} />
    <Services title='Ремон двигателей' image={Motor} />
    <Services title='Ремонт АКПП и МКПП' image={AKPP} />
    <Services title='Ремонт рулевых реек' image={Rules} />
    <Services title='Ремонт ходовой части' image={RoadSlice} />
    <Services title='Покрасочные работы' image={Color} />
    <Services title='Шиномонтаж' image={Roll} />
    <Services title='Замена ремня ГРМ' image={GRM} />
</div>
}