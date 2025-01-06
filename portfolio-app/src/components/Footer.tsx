
import '../App.css'
import { useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle'



const footerBackgroundCOlor = "white"

interface FooterProps {
	color: string,
}
function Footer({color}: FooterProps) {
	return (
		<div className={`footer-container  bg-${footerBackgroundCOlor} overflow-hidden flex p-8 justify-between`}>
			<div className="logo-container">
				<div className='logo-style' style={{color: color}}>
					<p>SOFTWARE<br />DEVELOPER.</p>
				</div>
				{/* <div className='' style={{color: color}} >
					
				</div> */}
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