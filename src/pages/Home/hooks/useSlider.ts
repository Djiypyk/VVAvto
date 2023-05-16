import { useEffect, useState } from 'react'

interface IUseSliderProps {
	imageCount: number
	duration?: number
}

export const useSlider = ({ imageCount, duration = 5000 }: IUseSliderProps) => {
	const [itemNumber, setItemNumber] = useState(0)
	console.log(imageCount, 'count')
	console.log(itemNumber >= imageCount)

	useEffect(() => {
		setTimeout(() => {
			if (itemNumber >= imageCount - 1) {
				setItemNumber(0)
			} else {
				setItemNumber((prev) => prev + 1)
			}
		}, duration)
	}, [itemNumber])
	console.log(itemNumber, 'itemnumber')

	return { itemNumber }
}
