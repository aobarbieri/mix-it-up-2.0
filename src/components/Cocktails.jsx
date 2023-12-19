import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCocktails } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'

export default function Cocktails() {
	const [cocktails, setCocktails] = useState([])
	const [cocktailInfo, setCocktailInfo] = useState([])

	async function handleRequest(ingredients) {
		const cocktailsData = await getCocktails(ingredients)
		if (cocktailsData) setCocktails(cocktailsData.drinks)
	}

	document.title = 'Mix It Up'
	return (
		<>
			<section className='bg-header'>
				<p className='app-default-width py-5 md:p-0 md:py-8 text-white'>
					Select which ingredients you have, and we&#39;ll show you all the different cocktails you can make.
				</p>
			</section>

			<section className='app-default-width mt-5 md:mt-0'>
				<SearchIngredients findCocktails={handleRequest} />

				<div className='bg-light-grey'>
					<h2>Cocktails you can make</h2>
					{/* Apply conditional visibility here */}
					<p>There are no recipes based on the ingredients you selected.</p>

					<section className='flex flex-wrap justify-between'>
						{/* Only loop if there are results from the api */}
						{cocktails.map((c) => (
							<Link to={`/cocktail/${c.idDrink}`} key={c.idDrink}>
								<div>
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
							</Link>
						))}
					</section>
				</div>
			</section>
		</>
	)
}
