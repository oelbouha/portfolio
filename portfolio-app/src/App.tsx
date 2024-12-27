import Logo from './components/Logo'
import Menu from './components/menu'
import './App.css'
import './Logo.css'
import ThreeDTextList from './components/3dText'

function App() {
  return (
    <div className="home-page">
      <Logo/>
      {/* <Menu/> */}
        <div className='projects-list'>
          <ThreeDTextList/>
        </div>
        {/* <ThreeDTextList/>
        <ThreeDTextList/> */}
    </div>
  )
}

export default App
