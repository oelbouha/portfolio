
import '../App.css'
import { useEffect, useRef, useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle'
import gsap from 'gsap';

interface AnimationProps {
	color: string,
	up: boolean,
	onAnimationComplete: () => void
}

function Animation({ color, up, onAnimationComplete }: AnimationProps) {
	const recRef = useRef<HTMLDivElement>(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const [visible, setVisible] = useState(false); // Controls visibility

  
	useEffect(() => {
	  if (!recRef.current || isAnimating) return;
	  setIsAnimating(true);
	  setVisible(true); // Ensure the div is visible before starting the animation
	  const text = recRef.current?.children;
  
	  gsap.fromTo(
		text,
		{scaleX: 0, delay: 0.2},
		{
			scaleX: 1,
			ease: 'power3.inOut',
			duration: 1,
			onComplete: () => {
				setIsAnimating(false);
				if (!up) setVisible(false);
				onAnimationComplete()
			}
		}
	  );
	}, [up]);
  
	return (
	  <div
		style={{
		  display: visible ? 'flex' : 'none', // Ensure visibility until animation completes
		}}
		className="background-container flex-row"
		ref={recRef}
		>
			<div className='background-col flex-1' style={{backgroundColor: up ? "#000" : "#fff"}}></div>
			<div className='background-col flex-1' style={{backgroundColor: up ? "#000" : "#fff"}}></div>
			<div className='background-col flex-1' style={{backgroundColor: up ? "#000" : "#fff"}}></div>
			<div className='background-col flex-1' style={{backgroundColor: up ? "#000" : "#fff"}}></div>
			<div className='background-col flex-1' style={{backgroundColor: up ? "#000" : "#fff"}}></div>
	  	</div>
	);
  }
  
export default Animation 
