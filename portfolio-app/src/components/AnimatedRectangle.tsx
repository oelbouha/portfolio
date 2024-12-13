import React, { useState, useRef, useEffect } from 'react'

const AnimatedRectangle = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [eyeIsclicked, setEyeIsClicked] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const eyeRef = useRef(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!eyeRef.current) return

    const container = eyeRef.current.parentElement
    const containerRect = container.getBoundingClientRect()
    const containerCenterX = containerRect.left + containerRect.width / 2

    // Calculate mouse position relative to container center
    const mouseX = e.clientX - containerCenterX
    
    // Calculate movement range 
    const maxMovement = 5 // maximum movement in vw
    const windowWidth = window.innerWidth

    // Adjust the movement factor to reach full range
    const movementFactor = maxMovement / (windowWidth / 4)

    // Calculate translation ensuring full -5 to 5 range
    const translateX = Math.max(-maxMovement, Math.min(maxMovement, mouseX * movementFactor))

    // Apply immediate transform
    eyeRef.current.style.transform = `translate3d(${translateX}vw, 0px, 0px)`
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const eyeContainerStyle = {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: '215em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: isClicked ? '8%' : '55%',
    transition: 'height 0.5s ease-in-out',
    // border: '14px solid black',
    boxSizing: 'border-box'
  }

  const eyeStyle = {
    backgroundColor: '#000',
    width: eyeIsclicked ?  '20px' : '50px',
    height: eyeIsclicked ? '51px' : '50px',
    borderRadius: eyeIsclicked ? '20px' : '50%',
    transition: 'all 0.1s linear', // Very quick transition
  }

  const handleClick = () => {
    setEyeIsClicked(!eyeIsclicked)
    setIsDarkTheme(!isDarkTheme)
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 1000)
  }

  return (
    <div
      style={eyeContainerStyle}
      onClick={handleClick}
    >
      <div 
        ref={eyeRef}
        style={eyeStyle}
      ></div>
    </div>
  )
}

export default AnimatedRectangle