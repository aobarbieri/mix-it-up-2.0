import Cocktails from './Cocktails'
import CocktailDetails from './CocktailDetails'

export default function Main() {
	return (
		<main>
			<header>
				<p className='app-default-width py-5 md:p-0 md:py-8 text-white'>
					Select which ingredients you have, and we&#39;ll show you all the different cocktails you can make.
				</p>
			</header>
			<Cocktails />
			<CocktailDetails />
		</main>
	)
}