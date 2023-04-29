import MessageBox from "./MessageBox";
import MessageDisplayComponent from "./MessageDisplayComponent";


function App() {
  return (
    <div className="App">
		<MessageBox>
			
			<MessageDisplayComponent message="Hello world!" />
      		<MessageDisplayComponent  />

		</MessageBox>

    </div>
  );
}

export default App;
