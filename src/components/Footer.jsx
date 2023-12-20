import logo from '../assets/images/logo-secondary.svg'

export default function Footer() {
	return (
		<footer className='h-60 md:h-44'>
			<section className='app-default-width h-full flex flex-col md:flex-row md:max-w-xl justify-end items-center pb-10'>
				<img className='w-24 md:mr-2.5' src={logo} alt='' />
				<p className='text-white text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed esse aliquid dignissimos repellendus pariatur eum vitae cum quos hic.
				</p>
			</section>
		</footer>
	)
}
