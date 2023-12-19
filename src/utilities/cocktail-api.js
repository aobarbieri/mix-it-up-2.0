import config from '../config'

export async function index(ingredients) {
	let endpoint = `${config.BASE_URL}/${config.API_KEY}/filter.php?i=${ingredients}`
	console.log(endpoint)
	const res = await fetch(endpoint, {
		method: 'GET',
		contentType: 'application/json',
	})

	if (res.ok) {
		return await res.json()
	} else {
		throw new Error('Invalid request')
	}
}

export async function show(id) {
	let endpoint = `${config.BASE_URL}/${config.API_KEY}/lookup.php?i=${id}`
	const res = await fetch(endpoint, {
		method: 'GET',
	})

	if (res.ok) {
		return await res.json()
	} else {
		throw new Error('Invalid request')
	}
}
