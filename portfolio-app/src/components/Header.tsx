
import MenuIcon  from "./menuIcon"
import Menu from "./menu"
import '../Header.css'
import { useState } from "react"

interface HeaderProps {
	color: string
}

const headerBackgroundCOlor = "white"

function Header ({color}: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClicked = () => {
		console.log("menu cliiiiii")
		setIsOpen(true)
	}
	return (
		<div className={`header-container bg-${headerBackgroundCOlor} overflow-hidden flex w-screen p-8`}>
			<MenuIcon color="black" onClick={handleClicked} />
			{
				isOpen && <Menu />
			}
		</div>
	)
}

export default Header