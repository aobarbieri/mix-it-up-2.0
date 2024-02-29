import config from '../config'

export async function index(ingredients) {
	let endpoint = `${config.BASE_URL}/${config.API_KEY}/filter.php?i=${ingredients}`
	const res = await fetch(endpoint, {
		method: 'GET',
		contentType: 'application/json',
	})
	if (res.ok) {
		const data = await res.json()
		if (data.drinks === 'None Found') {
			return 'None Found'
		} else return data
	} else {
		throw new Error('Invalid request')
	}
}
