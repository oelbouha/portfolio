import { useRef, useState } from 'react'
import '../MenuIcon.css'
import gsap from 'gsap';

interface IconProps {
	color: string,
	onClick: () => void,
}

function MenuIcon( {color, onClick}: IconProps ) {
	const [isHovered, setIsHovered] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const menuWindow = useRef(null)

	const animateInMenu = () => {
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 0, delay: 0.1}, // Start state
		  {
			duration: 3.5,
			scale: 90,
			ease: "power3.inOut",
		  }
		)
	}
	
	const handleClicked = () => {
		onClick()
		setIsClicked(true)
		animateInMenu()
	}

	return (
		<div className="menu-icon" >
			<div className='circle'
				style={{ border: `1.5px solid ${color}` }}
				onMouseEnter={ () => setIsHovered(true)}
				onMouseLeave={ () => setIsHovered(false)}
				onClick={handleClicked}
			>
				<div className={`inside-circle 
						${isHovered ? "hovered expand-circle": ""}}
					`}
					style={{backgroundColor:color}}
					ref={menuWindow}
				>
				</div>
			</div>
		</div>
	)
}

export default MenuIcon
