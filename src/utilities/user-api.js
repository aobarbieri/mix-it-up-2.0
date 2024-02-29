import config from '../config'

export async function login(user) {
	let endpoint = `${config.BACKEND_URL}/user/login`
	try {
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
		if (res.ok) {
			return res.json()
		}
	} catch (err) {
		throw new Error('Invalid Request')
	}
}

export async function signup(user) {
	let endpoint = `${config.BACKEND_URL}/user/signup`
	try {
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
		if (res.ok) {
			return res.json()
		}
	} catch (err) {
		throw new Error('Invalid Request')
	}
}
