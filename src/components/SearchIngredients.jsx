import {useState} from 'react'

export default function SearchIngredients({ findCocktails }) {
	const [ingredients, setIngredients] = useState({
		name: '',
	})

	function handleChange(e) {
		setIngredients({ ...ingredients, 'name': e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const ingredientsList = ingredients.name
		// Verification to avoid errors
		// Needs to remove white space between words
		// needs to add coma between words in order to make the api call
		try {
			await findCocktails(ingredientsList)
		} catch (err) {
			console.log(err)
		}
		
	}

	return (
		<section>
			<h2>Your ingredients</h2>
			<form onSubmit={handleSubmit}>
				<input type='search' placeholder='Search ingredients' name='search' onChange={handleChange} />
				<input type="submit" />
			</form>
		</section>
	)
}
