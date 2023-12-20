import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getCocktail, getCocktailIngredients } from '../utilities/cocktail-service'
import backIcon from '../assets/icons/back.svg'

export default function Show() {
	const { id } = useParams()
	const [cocktail, setCocktail] = useState({})
	const [ingredients, setIngredients] = useState([])

	const handleRequest = async () => {
		const data = await getCocktail(id)
		setCocktail(data)
	}

	const getIngredients = async () => {
		const data = await getCocktailIngredients(id)
		setIngredients(data)
	}

	useEffect(() => {
		handleRequest()
		getIngredients()
	}, [])

	document.title = 'Mix It Up - ' + cocktail.strDrink

	return (
		<section className='md:pt-4 md:pb-24'>
			<div className='cocktail-show-wrapper bg-white pt-4 px-4 md:py-8 md:px-11 md:rounded-sm'>
				<div className='flex flex-col gap-y-5 '>
					<Link to={'/'} className='back-btn font-bold'>
						<img src={backIcon}></img>Back
					</Link>
					<h1 className='text-2xl font-black tracking-wide'>{cocktail.strDrink}</h1>
					<img className='h-80 w-full md:w-96' src={cocktail.strDrinkThumb} alt='' />
				</div>

				<div className='flex flex-col gap-y-4 my-10'>
					<h2 className='text-xl font-black'>Ingredients</h2>
					{ingredients.map((el) => {
						return <p key={el}>{el}</p>
					})}
				</div>

				<div>
					<h2 className='font-black text-xl mb-4'>Instructions</h2>
					<p className='pb-10'>{cocktail.strInstructions}</p>
				</div>
			</div>
		</section>
	)
}
