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

export async function createAccount(user) {
	try {
		const newUser = await userAPI.signup(user)
		return newUser
	} catch (err) {
		console.log(err)
		throw new Error(err)
	}
}
