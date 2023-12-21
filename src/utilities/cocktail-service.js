import * as cocktailAPI from './cocktail-api'

export async function getCocktails(ingredients) {
	const formatedIngredients = ingredients.replace(/\s/g, '')
	try {
		return await cocktailAPI.index(formatedIngredients)
	} catch (err) {
		console.log(err.message)
	}
}

export async function getCocktail(id) {
	try {
		const data = await cocktailAPI.show(id)
		return data.drinks[0]
	} catch (err) {
		console.log(err.message)
	}
}

export async function getCocktailIngredients(id) {
	try {
		const ingredients = []
		const data = await cocktailAPI.show(id)
		const cocktail = data.drinks[0]

		for (let i = 1; i <= 15; i++){
			let prop = `strIngredient${i}`
			if (cocktail[prop.toString()])
			ingredients.push(cocktail[prop.toString()])
		}
		return ingredients
	} catch (err) {
		console.log(err.message)
	}
}

export async function getCocktailList(letter) {
	try {
		const data = await cocktailAPI.list(letter)
		return data.drinks
	} catch (err) {
		console.log(err.message)
	}
}

export async function getLabels(id) {
	try {
		const data = await cocktailAPI.show(id)
		const labels = [data.drinks[0].strCategory, data.drinks[0].strAlcoholic, data.drinks[0].strGlass]
		return labels
	} catch (err) {
		console.log(err.message)
	}
}