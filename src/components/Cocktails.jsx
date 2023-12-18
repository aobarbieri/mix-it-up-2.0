import { useState } from 'react'
import { getCocktails, getCocktail } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'

export default function Cocktails() {
    const [cocktails, setCocktails] = useState([])
    const [cocktailInfo, setCocktailInfo] = useState([])

    async function getCocktailInfo(id) {
        const cocktailData = await getCocktail(id)
        if(cocktailData) setCocktailInfo()
    }

	async function handleRequest(ingredients) {
		const cocktailsData = await getCocktails(ingredients)
        if (cocktailsData) setCocktails(cocktailsData.drinks)
	}

    console.log(cocktails)
    console.log(cocktailInfo)

	return (
		<>
			<SearchIngredients findCocktails={handleRequest} />
			<section>
				{cocktails?.map((c) => (
					<div key={c.idDrink}>
						<h2>Cocktails you can make</h2>
						{/* Apply conditional visibility here */}
						<p>There are no recipes based on the ingredients you selected.</p>

						{/* Apply conditional visibility here */}
						<img src={c.strDrinkThumb} alt='Drink picture' />
						<h3>{c.strDrink}</h3>
						{/* calculate preparation time based on the number of ingredients */}
                        <p>Preparation time</p>
                        

						{/* List of characteristics - this info comes from a different api call*/}
						<ul>
							<li>strCategory</li>
							<li>strGlass</li>
							<li>strAlcoholic</li>
						</ul>
					</div>
				))}
			</section>
		</>
	)
}
