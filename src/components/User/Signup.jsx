import { useState } from 'react'
import { signup } from '../../utilities/user-service'
import { Link } from 'react-router-dom'

export default function Signup() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	})

	function handleChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const userData = await signup(user)
		console.log(userData)

		setUser({
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
		})
	}

	return (
		<>
			<h1>Create an account</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' name='name' value={user.name} onChange={handleChange} />

				<label htmlFor='email'>Email</label>
				<input type='text' id='email' name='email' value={user.email} onChange={handleChange} />

				<label htmlFor='password'>password</label>
				<input type='password' id='password' name='password' value={user.password} onChange={handleChange} />

				<label htmlFor='passwordConfirm'>Confirm Password</label>
				<input type='password' id='passwordConfirm' name='passwordConfirm' value={user.passwordConfirm} onChange={handleChange} />

				<input type='submit' value='Signup' />
			</form>

			<p>
				Already have an account? <Link to='/login'>Login</Link>
			</p>
		</>
	)
}
