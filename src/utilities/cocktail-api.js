import config from '../config'

export async function index(ingredient) {
    let endpoint = `${config.BASE_URL}=${ingredient}`
	const res = await fetch(endpoint, {
		method: 'GET',
		headers: {
			'X-Api-Key': config.API_KEY,
		},
	})

	if (res.ok) {
		const cocktails = await res.json()
		console.log(cocktails)
		return cocktails
	} else {
		throw new Error('Invalid request')
	}
}
