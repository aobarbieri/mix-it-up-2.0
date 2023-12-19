import { useState } from 'react'
import { getCocktails, getCocktail } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'

export default function Cocktails() {
	const [cocktails, setCocktails] = useState([])
	const [cocktailInfo, setCocktailInfo] = useState([])

	async function getCocktailInfo(id) {
		const cocktailData = await getCocktail(id)
		if (cocktailData) setCocktailInfo()
	}

	async function handleRequest(ingredients) {
		const cocktailsData = await getCocktails(ingredients)
		if (cocktailsData) setCocktails(cocktailsData.drinks)
	}

	console.log(cocktails)
	console.log(cocktailInfo)

	return (
		<section className='app-default-width bg-light-grey mt-5 md:mt-0'>
			<SearchIngredients findCocktails={handleRequest} />

			<h2>Cocktails you can make</h2>
			{/* Apply conditional visibility here */}
			<p>There are no recipes based on the ingredients you selected.</p>
			<section className='flex flex-wrap justify-between'>
				{cocktails?.map((c) => (
					<div key={c.idDrink}>
						{/* Apply conditional visibility here */}
						<img className='cocktail-thumbnail' src={c.strDrinkThumb} alt='Drink picture' />

						<div className='flex justify-between'>
							<h3>{c.strDrink}</h3>
							{/* calculate preparation time based on the number of ingredients */}
							<p>2min</p>
						</div>

						{/* List of characteristics - this info comes from a different api call*/}
						<ul className='flex flex-wrap gap-x-1.5'>
							<li>strCategory</li>
							<li>strGlass</li>
							<li>strAlcoholic</li>
						</ul>
					</div>
				))}
			</section>
		</section>
	)
}
