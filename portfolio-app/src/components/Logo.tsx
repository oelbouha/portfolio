
import '../App.css'
import { useState } from 'react'
import AnimatedRectangle from './AnimatedRectangle'




function Logo() {
	return (
		<>
			<div className="logo">
				<div className='logo-first-word'>web</div>
				<div className='logo-second-word'>
					<div>devel</div>
					<div className='switch-color'>
						<AnimatedRectangle/>
					</div>
					<div>per</div>
				</div>
			</div>
			<div className='typo'>©/2024</div>
		</>
	)
}

export default Logo 