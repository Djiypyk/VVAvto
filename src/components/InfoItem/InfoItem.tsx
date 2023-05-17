import { FC } from 'react'

import styles from './InfoItem.module.css'

interface IInfoItemProps {
	title: string
	image?: string
}

export const InfoItem: FC<IInfoItemProps> = ({ title, image }) => {
	return (
		<div>
			{image && (
				<img className={styles.image} src={image} alt='Навыки и польза' />
			)}
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}
