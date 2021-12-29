import React, { useState } from 'react'
import './styles.css'

const UseState = () => {
	const [num, setNum] = useState(0);
	return (
		<>
			<div className="center_div" >
				<p>{num}</p>
				<div class="button2" onClick={() => setNum(num + 1)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					INCR
				</div>
				<div
					class="button2"
					onClick={() => (num > 0 ? setNum(num - 1) : setNum(0))}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					DECR
				</div>
			</div>
		</>
	)
}

export default UseState
