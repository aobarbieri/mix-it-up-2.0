import Cocktails from './Cocktails'
import CocktailDetails from './CocktailDetails'

export default function Main() {
	return (
		<>
			<section>
				<p>Select which ingredients you have, and we&#39;ll show you all the different cocktails you can create.</p>
			</section>
			<Cocktails />
			<CocktailDetails />
		</>
	)
}