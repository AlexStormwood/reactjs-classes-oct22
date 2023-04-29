import React from 'react';

// export default function MessageBox(props){

// 	return(
// 		<div style={{backgroundColor:"lightblue"}}>
// 			{props.children}
// 		</div>
// 	)
// }

export default class MessageBox extends React.Component {
	// 1. set up React state 
	constructor(props){
		super(props);

		this.state = {
			backgroundColor: "lightblue",
			counter: 0
		}

		// this.changeBgToRed = this.changeBgToRed.bind(this);
	}


	// changeBgToRed(){
	// 	this.setState({backgroundColor: "red"})
	// }

	changeBgToRed = () => {
		this.setState({backgroundColor: "red"})
	}


	// 2. do different things when different events happen
	// 		on the webpage 
	componentDidMount(){
		console.log("The MessageBox was loaded for the first time!");
	}


	componentDidUpdate(){
		// Infinite loop, do not do:
		// this.setState((state) => {
		// 	return {
		// 		counter: state.counter + 1
		// 	}
		// })

		console.log("MessageBox updated!");
	}



	render(){
		return(
			<div style={{backgroundColor:this.state.backgroundColor || "lightblue"}}>
				{this.props.children}
				<button onClick={this.changeBgToRed}>
					Change background to red
				</button>

				<button onClick={() => {
					this.setState({backgroundColor:"lightblue"})
				}} >
					Change background to light blue 
				</button>

				<button onClick={() =>{
					this.setState((state) => {
						return {
							counter: state.counter + 1
						}
						 
					})
				}}>
					Count is {this.state.counter}
				</button>

				<button onClick={() => {
					this.setState((banana) => {
						return {
							counter: banana.counter - 1
						}
					})
				}}>
					Decrease the count!
				</button>
			</div>
		)
	}
}