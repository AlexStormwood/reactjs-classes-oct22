import MessageBox from "./MessageBox";
import MessageDisplayComponent from "./MessageDisplayComponent";
import PokemonFetcher from "./PokemonFetcher";


function App() {
  return (
    <div className="App">
		<MessageBox>
			<PokemonFetcher />
			<MessageDisplayComponent message="Hello world!" />
      		<MessageDisplayComponent  />

		</MessageBox>

    </div>
  );
}

export default App;
