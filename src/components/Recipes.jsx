import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCocktailList } from '../utilities/cocktail-service'

export default function Recipes() {
	const [cocktails, setCocktails] = useState([])

	async function handleRequest(e) {
		const cocktailsData = await getCocktailList(e.target.value)
		if (cocktailsData) setCocktails(cocktailsData)
	}

	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    document.title = 'Mix It Up - Recipes'
    
	return (
		<section className='app-default-width bg-white'>
			<h2>A to Z List of Cocktails</h2>
			<div>
				{alphabet.map((letter) => (
					<button className='px-2' key={letter} value={letter} onClick={handleRequest}>
						{letter.toUpperCase()}
					</button>
				))}
			</div>
			<ul>
				{cocktails.map((c) => (
					<Link to={`/cocktail/${c.idDrink}`} key={c.idDrink}>
						<li>{c.strDrink}</li>
					</Link>
				))}
			</ul>
		</section>
	)
}
