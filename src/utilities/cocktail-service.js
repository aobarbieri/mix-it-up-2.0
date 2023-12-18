import * as cocktailAPI from './cocktail-api'

export async function getCocktails() {
	try {
		const data = await cocktailAPI.index()
		return data
	} catch (err) {
		console.log(err.message)
	}
}
