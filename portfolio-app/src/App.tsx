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

const logoColor = "white"


function App() {
	const [showAnimation, setShowAnimation] = useState(false)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const [isMenuClose, setIsMenuClose] = useState<boolean>(false)
	const [isIntroAnimationDone, setIsIntroAnimationDone] = useState<boolean>(false)

	const handleIntroAnimation = () => {
		setIsIntroAnimationDone(true)
	}

	const handleMenuClicked = () => {
		if (isAnimating) return
		setShowAnimation(!showAnimation)
		setIsAnimating(true)
	}

	const handleCompleteAnimation = () => {
		console.log("animation is completed ... ");
		setIsAnimating(false)
	}

	return (
		<div className="home-page">
			<Intro animationCompleted={handleCompleteAnimation}/>
			<Header color={logoColor} />
			<Body />
			{/* <ThreeDTextList/> */}
			<Footer color={logoColor} />
		</div>
	)
}

export default App
