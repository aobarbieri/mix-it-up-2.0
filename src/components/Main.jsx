import { Route, Routes } from 'react-router-dom'
import Cocktails from './Cocktails'
import Show from './Show'
import Recipes from './Recipes'

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Cocktails />} />
				<Route path='/cocktail/:id' element={<Show />} />
				<Route path='/recipes' element={<Recipes />} />
			</Routes>
		</main>
	)
}
