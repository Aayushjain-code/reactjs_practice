import React from 'react'

const Navbar = ({ filterItems, menuList }) => {
	return (
		<>
			<nav className='navbar'>
				<div className='btn-group'>

					{
						menuList.map((currEle) => {
							return (
								<>
									<button
										className='btn-group__item'
										onClick={() => filterItems(currEle)}
									>{currEle}</button>
								</>
							);
						})
					}

				</div>
			</nav>
		</>
	)
}

export default Navbar
