import ReactDOM from "react-dom";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Input.stories";
import color from "../../styles/colors";
import React from "react";

const {
	EmailInput,
	EmailInputConfirmed,
	EmailInputError,
	NumberInput,
	NumberInputConfirmed,
	NumberInputError,
	PasswordInput,
	PasswordInputConfirmed,
	PasswordInputError,
	TelInput,
	TelInputConfirmed,
	TelInputError,
	TextInput,
	TextInputConfirmed,
	TextInputError,
} = composeStories(stories);

let container: HTMLDivElement;
const testValue = "";
const testPlaceholder = "";
const testInputId = "test-input";
const testLabelId = "test-label";
const testDivId = "test-div";

describe("Input - Text", () => {
	const testLabel = TextInput?.args?.label;
	const testName = TextInput?.args?.name;
	const testType = TextInput?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TextInput />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const label: HTMLLabelElement | null = container.querySelector(
			`[data-testid="${testLabelId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Text Error", () => {
	const testLabel = TextInputError?.args?.label;
	const testName = TextInputError?.args?.name;
	const testType = TextInputError?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TextInputError />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.red);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Text Confirmed", () => {
	const testLabel = TextInputConfirmed?.args?.label;
	const testName = TextInputConfirmed?.args?.name;
	const testType = TextInputConfirmed?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TextInputConfirmed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.green);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Number", () => {
	const testLabel = NumberInput?.args?.label;
	const testName = NumberInput?.args?.name;
	const testType = NumberInput?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<NumberInput />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });
		input && expect(input.value).toBe("123");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("number input wont return letters", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("");
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("123");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Number Error", () => {
	const testLabel = NumberInputError?.args?.label;
	const testName = NumberInputError?.args?.name;
	const testType = NumberInputError?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<NumberInputError />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.red);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });
		input && expect(input.value).toBe("123");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("number input wont return letters", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("");
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("123");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Number Confirmed", () => {
	const testLabel = NumberInputConfirmed?.args?.label;
	const testName = NumberInputConfirmed?.args?.name;
	const testType = NumberInputConfirmed?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<NumberInputConfirmed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.green);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });
		input && expect(input.value).toBe("123");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("number input wont return letters", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("");
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "123" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("123");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Password", () => {
	const testLabel = PasswordInput?.args?.label;
	const testName = PasswordInput?.args?.name;
	const testType = PasswordInput?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<PasswordInput />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Password Error", () => {
	const testLabel = PasswordInputError?.args?.label;
	const testName = PasswordInputError?.args?.name;
	const testType = PasswordInputError?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<PasswordInputError />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.red);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Password Confirmed", () => {
	const testLabel = PasswordInputConfirmed?.args?.label;
	const testName = PasswordInputConfirmed?.args?.name;
	const testType = PasswordInputConfirmed?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<PasswordInputConfirmed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.green);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });
		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Email", () => {
	const testLabel = EmailInput?.args?.label;
	const testName = EmailInput?.args?.name;
	const testType = EmailInput?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<EmailInput />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const label: HTMLLabelElement | null = container.querySelector(
			`[data-testid="${testLabelId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });
		input && expect(input.value).toBe("foo@bar.io");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo@bar.io");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Email Error", () => {
	const testLabel = EmailInputError?.args?.label;
	const testName = EmailInputError?.args?.name;
	const testType = EmailInputError?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<EmailInputError />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.red);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });
		input && expect(input.value).toBe("foo@bar.io");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo@bar.io");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Email Confirmed", () => {
	const testLabel = EmailInputConfirmed?.args?.label;
	const testName = EmailInputConfirmed?.args?.name;
	const testType = EmailInputConfirmed?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<EmailInputConfirmed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.green);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });
		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo@bar.io");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "foo@bar.io" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("foo@bar.io");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Tel", () => {
	const testLabel = TelInput?.args?.label;
	const testName = TelInput?.args?.name;
	const testType = TelInput?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TelInput />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });
		input && expect(input.value).toBe("+447712345678");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("+447712345678");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Tel Error", () => {
	const testLabel = TelInputError?.args?.label;
	const testName = TelInputError?.args?.name;
	const testType = TelInputError?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TelInputError />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.red);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });
		input && expect(input.value).toBe("+447712345678");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("+447712345678");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});

describe("Input - Tel Confirmed", () => {
	const testLabel = TelInputConfirmed?.args?.label;
	const testName = TelInputConfirmed?.args?.name;
	const testType = TelInputConfirmed?.args?.type;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<TelInputConfirmed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
	});

	it("renders input with the value and placeholder passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.value).toBe(testValue);
		input && expect(input.placeholder).toBe(testPlaceholder);
	});

	it("renders the correct type of input", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.type).toBe(testType);
	});

	it("renders input with the name passed", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(input).not.toBeNull();
		input && expect(input.name).toBe(testName);
	});

	it("renders input correct colors", () => {
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		const styles = input && getComputedStyle(input);
		expect(styles?.borderColor.toUpperCase()).toBe(color.green);
	});

	it("renders label text", () => {
		const label = container.querySelector(`[data-testid="${testLabelId}"]`);
		expect(label).not.toBeNull();
		expect(label?.textContent).toBe(testLabel);
	});

	it("should conditionally render 'empty / filled' className", () => {
		const div: HTMLDivElement | null = container.querySelector(
			`[data-testid="${testDivId}"]`
		);
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		expect(div?.classList.contains("filled")).toBeFalsy;
		expect(div?.classList.contains("empty")).toBeTruthy;

		expect(input).not.toBeNull();
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });
		input && expect(input.value).toBe("+447712345678");

		expect(div?.classList.contains("filled")).toBeTruthy;
		expect(div?.classList.contains("empty")).toBeFalsy;
	});

	it("onChange event is returned, testEvent => event.target", () => {
		console.log = jest.fn();
		const input: HTMLInputElement | null = container.querySelector(
			`[data-testid="${testInputId}"]`
		);
		input?.focus();
		input && fireEvent.change(input, { target: { value: "+447712345678" } });

		expect(input).not.toBeNull();
		input && expect(input.value).toBe("+447712345678");
		expect(console.log).toHaveBeenCalledWith(input);
	});
});
