import { Route, Routes } from 'react-router-dom'
import Cocktails from '../../pages/Cocktails'
import Show from '../../pages/Show'
import Recipes from '../../pages/Recipes'
import Favorites from '../../pages/Favorites'
import Login from '../User/Login'
import Signup from '../User/Signup'

export default function Main() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Cocktails />} />
				<Route path='/cocktail/:id' element={<Show />} />
				<Route path='/recipes' element={<Recipes />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</main>
	)
}
