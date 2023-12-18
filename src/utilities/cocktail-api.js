import config from '../config'

export async function index(ingredients) {
	let endpoint = `${config.BASE_URL}/${config.API_KEY}/filter.php?i=${ingredients}`
	console.log(endpoint)
	const res = await fetch(endpoint, {
		method: 'GET',
		contentType: 'application/json',
	})

	if (res.ok) {
		const cocktails = await res.json()
		return cocktails
	} else {
		throw new Error('Invalid request')
	}
}

export async function show(id) {
	let endpoint = `${config.BASE_URL}/${config.API_KEY}/lookup.php?iid=${id}`
	console.log(endpoint)
	const res = await fetch(endpoint, {
		method: 'GET'
	})

	if (res.ok) {
		const cocktail = res.json()
		console.log(cocktail)
		return cocktail
	} else {
		throw new Error('Invalid request')
	}
}
