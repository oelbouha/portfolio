
import MenuIcon  from "./menuIcon"
import Menu from "./menu"
import '../Header.css'
import { useRef, useState } from 'react'

type HeaderProps = {
	color: string
}

const headerBackgroundCOlor = "white"

function Header ({color}: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isMenuClose, setIsMenuClose] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [isColorChanged, setIsColorChanged] = useState(false)
	const [animateIcon, setAnimateIcon] = useState(false)



	const handleClicked = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false)
			setIsMenuClose(true)
		}
		else {
			setIsMenuOpen(true)
			setIsMenuClose(false)
		}
		setAnimateIcon(true)
		setIsColorChanged(true)
	}

	return (
		<div className={`header-container bg-${headerBackgroundCOlor} overflow-hidden flex w-screen p-8`}>
			<MenuIcon color="black" onClick={handleClicked} animate={animateIcon} changeColor={isColorChanged}/>
			<Menu openMenu={isMenuOpen} closeMenu={isMenuClose} />
		</div>
	)
}

export default Header