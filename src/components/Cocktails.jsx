import { useState, useEffect } from 'react'
import { getCocktails } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'

export default function Cocktails() {
	const [cocktails, setCocktails] = useState([])

	async function handleRequest(ingredients) {
		const cocktailsData = await getCocktails(ingredients)
		if (cocktailsData) setCocktails(cocktailsData)
	}

	console.log(cocktails)

	return (
		<>
			<SearchIngredients findCocktails={handleRequest} />
            <section>
                {cocktails?.map((c) => (

				<div key={c.name}>
					<h2>Cocktails you can make</h2>
					{/* Apply conditional visibility here */}
					<p>There are no recipes based on the ingredients you selected.</p>

					{/* Apply conditional visibility here */}
					<img src='' alt='Drink picture' />
					<h3>{c.name}</h3>
					<p>Preparation time</p>
					{/* List of characteristics */}
					<ul>
						<li>strong</li>
						<li>classic</li>
					</ul>
				</div>
                ))}
			</section>
		</>
	)
}
