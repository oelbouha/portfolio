
import MenuIcon  from "./menuIcon"
import Menu from "./menu"
import '../Header.css'
import { useEffect, useRef, useState } from 'react'

type HeaderProps = {
	color: string,
	startHeaderAnimation: boolean,
	headerAnimationComplete: () => void
}

const headerBackgroundCOlor = "white"

function Header ({color, startHeaderAnimation, headerAnimationComplete}: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isMenuClose, setIsMenuClose] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [isColorChanged, setIsColorChanged] = useState(false)
	const [animateIcon, setAnimateIcon] = useState(false)


	const handleCompleteAnimation = () => {
		headerAnimationComplete()
	}
	const menuAnimationComplete = () => {
		console.log("seting false")
		setAnimateIcon(false)
	}
	
	const handleClicked = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false)
			setIsMenuClose(true)
		}
		else {
			setIsMenuOpen(true)
			setIsMenuClose(false)
		}
		if (isMenuOpen)
			setIsColorChanged(false)
		else setIsColorChanged(true)
		setAnimateIcon(true)
	}

	return (
		<div className={`header-container  overflow-hidden flex w-screen p-8`}>
			<MenuIcon color="white" onClick={handleClicked} animate={animateIcon} changeColor={isColorChanged} 
				animationComplete={handleCompleteAnimation} 
				startMenuAnimation={startHeaderAnimation} 
				menuAnimationComplete={menuAnimationComplete}/>
			<Menu openMenu={isMenuOpen} closeMenu={isMenuClose} />
		</div>
	)
}

export default Header