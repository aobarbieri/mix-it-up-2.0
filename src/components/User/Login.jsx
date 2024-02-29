import { useState } from 'react'
import { createAccount } from '../../utilities/user-service'

export default function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	})

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const userDate = await createAccount(user)

		setUser({
			email: '',
			password: '',
		})
	}

	return (
		<>
			<h1>Login into your account</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' name='email' value={user.email} placeholder='email' onChange={handleChange} />

				<label htmlFor='password'>password</label>
				<input type='password' id='password' name='password' value={user.password} onChange={handleChange} />

				<input type='submit' value='Login' />
			</form>

			<p>
				New here? <button>Create account</button>
			</p>
		</>
	)
}
