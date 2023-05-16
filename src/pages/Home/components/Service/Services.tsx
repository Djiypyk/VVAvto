import { FC } from 'react'

import styles from './Services.module.css'

interface IServicesProps {
	title: string
	image?: string
	link?: string
}
export const Services: FC<IServicesProps> = ({ title, image, link }) => {
	return (
		<div className={styles.servicesBlock}>
			<span className={styles.title}>{title}</span>
			<img className={styles.image} src={image} alt='Вид работы' />
		</div>
	)
}
