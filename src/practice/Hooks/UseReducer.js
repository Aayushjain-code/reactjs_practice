import React, { useState, useReducer } from 'react'
import './styles.css'



const reducer = (state, action) => {
	if (action.type === "INCR") {
		return state + 1;
	}
	if (action.type === "DECR") {
		return state - 1;
	}
	if (action.type === "INCR_BY_5") {
		return state + 5;
	}

};

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, 0);

	return (
		<>
			<div className="center_div" >
				<p>{state}</p>
				<div class="button2" onClick={() => dispatch({ type: 'INCR' })}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					INCR
				</div>
				<div
					class="button2"
					onClick={() => dispatch({ type: 'DECR' })}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					DECR
				</div>
				<div
					class="button2"
					onClick={() => dispatch({ type: 'INCR_BY_5' })}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					INCR_BY_5
				</div>
			</div>
		</>
	)
}

export default UseReducer
