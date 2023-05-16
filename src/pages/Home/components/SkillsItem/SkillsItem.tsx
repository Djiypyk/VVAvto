import { FC } from 'react'

import styles from './SkillsItem.module.css'

interface ISkillsItemProps {
	title: string
	image?: string
}

export const SkillsItem: FC<ISkillsItemProps> = ({ title, image }) => {
	return (
		<div>
			{image && (
				<img className={styles.image} src={image} alt='Навыки и польза' />
			)}
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}
