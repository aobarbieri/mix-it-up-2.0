import config from '../config'

export async function index() {
	const res = await fetch(config.BASE_URL, {
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
