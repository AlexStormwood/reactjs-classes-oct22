

export default function MessageDisplayComponent(props){

	console.log(props)

	return (
		<div>
			{/* {props.message && (
				<h1>{props.message}</h1>
			)} */}

			{props.message ? (
				<h1>{props.message}</h1>
				//<SomeImaginaryComponent /> 
			) :
			(
				<h1>No message found!</h1>
			)}

			{/* <SomeImaginaryComponent message={props.message} /> */}
		</div>
	)
}