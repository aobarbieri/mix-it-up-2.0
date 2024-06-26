import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/',
			},
		})
	}

	return <button onClick={handleLogin}>Login/sign up</button>
}

export default LoginButton
