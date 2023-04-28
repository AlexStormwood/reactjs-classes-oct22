

export default function MessageDisplayComponent(props){

	console.log(props)

	return (
		<div>
			{props.message}
		</div>
	)
}