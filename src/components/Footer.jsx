import logo from '../assets/images/logo-secondary.svg'

export default function Footer() {
	return (
		<footer className='h-60'>
			<section className='app-default-width h-full flex flex-col justify-end pb-10'>
				<img className='mx-auto' src={logo} alt='' />
				<p className='text-white text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed esse aliquid dignissimos repellendus pariatur eum vitae cum quos hic.
				</p>
			</section>
		</footer>
	)
}
