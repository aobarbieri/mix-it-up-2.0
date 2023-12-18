import * as cocktailAPI from './cocktail-api'

export async function getCocktails(ingredients) {
	try {
		const cocktailList = await cocktailAPI.index(ingredients)
		return cocktailList
	} catch (err) {
		console.log(err.message)
	}
}

export async function getCocktail(id) {
	try {
		const cocktail = await cocktailAPI.show(id)
		return cocktail
	} catch (err) {
		console.log(err.message)
	}
}
