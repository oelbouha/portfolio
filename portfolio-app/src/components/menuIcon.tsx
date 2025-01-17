import { useEffect, useRef, useState } from 'react'
import '../MenuIcon.css'
import gsap from 'gsap';

const dark = "#ec2031"
const white = "white"

interface IconProps {
  color: string,
  changeColor: boolean,
  animate: boolean,
  startMenuAnimation: boolean,
  onClick: () => void,
  animationComplete: () => void,
  menuAnimationComplete: () => void,
}

function MenuIcon({ color, changeColor, animate, onClick, animationComplete, startMenuAnimation , menuAnimationComplete}: IconProps) {
  const [switchColor, setSwitchColor] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMoved, setIsMoved] = useState(false)
  
  const menuWindow = useRef(null)
  const menuDiv = useRef(null)
  const menuIcon = useRef(null)
  
  const animateMenuIn = () => {
    // if (isAnimating) return
    // setIsAnimating(true)
    
    const menu = menuIcon.current
    gsap.to( menu, {
        y: 0, duration: 0.7, ease: "power3.inOut",
        onComplete: () => {
          // setIsAnimating(false)
          menuAnimationComplete()
        }
      }
    )
  }
  const animateMenuOut = () => {
    console.log("animating ... out")
    // if (isAnimating) return
    // setIsAnimating(true)
    
    console.log("animate menu out")
    const menu = menuIcon.current
    gsap.to(menu, {
        y: -200, duration: 0.7, ease: "power3.inOut",
        onComplete: () => {
          // setIsAnimating(false)
          setTimeout(() => { animateMenuIn() }, 900)
        }
      }
    )
  }

  const moveMenuIconTop = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const menu = menuIcon.current
    gsap.fromTo(
			menu, 
			{
        top: "50%", left: "50%", transform: "translate(-50% , -50%)",},
			{
        position: "fixed", top: "4%", left: "3%", duration: 1.2, ease: "back.in",
				onComplete: () => {
          // setIsAnimating(false)
          setTimeout(() => {
            setIsMoved(true)
          }, 500)
				}
			}
		)
  }

  const handleIsHovered = () => {
    console.log("hovered :: ", isHovered)
    if (!isHovered) setIsHovered(true)
  }

	useEffect(() => {
    startMenuAnimation &&  moveMenuIconTop()
    startMenuAnimation && setIsRendered(true)
    animate && animateMenuOut()
  }, [startMenuAnimation, animate])

  return (
    <div className={`menu-icon ${isRendered ? "top-[5%] left-[5%]" : "hidden top-[50%] left-[50%]"} `} ref={menuIcon}>
      <div 
        className={`circle  `}
        onMouseEnter={handleIsHovered}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          border: isMoved ? `2px solid ${switchColor ? white : dark}` : "none"
        }}
        onClick={onClick}
        ref={menuDiv}
      >
        <div 
          className={`
            transition-all duration-300 ease-out
            ${isHovered ? "w-full h-full" : ""}
            ${isRendered ? "w-[70%] h-[70%] rounded-full " : ""}
          `}
          style={{ backgroundColor: `${switchColor ? white : dark} ` }}
          ref={menuWindow}
        >
        </div>
      </div>
    </div>
  )
}

export default MenuIcon