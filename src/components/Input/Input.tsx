import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/colors";
import { divStyle, inputStyle, labelStyle } from "./Input.styles";

interface Props {
	/**
	 * toggle browsers ability to auto complete the input
	 */
	autoComplete?: boolean;

	/**
	 * it is best to set a unique ID for each input to verify change events
	 */
	id?: string;

	/**
	 * please set a label, it really helps with accessibility
	 */
	label?: string;

	/**
	 * standard onChange that returns the entire event, as normal you can access event.target
	 */
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

	/**
	 * a short piece of text to fill the input before the user interacts
	 */
	placeholder?: string;

	/**
	 * types of input available
	 */
	type?: "text" | "number" | "email" | "tel" | "password";

	/**
	 * you can pass a default value so the input is pre-filled
	 */
	value?: string;

	/**
	 * please give a descriptive name to the input, it help with accessibility
	 */
	name?: string;

	/**
	 * the input can use state to react to user interaction
	 */
	state?: "error" | "confirmed";
}

const InputStyled = styled.input`
	${inputStyle}
`;
const LabelStyled = styled.label`
	${labelStyle}
`;

const StyledDiv = styled.div<Pick<Props, "state">>`
	${divStyle}

	input {
		${(p) => p.state === "error" && `border-color: ${color.red};`}
		${(p) => p.state === "confirmed" && `border-color: ${color.green};`}
    & + label {
			${(p) => p.state === "error" && `color: ${color.red};`}
			${(p) => p.state === "confirmed" && `color: ${color.green};`}
		}

		&:hover {
			${(p) => p.state === "error" && `border-color: ${color.red};`}
			${(p) => p.state === "confirmed" && `border-color: ${color.green};`}
		}

		&:focus {
			${(p) => p.state === "error" && `border-color: ${color.red};`}
			${(p) => p.state === "confirmed" && `border-color: ${color.green};`}
      & + label {
				${(p) => p.state === "error" && `color: ${color.red};`}
				${(p) => p.state === "confirmed" && `color: ${color.green};`}
			}
		}
	}
`;

const Input: React.FC<Props> = ({
	autoComplete = true,
	id = String(Date.now()),
	label,
	name,
	onChange,
	placeholder = "",
	state,
	type = "text",
	value = "",
}: Props) => {
	const [currentValue, setCurrentValue] = useState(value);

	const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(event.target.value);
		onChange(event);
	};

	return (
		<StyledDiv
			state={state}
			className={currentValue.length > 0 ? "filled" : "empty"}
			data-testid="test-div"
		>
			<InputStyled
				autoComplete={`${autoComplete}`}
				data-testid="test-input"
				id={id}
				name={name}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					valueChanged(event)
				}
				placeholder={placeholder}
				type={type}
				value={currentValue}
			/>
			{label && (
				<LabelStyled data-testid="test-label" htmlFor={id}>
					{label}
				</LabelStyled>
			)}
		</StyledDiv>
	);
};

export default Input;
