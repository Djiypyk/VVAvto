import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom'

import { PATH } from './constants/path'
import { Layout } from './features'
import { Home, Page404, Services } from './pages'

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <Page404 />,
			children: [
				{
					path: '/',
					element: <Home />,
					index: true,
				},
				{
					path: PATH.SERVICES,
					element: <Services />,
				},
				{
					path: PATH.CONTACT,
					element: <h1>Контакты</h1>,
				},
				{
					path: PATH.ABOUT_COMPANY,
					element: <h1>О компании</h1>,
				},
			],
		},
	])
	return <RouterProvider router={router} />
	// (
	// 	<div>
	// 		<Routes>
	// 			<Route path={'/'} element={<Layout />}>
	// 				<Route index element={<Home />} />
	// 				<Route path={PATH.SERVICES} element={<Services />} />
	// 				<Route path={PATH.CONTACT} element={<h1>Контакты</h1>} />
	// 				<Route path={PATH.ABOUT_COMPANY} element={<h1>О компании</h1>} />
	// 				<Route path={'*'} element={<Page404 />} />
	// 			</Route>
	// 		</Routes>
	// 	</div>
	// )
}

export default App
