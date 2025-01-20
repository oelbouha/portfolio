import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import '../Menu.css'

interface props {
	openMenu: boolean,
	closeMenu: boolean,
}

function Menu( {openMenu, closeMenu} : props ) {
	const [isActive, setIsActive] = useState<boolean>(false)
	const menuWindow = useRef(null)
	const menuItems = useRef(null)

	const animateMenuItemsOut = () => {
		const text = menuItems.current?.children

		gsap.fromTo(
			text, 
			{
				opacity: 1
			},
			{
				opacity: 0, duration: 0.2, ease: "power1.inOut", 
				onComplete: () => {
					setIsActive(false)
				}
			}
		)
	}
	const animateMenuItems = () => {
		const text = menuItems.current?.children

		gsap.fromTo(
			text, 
			{
				opacity: 0, x: - window.innerWidth
			},
			{
				opacity: 1, duration: 2, ease: "power1.inOut", x: 0, 
				onComplete: () => {

				}
			}
		)
	}
	useEffect(() => {
		if (openMenu) {
			setTimeout(() => {
				openMenu && setIsActive(true)
				animateMenuItems()
			}, 1200)
		}
		closeMenu && animateMenuItemsOut()
	}, [openMenu, closeMenu])

	return (
		<div className={`menu-page  ${openMenu ? "hidden": "block"} `}
			style={
				{
					width: `${openMenu ? "40vw": "0px"}`,
					height: `${openMenu  ? "99.8vh": "0px"}`,
					left: `${openMenu  ? "0%": "0"}`,
					top: `${openMenu  ? "0.1%": "0"}`
			}}
			ref={menuWindow}>
			<div className={` overflow-hidden flex-col  ${isActive ? "flex": "hidden"}`} ref={menuItems}>
				<div className='menu-link'>
					HOME
				</div>
				<div className='menu-link'>
					ABOUT
				</div>
				<div className='menu-link'>
					CONTACT
				</div>
				<div className='menu-link'>
					WORK
				</div>
			</div>
		</div>
	)
}

export default Menu