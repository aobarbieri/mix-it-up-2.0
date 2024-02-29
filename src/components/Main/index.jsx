import { Route, Routes } from 'react-router-dom'
import Cocktails from '../../pages/Cocktails'
import Show from '../../pages/Show'
import Recipes from '../../pages/Recipes'
import Favorites from '../../pages/Favorites'

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Cocktails />} />
				<Route path='/cocktail/:id' element={<Show />} />
				<Route path='/recipes' element={<Recipes />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</main>
	)
}
