import { FC } from 'react'
import { useSlider } from '../../hooks'
import styles from './Slider.module.css'

const windowWidth = window.innerWidth

interface ISliderProps {
	images: string[]
}

export const Slider: FC<ISliderProps> = ({ images }) => {
	const { itemNumber } = useSlider({
		imageCount: images.length,
	})
	return (
		<>
			{windowWidth > 1078 && (
				<img
					className={styles.img}
					src={images[itemNumber]}
					alt='Слайдер с актуальной информацией'
				/>
			)}
		</>
	)
}
