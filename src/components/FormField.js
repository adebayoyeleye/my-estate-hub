function FormField(props) {
	const formattedId = props.id ? props.id : props.label.replace(/\s+/g, "-").toLowerCase();
	const label = <label htmlFor={formattedId}>{props.label}</label>;

	let formField;
	switch (props.fieldmode) {
		case "VIEW":
			formField = (
				<span {...props} id={formattedId} data-testid={formattedId}>
					{props.value}
				</span>
			);
			break;
		case "":
			// code block
			break;
		default:
			formField = (
				<input
					{...props}
					type={props.type ? props.type : "text"}
					aria-label={props.label}
					id={formattedId}
					data-testid={formattedId}
				/>
			);
	}

	return (
		<div>
			{label}
			{formField}
		</div>
	);
}

export default FormField;
