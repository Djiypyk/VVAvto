import { FC } from 'react'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styles from './Slider.module.css'

interface ISliderProps {
	images: string[]
}

export const Slider: FC<ISliderProps> = ({ images }) => {
	SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

	return (
		<Swiper
			autoplay={{ delay: 3000 }}
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={1}
			pagination={true}
			className='mySwiper'
		>
			{images.map((img, i) => {
				return (
					<SwiperSlide key={i}>
						<img className={styles.img} src={img} alt='' />
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}
