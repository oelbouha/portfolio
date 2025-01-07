import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import '../Menu.css'

interface props {
	openMenu: boolean,
	closeMenu: boolean,
}

function Menu( {openMenu, closeMenu} : props ) {
	const [isAnimating, setIsAnimating] = useState(false)
	const menuWindow = useRef(null)

	useEffect(() => {
		if (openMenu) openMenuWindow()
		if (closeMenu) closeMenuWindow()

	}, [openMenu, closeMenu])

	
	const openMenuWindow = () => {
		if (isAnimating) return
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 0,},
		  {
			duration: 1.5,
			scale: 380,
			ease: "power3.inOut",
			onComplete: () => {
				setIsAnimating(false)
			}
		  }
		)
	}
	const closeMenuWindow = () => {
		// if (isAnimating) return
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 380,},
		  {
			duration: 2,
			scale: 1,
			ease: "power3.inOut",
			onComplete: () => {
				setIsAnimating(false)
			}
		  }
		)
	}


	return (
		<div className={`menu-page ${openMenu ? "activate": ""} `}
			ref={menuWindow} 
		>
		</div>
	)
}

export default Menu