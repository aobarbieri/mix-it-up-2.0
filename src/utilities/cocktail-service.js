import * as cocktailAPI from './cocktail-api'

export async function getCocktails(ingredients) {
	try {
		return await cocktailAPI.index(ingredients)
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