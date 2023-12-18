import * as cocktailAPI from './cocktail-api'

export async function getCocktails(ingredient) {
	try {
		const data = await cocktailAPI.index(ingredient)
		return data
	} catch (err) {
		console.log(err.message)
	}
}
