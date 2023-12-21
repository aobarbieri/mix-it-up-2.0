import logo from '../assets/images/logo-secondary.svg'

export default function Footer() {
	return (
		<footer className='h-60 md:h-44'>
			<section className='app-default-width h-full flex flex-col md:flex-row md:max-w-xl justify-end items-center pb-10'>
				<img className='w-24 md:mr-2.5' src={logo} alt='' />
				<p className='text-white text-sm'>
					Your ultimate source for exciting drink recipes! Discover a world of creative cocktails and refreshing beverages with easy-to-follow
					instructions. Elevate your mixology game and impress your guests at any gathering. Cheers to endless flavor possibilities!
				</p>
			</section>
		</footer>
	)
}
