import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithNavigate from './components/Auth/AuthProvider.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<Auth0ProviderWithNavigate>
			<App />
		</Auth0ProviderWithNavigate>
	</Router>
)
