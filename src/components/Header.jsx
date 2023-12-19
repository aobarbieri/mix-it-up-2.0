import logo from '../assets/images/logo.svg'
import hamburgerMenu from '../assets/icons/hamburger-menu.svg'
import search from '../assets/icons/search.svg'

export default function Header() {
	return (
		<nav className='app-default-width flex justify-between items-center h-20 bg-white pt-6 md:p-0'>
			<button className='md:hidden'>
				<img className='' src={hamburgerMenu} alt='menu icon' />
			</button>

			<img className='w-28 md:w-32 mb-2 md:m-0' src={logo} alt='Mix it up logo' />

			<div className='md:flex items-center gap-x-16'>
				<ul className='hidden md:flex gap-x-16'>
					<li>
						<a className='link-secondary'>Cocktail calculator</a>
					</li>
					<li>Recipes</li>
					<li>Login/sign up</li>
				</ul>
				<img className='' src={search} alt='search icon' />
			</div>
		</nav>
	)
}
