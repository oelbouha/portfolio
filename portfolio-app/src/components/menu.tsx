import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import '../Menu.css'

interface props {
	openMenu: boolean,
	closeMenu: boolean,
}

function Menu( {openMenu, closeMenu} : props ) {
	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	const menuWindow = useRef(null)

	useEffect(() => {
		if (openMenu){
			openMenuWindow()
		}
		if (closeMenu) closeMenuWindow()

	}, [openMenu, closeMenu])

	
	const openMenuWindow = () => {
		if (isAnimating) return
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  width: 0, height: 0, borderRadius: "0",},
		  {
			width: "45dvw",
			height: "99.5dvh",
			borderRadius: "2.5rem",
			duration: 1.6,
			ease: "power3.inOut",
			onComplete: () => {
				setIsAnimating(false)
			}
		  }
		)
	}
	const closeMenuWindow = () => {
		if (isAnimating) return
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {
		  	height: "99.5dvh",
			width: "45dvw", 
			borderRadius: "2.5rem",
			},
		  {
			  width: 0,
			  height: 0,
			  borderRadius: "0",
			  duration: 1.6,
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