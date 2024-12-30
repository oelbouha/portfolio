
import '../App.css'
import { useEffect, useRef, useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle'
import gsap from 'gsap';

interface AnimationProps {
	color: string,
	up: boolean,
}


function Animation({ color, up } : AnimationProps) {
	const recRef = useRef(null)
	const [rows, setRows] = useState([])

	useEffect( () => {
		
		const calculateRows = () => {
			const rowWidth = 150;
			const numbersOfRows = Math.floor(window.innerWidth / rowWidth);
			setRows(Array(numbersOfRows).fill(null))
		}

		calculateRows();
	}, [])
	
	useEffect(() => {
		
		console.log("animation ... ", up)
		const text = recRef.current?.children;

		if (up) {
			gsap.fromTo(
				text,
				{  y: -window.innerHeight * 2, delay: 0.1}, 
				{
					y: 0,
					duration: 2.5,
					stagger: {
						amount: 0.5,
						from: "end"
					}, 
					ease: "power2.inOut",
					onComplete: () => {
						console.log("animation completed ...")
					}
				}
			)
			return 
		}
		gsap.fromTo(
		text,
		{  y: 0, delay: 0.1}, 
		{
			y: -window.innerHeight * 2,
			duration: 2.5,
			stagger: {
			amount: 0.5,
			from: "end"
			}, 
			ease: "sine.inOut",
			// delay: 2
		}
		)
	}, [up])

	return (
		<>
			<div className="intro-animation flex flex-row w-screen h-screen flex-grow" ref={recRef}>
				{rows.map((_, index) => 
					<div
					key={index} 
					className='animation-row'
					style={
						{
							backgroundColor: color
						}
					}
					>
					</div>
				)}
			</div>
		</>
	)
}

export default Animation 