import React, { useEffect, useState } from 'react'
import './styles.css'

const UseEffect = () => {
	const [num, setNum] = useState(0);

	useEffect(() => {
		document.title = `Chats(${num})`;
	})



	return (
		<>
			<div className="center_div" >
				<p>{num}</p>
				<div className="button2" onClick={() => setNum(num + 1)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					INCR
				</div>
			</div>
		</>
	)
}

export default UseEffect
