import React, { Fragment } from "react";
import { FormProps, DataInput } from "./types";
import { Button } from "../Button";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { Radios } from "../Radios";
import { TitleStyled, SubTitleStyled, FormStyled } from "./Form.styles";

const Form: React.FC<FormProps> = ({
	data,
	id = String(Date.now()),
	title,
}) => {
	const formSubmitted = (event: React.SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
		console.log(data[5].selected);

		const dataReturned = data.map((item) => ({
			name: item.name,
			value: item.selected || item.value,
		}));

		console.log(dataReturned);
	};

	const optionAdded = (index: number, opt: string, isRadio: boolean) => {
		if (!data[index].selected || isRadio) {
			data[index].selected = [opt];
		} else {
			data[index]?.selected?.push(opt);
		}
	};

	const optionToggled = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number,
		opt: string
	) => {
		const isRadio = Boolean(event.target.type === "radio");

		if (event.target.checked) {
			optionAdded(index, opt, isRadio);
		} else {
			const filtered = data[index]?.selected?.filter((item) => item !== opt);
			data[index].selected = filtered;
		}
	};

	const renderInput = (
		input: DataInput,
		type: "text" | "number" | "tel" | "email" | "password",
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
			<SubTitleStyled>{input.value}</SubTitleStyled>
			{input.options?.map((opt, i) => (
				<Checkbox
					key={`cb_${index}-${i}`}
					label={opt}
					name={input.name}
					onChange={(e) => optionToggled(e, index, opt)}
					layout={layout}
				/>
			))}
		</Fragment>
	);

	const renderRadioGroup = (input: DataInput, index: number) => (
		<Fragment key={`${input.name}_${index}`}>
			<SubTitleStyled>{input.value}</SubTitleStyled>
			<Radios
				id={`${input.name}_${index}`}
				items={input.options || []}
				onChange={(e) => optionToggled(e, index, e.target.value)}
			/>
		</Fragment>
	);

	const renderInputType = (input: DataInput, index: number) => {
		switch (input.type) {
			case "text":
				return renderInput(input, "text", index);
			case "tel":
				return renderInput(input, "tel", index);
			case "password":
				return renderInput(input, "password", index);
			case "email":
				return renderInput(input, "email", index);
			case "number":
				return renderInput(input, "number", index);
			case "box":
				return renderCheckbox(input, "box", index);
			case "switch":
				return renderCheckbox(input, "switch", index);
			case "radios":
				return renderRadioGroup(input, index);
			default:
				return;
		}
	};

	return (
		<FormStyled onSubmit={formSubmitted} id={id}>
			{title && <TitleStyled>{title}</TitleStyled>}

			{data.map((input, i) => renderInputType(input, i))}

			<Button theme="primary" type="submit" onClick={(e) => e.preventDefault}>
				Submit
			</Button>
		</FormStyled>
	);
};

export default Form;
