
import '../App.css'

const backgroundColor = "#dfdff2"
const borderColor = "black"

interface BodyProps {
	backgroundColor: string,
	borderColor: string,
}
function Body() {
	const style = {
		backgroundColor: backgroundColor,
		// borderRight: `0.01rem solid ${borderColor}`,
	}
	
	return (
		<div className="flex flex-row h-screen w-screen" >
			<div className='w-screen h-screen flex-1' style={style}></div>
	  	</div>
	)
}

export default Body