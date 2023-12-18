import * as cocktailAPI from './cocktail-api'

export async function getCocktails(ingredients) {
	try {
		const data = await cocktailAPI.index(ingredients)
		return data
	} catch (err) {
		console.log(err.message)
	}
}
