import config from '../config'

export async function index(ingredients) {
	let endpoint = `${config.BASE_URL}=${ingredients}`
	console.log(endpoint)
	const res = await fetch(endpoint, {
		method: 'GET',
		headers: {
			'X-Api-Key': config.API_KEY,
		},
		contentType: 'application/json',
	})

	if (res.ok) {
		const cocktails = await res.json()
		console.log(cocktails)
		return cocktails
	} else {
		throw new Error('Invalid request')
	}
}
