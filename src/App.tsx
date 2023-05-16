import { Route, Routes } from 'react-router-dom'

import './App.css'
import { PATH } from './constants/path'
import { Layout } from './features'
import { Home, Page404 } from './pages'

const App = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={PATH.SERVICES} element={<h1>Услуги</h1>} />
				<Route path={PATH.CONTACT} element={<h1>Контакты</h1>} />
				<Route path={PATH.ABOUT_COMPANY} element={<h1>О компании</h1>} />
				<Route path={'*'} element={<Page404 />} />
			</Route>
		</Routes>
	)
}

export default App
