import ReactDOM from "react-dom";
import React from 'react';
import { fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";
import color from "../../styles/colors";
import renderer from "react-test-renderer";
import "jest-styled-components";

const {
	Primary,
	Secondary,
	Outline,
	PrimaryLarge,
	PrimarySmall,
	PrimaryWithIcon,
	PrimaryWithIconAfter,
	PrimaryWithIconOnly,
	PrimaryWithIconOnlyLarge,
	PrimaryWithIconOnlySmall,
	ColoredRed,
	ColoredGreen,
	ColoredYellow,
	ColoredBlue,
} = composeStories(stories);

describe("Button - Primary", () => {
	let container: HTMLDivElement;
	const testId = Primary?.args?.id;
	const testText = Primary?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Primary />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});

	it("renders Primary button with correct styles", () => {
		const tree = renderer.create(<Primary />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.green}`);
		expect(tree).toHaveStyleRule("color", `${color.white}`);
	});

	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - Primary Large", () => {
	it("renders PrimaryLarge button with correct styles", () => {
		const tree = renderer.create(<PrimaryLarge />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.green}`);
		expect(tree).toHaveStyleRule("color", `${color.white}`);
		expect(tree).toHaveStyleRule("border-width", "4px");
		expect(tree).toHaveStyleRule("font-size", "16px");
		expect(tree).toHaveStyleRule("padding", "4px 20px");
	});
});

describe("Button - Primary Small", () => {
	it("renders PrimaryLarge button with correct styles", () => {
		const tree = renderer.create(<PrimarySmall />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.green}`);
		expect(tree).toHaveStyleRule("color", `${color.white}`);
		expect(tree).toHaveStyleRule("border", "none");
		expect(tree).toHaveStyleRule("font-size", "13px");
		expect(tree).toHaveStyleRule("padding", "2px 12px");
	});
});

describe("Button - Primary with icon", () => {
	let container: HTMLDivElement;
	const testId = PrimaryWithIcon?.args?.id;
	const testText = PrimaryWithIcon?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<PrimaryWithIcon />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe("plus icon" + testText);
	});
	it("renders icon correctly", () => {
		const iconElement = container.querySelector(
			`[data-testid="${testId}"] > svg`
		);
		expect(iconElement).not.toBeNull();
	});
});

describe("Button - Primary icon after", () => {
	it("renders Primary button with icon after", () => {
		const tree = renderer.create(<PrimaryWithIconAfter />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("flex-direction", "row-reverse");
	});
});

describe("Button - Primary icon only", () => {
	it("renders Primary button with icon only", () => {
		const tree = renderer.create(<PrimaryWithIconOnly />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("border-width", "0px");
		expect(tree).toHaveStyleRule("height", "32px");
		expect(tree).toHaveStyleRule("text-indent", "-99999px");
		expect(tree).toHaveStyleRule("width", "32px");
	});
});

describe("Button - Primary icon only large", () => {
	it("renders Primary button with icon only large", () => {
		const tree = renderer.create(<PrimaryWithIconOnlyLarge />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("border-width", "4px");
		expect(tree).toHaveStyleRule("height", "40px");
		expect(tree).toHaveStyleRule("text-indent", "-99999px");
		expect(tree).toHaveStyleRule("width", "40px");
	});
});

describe("Button - Primary icon only small", () => {
	it("renders Primary button with icon only small", () => {
		const tree = renderer.create(<PrimaryWithIconOnlySmall />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("height", "24px");
		expect(tree).toHaveStyleRule("text-indent", "-99999px");
		expect(tree).toHaveStyleRule("width", "24px");
	});
});

describe("Button - Secondary", () => {
	let container: HTMLDivElement;
	const testId = Secondary?.args?.id;
	const testText = Secondary?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Secondary />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders Secondary button with correct styles", () => {
		const tree = renderer.create(<Secondary />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.blueLight}`);
		expect(tree).toHaveStyleRule("color", `${color.blue}`);
	});

	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - Outline", () => {
	let container: HTMLDivElement;
	const testId = Outline?.args?.id;
	const testText = Outline?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Outline />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders Outline button with correct styles", () => {
		const tree = renderer.create(<Outline />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.white}`);
		expect(tree).toHaveStyleRule("color", `${color.blue}`);
	});
	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - ColoredRed", () => {
	let container: HTMLDivElement;
	const testId = ColoredRed?.args?.id;
	const testText = ColoredRed?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ColoredRed />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders ColoredRed button with correct styles", () => {
		const tree = renderer.create(<ColoredRed />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.red}`);
		expect(tree).toHaveStyleRule("border-color", `${color.red}`);
		expect(tree).toHaveStyleRule("color", `${color.red}`);
	});
	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - ColoredBlue", () => {
	let container: HTMLDivElement;
	const testId = ColoredBlue?.args?.id;
	const testText = ColoredBlue?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ColoredBlue />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders ColoredBlue button with correct styles", () => {
		const tree = renderer.create(<ColoredBlue />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.blue}`);
		expect(tree).toHaveStyleRule("border-color", `${color.blue}`);
		expect(tree).toHaveStyleRule("color", `${color.blue}`);
	});
	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - ColoredGreen", () => {
	let container: HTMLDivElement;
	const testId = ColoredGreen?.args?.id;
	const testText = ColoredGreen?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ColoredGreen />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders ColoredGreen button with correct styles", () => {
		const tree = renderer.create(<ColoredGreen />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.green}`);
		expect(tree).toHaveStyleRule("border-color", `${color.green}`);
		expect(tree).toHaveStyleRule("color", `${color.green}`);
	});
	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});

describe("Button - ColoredYellow", () => {
	let container: HTMLDivElement;
	const testId = ColoredYellow?.args?.id;
	const testText = ColoredYellow?.args?.text;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ColoredYellow />, container);
	});
	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});
	it("renders text correctly", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders ColoredYellow button with correct styles", () => {
		const tree = renderer.create(<ColoredYellow />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toHaveStyleRule("background-color", `${color.yellow}`);
		expect(tree).toHaveStyleRule("border-color", `${color.yellow}`);
		expect(tree).toHaveStyleRule("color", `${color.yellow}`);
	});
	it("returns itself as a console log", () => {
		console.log = jest.fn();
		const testButton = container.querySelector(`#${testId}`);
		testButton && fireEvent.click(testButton);
		expect(console.log).toHaveBeenCalledWith(testButton);
	});
});
