import { Map, Placemark } from '@pbe/react-yandex-maps'

export const YMap = () => {
	return (
		<Map
			width={'100%'}
			height={'100%'}
			defaultState={{ center: [52.351703, 30.40508], zoom: 18 }}
		>
			<Placemark geometry={[52.351703, 30.40508]} />
		</Map>
	)
}
