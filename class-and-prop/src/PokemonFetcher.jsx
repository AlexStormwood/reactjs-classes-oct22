import React from "react";


export default class PokemonFetcher extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			pokemonName: null
		};
	}


	async componentDidMount(){
		let pokemonDataResult = await fetch("https://pokeapi.co/api/v2/pokemon/25")
		.then((response) => {
			//console.log(response);
			return response.json();
		})
		.then((jsonData) => {
			//console.log(jsonData);
			return jsonData;
		})
		.catch((error) => {
			console.log("Fetch failed!");
			return null;
		});

		console.log(pokemonDataResult.name);
		this.setState({
			pokemonName: pokemonDataResult.name
		})
	}

	componentWillUnmount(){
		console.log("PokemonFetcher is going away now")
	}


	render(){
		// let pokemonName = this.state.pokemonName;

		return (
			<div>
				{/* <h1>{this.state.pokemonName}</h1> */}
				{this.state.pokemonName ? (
					<div>
					<h1>{this.state.pokemonName}</h1>
					</div>
				) :
				(
					<div>
					<h1>
					No Pokemon available!
					</h1>
					</div>
				)}
			</div>
		)
	}
}