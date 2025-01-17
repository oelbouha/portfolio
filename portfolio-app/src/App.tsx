import Footer from './components/Footer'
import Menu from './components/menu'
import Animation from './components/animation'
import './App.css'
import './Footer.css'
import ThreeDTextList from './components/3dText'
import { useState } from 'react'
import AnimatedRectangle from "./components/AnimatedRectangle"
import Header from './components/Header'
import Body from './components/Body'
import Intro from './components/Intro'

const logoColor = "#121212"


function App() {
	const [showAnimation, setShowAnimation] = useState(false)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const [isMenuClose, setIsMenuClose] = useState<boolean>(false)
	const [isIntroAnimationDone, setIsIntroAnimationDone] = useState<boolean>(false)
	const [startHeaderAnimation, setstartHeaderAnimation] = useState<boolean>(false)

	const headerAnimationComplete = () => {
		setstartHeaderAnimation(false)
	}

	const handleMenuClicked = () => {
		if (isAnimating) return
		setShowAnimation(!showAnimation)
		setIsAnimating(true)
	}

	const introAnimationComplete = () => {
		setIsAnimating(false)
		setstartHeaderAnimation(true)
	}

	return (
		<div className="home-page flex flex-col">
			<Intro animationCompleted={introAnimationComplete} />
			<Header color={logoColor} startHeaderAnimation={startHeaderAnimation} headerAnimationComplete={headerAnimationComplete}/>
			<Body startHeaderAnimation={startHeaderAnimation} /> 
			<Footer color={logoColor} startHeaderAnimation={startHeaderAnimation} />
		</div>
	)
}

export default App
