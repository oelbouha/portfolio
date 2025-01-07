import { useRef, useState, useEffect } from 'react'
import '../Header.css'
import gsap from 'gsap';
import { PrunePayload } from 'vite/types/hmrPayload';

type props = {
	animationCompleted: () => void
}

function Intro({ animationCompleted }: props) {
	const [isRendered, setIsRendered] = useState(true)
	const [isAnimating, setIsAnimating] = useState(false)
	const menuWindow = useRef(null)

	const expandCircle = () => {
		if (isAnimating) return
		setIsAnimating(true)
		const menu = menuWindow.current

		gsap.fromTo(
			menu,
		  {  scale: 1, opacity: 1, delay: 0.5},
		  {
			duration: 3,
			opacity: 1,
			scale: 200,
			ease: "power3.inOut",
			onComplete: () => {
				setIsRendered(false)
				animationCompleted()
			}
		  }
		)
	}
	
	useEffect( () => {
		if (isRendered) {
			expandCircle()
		}
	}, [isRendered])


	return (
		<div className={`intro-container w-screen h-screen flex justify-center
			${isRendered? "flex": "hidden"}
		`}>
			<div className={`loading-container`} ref={menuWindow}></div>
		</div>
	)
}


export default Intro