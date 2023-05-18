import { ServiceBlock } from '../components'
import styles from './Services.module.css'

export const Services = () => {
	return (
		<div className={styles.servicesWrapper}>
            <h2>Услуги</h2>
			<ServiceBlock />
		</div>
	)
}
