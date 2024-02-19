import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router'

export default function Profile() {
	const { user, isAuthenticated, isLoading } = useAuth0()

	if (!isAuthenticated) {
		return <Navigate to='/' />
	}

	if (isLoading) {
		return <div>Loading ...</div>
	}
	return (
		isAuthenticated && (
			<>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</>
		)
	)
}

//res.locals for full-stack?
