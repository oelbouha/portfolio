import { useEffect, useRef, useState } from 'react'
import '../MenuIcon.css'
import gsap from 'gsap';


const dark = "dark"
const white = "white"

interface IconProps {
	color: string,
	changeColor: boolean,
	animate: boolean,
	onClick: () => void,
}

function MenuIcon( {color, changeColor, animate, onClick}: IconProps ) {
	let iconColor = dark
	const [isHovered, setIsHovered] = useState(false)
	const [isRendered, setIsRendered] = useState(true)
	const [isAnimating, setIsAnimating] = useState(false)
	const menuWindow = useRef(null)
	const menuDiv = useRef(null)

	const animateMenuOut = () => {
		// if (isAnimating) return
		setIsAnimating(true)
		const menu = menuDiv.current

		gsap.fromTo(
			menu,
		  { y: 0},
		  {
			y: -100,
			duration: 1,
			ease: "power3.inOut",
			onComplete: () => {
				setIsAnimating(false)
				animateMenuIn()
			}
		  }
		)
	}
	const animateMenuIn = () => {
		// if (isAnimating) return
		setIsAnimating(true)
		const menu = menuDiv.current

		gsap.fromTo(
			menu,
		  { y: -100},
		  {
			y: 0,
			duration: 1,
			ease: "power3.inOut",
			onComplete: () => {
				setIsAnimating(false)
			}
		  }
		)
	}
	const shrinkCircle = () => {
		if (isAnimating) return
		setIsAnimating(true)
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 280, opacity: 0.8},
		  {
			duration: 4,
			scale: 1,
			opacity: 1,
			ease: "power3.inOut",
			onComplete: () => {
				setIsRendered(false)
				setIsAnimating(false)
			}
		  }
		)
	}
	const expandCircle = () => {
		if (isAnimating) return
		setIsAnimating(true)
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 1, opacity: 0},
		  {
			duration: 1,
			opacity: 0,
			scale: 280,
			ease: "power3.inOut",
			onComplete: () => {
				shrinkCircle()
			}
		  }
		)
	}
	
	useEffect( () => {
		if (isRendered) {
			expandCircle()
		}
		if (animate) animateMenuOut()
	}, [isRendered, animate])

	// useEffect( () => {
	// 	if (changeColor == false) return 
	// 	if (iconColor == dark) iconColor = white
	// 	else iconColor = dark
	// 	console.log("changing color ...", iconColor)
	// }, [changeColor])

	return (
		<div className="menu-icon" >
			<div className='circle'
				style={{ border: `1.5px solid ${changeColor? "white": "black"}` }}
				onMouseEnter={ () => setIsHovered(true)}
				onMouseLeave={ () => setIsHovered(false)}
				onClick={ () => {onClick()}}
				ref={menuDiv}
			>
				<div className={`
						inside-circle ${isHovered ? "hovered": ""} 
						${isRendered ? "start-animation": ""}
					`} 	
					style={{backgroundColor: `${changeColor? "white": "black"}`}}
					ref={menuWindow}
				>
				</div>
			</div>
		</div>
	)
}

export default MenuIcon
