import * as userAPI from './user-api'

export async function login(user) {
	try {
		const response = await userAPI.login(user)
		return response
	} catch (err) {
		console.log(err)
		throw new Error(err)
	}
}

export async function signup(user) {
	try {
		const res = await userAPI.signup(user)
		return res
	} catch (err) {
		console.log(err)
		throw new Error(err)
	}
}
