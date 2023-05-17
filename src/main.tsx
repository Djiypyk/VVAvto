import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { YMaps } from '@pbe/react-yandex-maps'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<YMaps>
				<App />
			</YMaps>
		</BrowserRouter>
	</React.StrictMode>,
)
