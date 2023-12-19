import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getCocktail, getCocktailIngredients } from '../utilities/cocktail-service'

export default function Show() {
	const { id } = useParams()
	const [cocktail, setCocktail] = useState({})
	const [ingredients , setIngredients] = useState([])

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
		<section className='app-default-width bg-white'>
			<a>Back</a>
			<h1>{cocktail.strDrink}</h1>
			<img src={cocktail.strDrinkThumb} alt='' />
            <p>Drink description</p>
            
            <h2>Ingredients</h2>
            {ingredients.map((el) => {
                return <p key={el}>{el}</p>
            })}

			<h2>Instructions</h2>
			<p>{cocktail.strInstructions}</p>
		</section>
	)
}
