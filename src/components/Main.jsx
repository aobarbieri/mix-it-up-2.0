import Cocktails from './Cocktails'
import Show from './Show'
import { Route, Routes } from 'react-router-dom'

export default function Main() {
	return (
		<main>
			<header>
				<p className='app-default-width py-5 md:p-0 md:py-8 text-white'>
					Select which ingredients you have, and we&#39;ll show you all the different cocktails you can make.
				</p>
			</header>
			<Routes>
				<Route path='/' element={<Cocktails />} />
				<Route path='/cocktail/:id' element={<Show />} />
			</Routes>
		</main>
	)
}
