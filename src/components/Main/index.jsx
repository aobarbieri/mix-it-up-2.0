import { Route, Routes } from 'react-router-dom'
import Cocktails from '../../pages/Cocktails'
import Show from '../../pages/Show'
import Recipes from '../../pages/Recipes'
import Profile from '../../pages/User'

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Cocktails />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/cocktail/:id' element={<Show />} />
				<Route path='/recipes' element={<Recipes />} />
			</Routes>
		</main>
	)
}
