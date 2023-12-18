import { useState, useEffect } from 'react'
import { getCocktails } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'

export default function Cocktails() {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        getCocktails()
    })

	return (
		<>
			<SearchIngredients />
			<section>
				<h2>Cocktails you can make</h2>
				<p>There are no recipes based on the ingredients you selected.</p>
			</section>
		</>
	)
}
