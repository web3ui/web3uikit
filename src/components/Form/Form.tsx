import React, { useEffect, Fragment } from "react";
import { FormProps, DataInput } from "./types";
import { Button } from "../Button";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";

const Form: React.FC<FormProps> = ({
	data,
	id = String(Date.now()),
	title,
}) => {
	useEffect(() => {
		console.log("data");
		console.log(data);
	}, [data]);

	const formSubmitted = (event: React.SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
		console.log(data);
	};

	const checkboxToggled = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number,
		opt: string
	) => {
		console.log(opt + " = " + event.target.checked);
		console.log(data[index].selected);
		console.log(index);

		// BILL pick up here, need to make item dynamic in this array
		if (!data[index].selected) {
			data[index].selected = [event.target.value];
		} else {
			data && data[index]?.selected?.push(event.target.value);
		}
	};

	const renderInput = (
		input: DataInput,
		type: "text" | "number",
		index: number
	) => (
		<Input
			key={`input_${index}`}
			label={input.name}
			name={input.name}
			onChange={(e) => (data[index].value = e.target.value)}
			type={type}
		/>
	);

	const renderCheckbox = (
		input: DataInput,
		layout: "box" | "switch",
		index: number
	) => (
		<Fragment key={`cb-group_${index}`}>
			<h4>{input.value}</h4>
			{input.options?.map((opt, i) => (
				<Checkbox
					key={`cb_${index}-${i}`}
					label={opt}
					name={input.name}
					onChange={(e) => checkboxToggled(e, index, opt)}
					layout={layout}
				/>
			))}
		</Fragment>
	);

	const renderInputType = (input: DataInput, index: number) => {
		switch (input.type) {
			case "text":
				return renderInput(input, "text", index);
			case "number":
				return renderInput(input, "number", index);
			case "box":
				return renderCheckbox(input, "box", index);
			case "switch":
				return renderCheckbox(input, "switch", index);
			default:
				return;
		}
	};

	return (
		<form onSubmit={formSubmitted} id={id}>
			{title && <h3>{title}</h3>}

			{data.map((input, i) => renderInputType(input, i))}

			<Button type="submit" onClick={(e) => e.preventDefault}>
				Submit
			</Button>
		</form>
	);
};

export default Form;
