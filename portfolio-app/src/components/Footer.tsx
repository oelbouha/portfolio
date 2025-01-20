import '../App.css'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react'


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
			<div className="logo-container flex flex-col gap-4">
				<div className={`logo-style ${startHeaderAnimation ? "" : "hidden" }`} style={{color: color}} ref={logoText}>
					<p>VAN<br/> HOLZ <br/>CO.</p>
				</div>
				{/* <div className='description'>
					A collection of recent work
					by web developer outman elbouhali
				</div> */}
			</div>
			<div className='social-media-container flex flex-row gap-8 self-end'>
				<div className='social-media-link flex gap-3'>
					{/* <img className='social-media-icon' src='../public/github.svg' />
					<img className='social-media-icon' src='../public/instagram.svg' />
					<img className='social-media-icon' src='../public/linkedin.svg' /> */}
				</div>
				<div className='social-media-link flex  font-roboto gap-10 z-30'>
					<div className='flex justify-center items-center gap-1'>
						<a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> mail </a>
						<svg width="11" height="11" viewBox="0 0 11 11" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 0.5V2H7.9425L0.75 9.1925L1.8075 10.25L9 3.0575V9.5H10.5V0.5H1.5Z"></path>
						</svg>
					</div>
					<div className='flex justify-center items-center gap-1'>
						<a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> github </a>
						<svg width="11" height="11" viewBox="0 0 11 11" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 0.5V2H7.9425L0.75 9.1925L1.8075 10.25L9 3.0575V9.5H10.5V0.5H1.5Z"></path>
						</svg>
					</div>
					<div className='flex justify-center items-center gap-1'>
						<a className='social-link' style={{color: color}} href='https://github.com/oelbouha'> linkedin </a>
						<svg width="11" height="11" viewBox="0 0 11 11" fill="CurrentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 0.5V2H7.9425L0.75 9.1925L1.8075 10.25L9 3.0575V9.5H10.5V0.5H1.5Z"></path>
						</svg>
					</div>
				</div>
				<div  style={{color: color}} className='self-end'>
					{/* ©/2024 */}
				</div>
			</div>
		</div>
	)
}

export default Footer 