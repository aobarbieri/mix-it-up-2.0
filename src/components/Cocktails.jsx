import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCocktails } from '../utilities/cocktail-service'
import SearchIngredients from './SearchIngredients'
import cocktailsIcon from '../assets/images/cocktails.svg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Arrow(props) {
	const { className, style, onClick } = props
	return <div className={className} onClick={onClick} />
}

export default function Cocktails() {
	const [cocktails, setCocktails] = useState([])
	//const [cocktailInfo, setCocktailInfo] = useState([])

	async function handleRequest(ingredients) {
		const cocktailsData = await getCocktails(ingredients)
		if (cocktailsData) setCocktails(cocktailsData.drinks)
	}

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 821,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	document.title = 'Mix It Up'
	return (
		<div className='pb-5 md:pb-36'>
			<section className='bg-header'>
				<p className='app-default-width py-5 md:p-0 md:py-8 text-white'>
					Select which ingredients you have, and we&#39;ll show you all the different cocktails you can make.
				</p>
			</section>

			<section className='app-default-width mt-5 md:mt-0'>
				<SearchIngredients findCocktails={handleRequest} />

				<div className='bg-light-grey p-5 pb-10 md:pt-7 md:pb-16 md:px-10 flex flex-col gap-y-5 md:gap-y-7 rounded-b container-min-height'>
					<div className='flex items-center gap-x-3.5'>
						<img src={cocktailsIcon} alt='Cocktails' />
						<h2 className='font-bold text-xl md:text-2xl leading-7'>Cocktails you can make</h2>
					</div>
					{/* Apply conditional visibility here */}
					<p className='color-secondary'>There are no recipes based on the ingredients you selected.</p>

				
					<Slider {...sliderSettings}>
						{cocktails.map((c) => (
							<Link to={`/cocktail/${c.idDrink}`} key={c.idDrink}>
								<div className='container-cocktail'>
									<img className='cocktail-thumbnail' src={c.strDrinkThumb} alt='Drink picture' />

									<div className='flex justify-between mt-2 mb-1 text-sm'>
										<h3 className='font-black tracking-wide'>{c.strDrink}</h3>
										{/* calculate preparation time based on the number of ingredients */}
										<p className='clock'>2 min</p>
									</div>
									{/* List of characteristics - this info comes from a different api call*/}
									<ul className='flex flex-wrap gap-x-1.5 pb-7'>
										<li className='label'>strCategory</li>
										<li className='label'>strGlass</li>
										<li className='label'>strAlcoholic</li>
									</ul>
								</div>
							</Link>
						))}
					</Slider>
				</div>
			</section>
		</div>
	)
}
