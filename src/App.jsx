import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { UserContext } from './data/DataContext'
import { useState } from 'react'

function App() {
	const { Provider: UserData, Consumer } = UserContext
	const [state, setState] = useState({})

	return (
		<>
			<UserData value={{ state, setState }}>
				<Header />
				<Main />
				<Footer />
			</UserData>
		</>
	)
}

export default App

//Example of how to use context
// import { useContext } from 'react'
// import { PeopleContext } from '../relative-path/to/data/context'

// function ExampleCard(props) {
// 	const { state, setState } = useContext(PeopleContext)

// 	return (
// 		<div className='card'>
// 			<h2>{state.dataProperty}</h2>
// 			<button>Click!</button>
// 		</div>
// 	)
// }
