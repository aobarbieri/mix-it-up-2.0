import { useState } from 'react'
import ingredientsIcon from '../assets/images/ingredients.svg'
import searchIcon from '../assets/icons/search.svg'

export default function SearchIngredients({ findCocktails }) {
	const [ingredients, setIngredients] = useState({
		name: '',
	})

	function handleChange(e) {
		setIngredients({ ...ingredients, name: e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const ingredientsList = ingredients.name
		try {
			await findCocktails(ingredientsList)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<section className='bg-white p-5 pb-10 md:p-10 flex flex-wrap gap-y-5 shadow-md border-b border-zinc-300 rounded-t md:rounded-none'>
			<div className='flex items-center gap-x-3.5'>
				<img src={ingredientsIcon} alt='Ingredients' />
				<h2 className='font-bold text-xl md:text-2xl leading-7'>Your ingredients</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='relative'>
					<input className='rounded-input md:w-1/2' type='search' placeholder='Search ingredients' name='search' onChange={handleChange} />
					<button className='absolute w-6 top-2.5 left-3 z-10' type='submit'>
						<img src={searchIcon} alt='search icon' />
					</button>
				</div>
			</form>
		</section>
	)
}
