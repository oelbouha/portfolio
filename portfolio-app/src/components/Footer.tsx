
import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle';


const footerBackgroundCOlor = "white"

interface FooterProps {
	color: string,
	startHeaderAnimation: boolean
}

function Footer({color, startHeaderAnimation}: FooterProps) {
	const [isAnimated, setIsAnimated] = useState(true)
	const logoText = useRef(null)
	const descriptionText = useRef(null)

	const animateIntroTextOut = () => {
		const text = logoText.current?.children

		gsap.fromTo(
			text, 
			{opacity: 1},
			{
				fontSize: "5rem",
				opacity: 1,
				duration: 2,
				ease: "power3.inOut",
				stagger: {
					amount: 0.1,
					from: "start"
				},
				onComplete: () => {
				}
			}
		)
	}
	const animateLogo = () => {
		const menu = logoText.current
		gsap.fromTo(
			menu,
			{opacity: 0},
			{
				opacity: 1,
				transformOrigin: 'center center',
				duration: 2,
				ease: "power3.inOut",
				stagger: {
					amount: 0.5,
					from: "start"
				},
				onComplete: () => {
					animateIntroTextOut()
				}
			}
		)
	}
	useEffect( () =>{
		if (startHeaderAnimation) {
			// animateLogo()
		}
	}, [startHeaderAnimation])

	return (
		<div className={`footer-container   overflow-hidden flex p-8 justify-between`}>
			<div className="logo-container flex flex-end gap-11">
				<div className={`logo-style ${startHeaderAnimation ? "" : "hidden" }`} style={{color: color}} ref={logoText}>
					<p>VAN<br/> HOLZ <br/>CO.</p>
				</div>
			</div>
			<div className='social-media-container flex flex-row gap-8 self-end'>
				<div className='social-media-link flex gap-3'>
					{/* <img className='social-media-icon' src='../public/github.svg' />
					<img className='social-media-icon' src='../public/instagram.svg' />
					<img className='social-media-icon' src='../public/linkedin.svg' /> */}
				</div>
				<div className='social-media-link flex  font-roboto gap-10'>
					{/* <a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> twitter </a>
					<a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> github </a>
					<a className='social-link' style={{color: color}} href='https://www.linkedin.com/in/outman-elbouhali-55bb56270/'>linkedin </a> */}
				</div>
				<div  style={{color: color}} className='self-end'>
					{/* ©/2024 */}
				</div>
			</div>
		</div>
	)
}

export default Footer 