import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCocktailList } from '../../utilities/cocktail-service'

export default function Recipes() {
	const [cocktails, setCocktails] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	async function handleRequest(e) {
		const cocktailsData = await getCocktailList(e.target.value)
		if (cocktailsData) setCocktails(cocktailsData)
	}

	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	document.title = 'Mix It Up - Recipes'

	return (
		<div className='pb-5 md:pb-36'>
			<section className='app-default-width mt-5 md:mt-0'>
				<section className='bg-white flex gap-y-5 shadow-md border-b border-zinc-300 rounded-t md:rounded-none flex-col p-5 pb-10 md:p-10'>
					<h2 className='font-bold text-xl md:text-2xl leading-7'>A to Z List of Cocktails</h2>
					<div>
						{alphabet.map((letter) => (
							<button className='px-2' key={letter} value={letter} onClick={handleRequest}>
								{letter.toUpperCase()}
							</button>
						))}
					</div>
				</section>
				<ul className='bg-light-grey p-5 pb-10 md:pt-7 md:pb-16 md:px-10 flex flex-col gap-y-5 md:gap-y-7 rounded-b container-min-height'>
					{cocktails.map((c) => (
						<Link to={`/cocktail/${c.idDrink}`} key={c.idDrink}>
							<li>{c.strDrink}</li>
						</Link>
					))}
				</ul>
			</section>
		</div>
	)
}
