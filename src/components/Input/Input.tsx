import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/colors";
import { divStyle, inputStyle, labelStyle } from "./Input.styles";
import { InputProps } from "./types";

const InputStyled = styled.input`
	${inputStyle}
`;
const LabelStyled = styled.label`
	${labelStyle}
`;

const StyledDiv = styled.div<Pick<InputProps, "state">>`
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

const Input: React.FC<InputProps> = ({
	autoComplete = true,
	id = String(Date.now()),
	label,
	name,
	onChange,
	placeholder = "",
	state,
	type = "text",
	value = "",
}: InputProps) => {
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
