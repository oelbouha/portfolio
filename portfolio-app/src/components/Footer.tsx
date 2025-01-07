
import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle';


const footerBackgroundCOlor = "white"

interface FooterProps {
	color: string,
}

function Footer({color}: FooterProps) {
	const [isAnimated, setIsAnimated] = useState(true)
	const logoText = useRef(null)

	const animateLogo = () => {
		const menu = logoText.current
		gsap.fromTo(
			menu,
			{y: 100, opacity: 0.5, },
			{
				y: 0,
				duration: 1,
				onComplete: () => {
					setIsAnimated(false)
				},
				delay: 4,
				ease: "expo.inOut"
			}
		)
	}
	useEffect( () =>{
		if (isAnimated) animateLogo()
	}, [isAnimated])

	return (
		<div className={`footer-container  bg-${footerBackgroundCOlor} overflow-hidden flex p-8 justify-between`}>
			<div className="logo-container">
				<div className='logo-style' style={{color: color}} ref={logoText}>
					<p>SOFTWARE<br />DEVELOPER.</p>
				</div>
			</div>
			<div className='social-media-container flex flex-row gap-8 self-end'>
				<div className='social-media-link flex gap-3'>
					{/* <img className='social-media-icon' src='../public/github.svg' />
					<img className='social-media-icon' src='../public/instagram.svg' />
					<img className='social-media-icon' src='../public/linkedin.svg' /> */}
				</div>
				{/* <div className='social-media-link flex flex-col'>
					<a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> github </a>
					<a className='social-link' style={{color: color}} href='https://www.linkedin.com/in/outman-elbouhali-55bb56270/'>linkedin </a>
				</div>
				<div  style={{color: color}} className='self-end'>
					©/2024
				</div> */}
			</div>
		</div>
	)
}

export default Footer 