import React, { useState, useEffect } from 'react'
import './style.css'


const getLocalData = () => {
	const lists = localStorage.getItem("mytodolist");
	if (lists) {
		return JSON.parse(lists);
	} else {
		return [];
	}
}



const Todo = () => {
	const [inputData, setInputData] = useState("");
	const [items, setItems] = useState(getLocalData());
	const [isEditItem, setIsEditItem] = useState("");
	const [toggleButton, setToggleButton] = useState(false);

	const addItem = () => {
		if (!inputData) {
			alert('plz fill the data');
		}
		else if (inputData && toggleButton) {
			setItems(
				items.map((curElem) => {
					if (curElem.id === isEditItem) {
						return { ...curElem, name: inputData };
					}
					return curElem;
				})
			);
			setInputData("");
			setIsEditItem(null);
			setToggleButton(false);
		}
		else {
			const myNewInputData = {
				id: new Date().getTime().toString(),
				name: inputData,
			}
			setItems([...items, myNewInputData]);
			setInputData("")
		}
	}

	const deleteItem = (id) => {
		const updatedItems = items.filter((currElem) => {
			return currElem.id !== id;
		});
		setItems(updatedItems);
	}

	const editItem = (index) => {
		const item_todo_edited = items.find((curElem) => {
			return curElem.id === index;
		});
		setInputData(item_todo_edited.name);
		setIsEditItem(index);
		setToggleButton(true);
	};

	const removeAll = () => {
		setItems([]);
	}

	// Adding Local Storage
	useEffect(() => {
		localStorage.setItem("mytodolist", JSON.stringify(items))
	}, [items])

	return (
		<>
			<div className='main-div'>
				<div className='child-div'>
					<figure>
						<img src='./images/todo.svg' alt='' />
						<figcaption>Add Your List Here 🔥</figcaption>
					</figure>
					<div className='addItems' >
						<input
							type="text"
							placeholder="✍️ Add Item"
							className='form-control'
							value={inputData}
							onChange={(event) => {
								setInputData(event.target.value)
							}}
						/>
						{toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>
						)}

					</div>
					{/* Show Our Items */}
					{
						items.map((item, index) => {
							return (
								<div className='showItems' key={index}>
									<div className='eachItem'>
										<h3>{item.name}</h3>
										<div className='todo-btn'>
											<i className="fas fa-edit" onClick={() => editItem(item.id)}></i>
											<i className="fas fa-trash-alt" onClick={() => deleteItem(item.id)}></i>
										</div>
									</div>
								</div>
							)
						})
					}



					{/* Remove All Items */}

					<div className='showItems'>
						<button
							className='btn effect04'
							data-sm-link-text='Remove All'
							onClick={() => removeAll()}
						>
							<span>CHECK LIST</span>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Todo
