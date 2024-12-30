import { useState } from 'react'
import '../App.css'
import Animation from '../components/animation'


function Menu( {onToggleAnimation} ) {
	const [clicked, setClicked] = useState(false)

	const handleClicked = () => {
		const newState = !clicked
		setClicked(newState)
		onToggleAnimation?.(newState)
	}
	return (
		<div className="menu-icon flex flex-row" onClick={handleClicked}>
			{clicked ? 'close' : "menu"}
		</div>
	)
}

export default Menu