import { useEffect, useRef, useState } from 'react'
import '../App.css'
import '../Body.css'
import ThreeDTextList from './3dText'
import gsap  from 'gsap'
import { flattenJSON } from 'three/src/animation/AnimationUtils'

const backgroundColor = "#7f0a2b"
const borderColor = "black"

interface BodyProps {
	startHeaderAnimation: boolean
}
function Body({startHeaderAnimation} : BodyProps) {
  const [startProjectsAnimation, setStartProjectsAnimation] = useState<boolean>(false)

	const containerRef = useRef(null)
  const textRef = useRef(null)
  

  const hideContainer = () => {
	const container = containerRef.current
	gsap.fromTo(
		container,
		{ scaleX: 1 },
		{
		  scaleX: 0,
		  transformOrigin: "center left",
		  duration: 1.3,
		  ease: "power3.inOut",
		  onComplete: () => { setStartProjectsAnimation(true) }
		}
	  )
  }
  const animateText = () => {
	  const text = textRef.current

	  gsap.fromTo(
		text,
		{x: window.innerWidth},
		{
			x: -window.innerWidth * 1.6,
			opacity: 1,
			duration: 10,
			ease: "power1.inOut",
			onComplete: () => {
				hideContainer()
			},

		}
	  )
  }

  const animateContainer = () => {
    const container = containerRef.current
    const text = textRef.current
    
    // First hide the text
    gsap.set(text, { x: window.innerWidth})
    
    // Animate the container
    gsap.fromTo(
      container,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center left",
        duration: 2.5,
        ease: "power3.inOut",
        onComplete: () => {
			  animateText()
        }
      }
    )
  }

  useEffect(() => {
    if (startHeaderAnimation) {
      // animateContainer()
      setStartProjectsAnimation(true)
      
    }
  }, [startHeaderAnimation])


  return (
    <div className="body-container flex flex-col relative">
      <div 
        className={`hidden rectangle-container overflow-hidden  ${startHeaderAnimation ? "" : "hidden"}`} 
        ref={containerRef}
      >
        <div
          className="text-wrapper flex items-center justify-start whitespace-nowrap"
          ref={textRef}
        >
          I TURN YOUR IDEAS INTO CREATIVE IMPACT
        </div>
      </div>
      {startProjectsAnimation && <ThreeDTextList/> }
    </div>
  )
}

export default Body
