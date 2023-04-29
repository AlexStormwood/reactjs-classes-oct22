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
			backgroundColor: "lightblue"
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


	render(){
		return(
			<div style={{backgroundColor:this.state.backgroundColor || "lightblue"}}>
				{this.props.children}
				<button onClick={this.changeBgToRed}>
					Change background to red
				</button>
			</div>
		)
	}
}