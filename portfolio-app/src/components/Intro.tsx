import { useRef, useState, useEffect } from 'react'
import '../Header.css'
import gsap from 'gsap';
import { PrunePayload } from 'vite/types/hmrPayload';
import AnimatedCircle from "./AnimatedCircle"

type props = {
	animationCompleted: () => void
}

function Intro({ animationCompleted }: props) {
	const [isRendered, setIsRendered] = useState(true)
	const [hideLoading, setHideLoading] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const menuWindow = useRef(null)
	const counterRef = useRef(null)

	const shrinkCircle = () => {
		const text = menuWindow.current

		gsap.fromTo(
			text, 
			{scale: 1},
			{
				scale:0,
				duration: 2,
				transformOrigin: 'center center',
				ease: "back.inOut",
				onComplete: () => {
					animationCompleted()
					setIsRendered(false)
				}
			}
		)
	}
	const moveCircle = () => {
		const text = menuWindow.current

		gsap.fromTo(
			text, 
			{y: 0},
			{
				
				y: -window.innerHeight / 2 + 50,
				x: -window.innerWidth / 2 + 50,
				duration: 1.2,
				transformOrigin: 'center center',
				ease: "power3.inOut",
				onComplete: () => {
					// setIsRendered(false)
					animationCompleted();
				}
			}
		)
	}

	const expandCircle = () => {
		if (isAnimating) return;
		setIsAnimating(true);
	
		const menu = menuWindow.current;
	
		if (!menu) {
			console.error('Menu element not found!');
			return;
		}
	
		gsap.fromTo(
			menu,
			{ scaleY: 0, transformOrigin: 'bottom center' }, 
			{
				duration: 8,
				scaleY: 1, 
				ease: 'power3.inOut', 
				onComplete: () => {
					setHideLoading(true);
					shrinkCircle()
					// setIsRendered(false);
				},
			}
		);
	};
	
	useEffect( () => {
		if (isRendered) {
			expandCircle()
		}
	}, [isRendered, hideLoading])

	return (
		<div className={`intro-container w-screen h-screen flex justify-center items-center
			${isRendered? "flex": "hidden"} `}>
			<div className={`relative ${ hideLoading?  "" : "circle-wrapper"} }`} >
				<div className={`loading-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
					${ hideLoading?  "rounded-full" : ""} `} ref={menuWindow}>
				</div>
			</div>
		</div>
	)
}


export default Intro