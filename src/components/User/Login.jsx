import { useState } from 'react'
import { login } from '../../utilities/user-service'
import { Link } from 'react-router-dom'

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
		const userData = await login(user)
		console.log(userData)

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
				New here? <Link to='/signup'>Create account</Link>
			</p>
		</>
	)
}
