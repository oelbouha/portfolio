import Logo from './components/Logo'
import Menu from './components/menu'
import Animation from './components/animation'
import './App.css'
import './Logo.css'
import ThreeDTextList from './components/3dText'
import { useState } from 'react'
import AnimatedRectangle from "./components/AnimatedRectangle"

function App() {
  const [showAnimation, setShowAnimation] = useState(false)
  
  const handleMenuClicked = () => {
    setShowAnimation(!showAnimation)
  }

  const handleCompleteAnimation = () => {
    // console.log("menu clicked ... ");
    setShowAnimation(false)
  }

  return (
    <div className="home-page">
      <Logo/>
      {/* <AnimatedRectangle/> */}
      <Menu onToggleAnimation={handleMenuClicked} />
      {
        (
          <Animation
            up={showAnimation}
            color={"#7f0a2b"}
          />
        )
      }
      {/* <ThreeDTextList/> */}
    </div>
  )
}

export default App
