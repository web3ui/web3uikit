import React from "react";
import ReactDOM from "react-dom";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Tag.stories";
import "jest-styled-components";

const {
	Regular,
	InactiveStatus,
	ActiveStatus,
	Discount,
	Blue,
	Gray,
	Green,
	Pink,
	Purple,
	Red,
	Yellow,
} = composeStories(stories);

describe("Tag - Regular", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const regularText = "Tag";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Regular />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(regularText);
	});

	it("should not render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Inactive Status", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const inactiveText = "Inactive Tag";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<InactiveStatus />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(inactiveText);
	});

	it("should not render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Active Status", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const activeText = "Active Tag";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ActiveStatus />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(activeText);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});
});

describe("Tag - Discount", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const discountText = "-35%";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Discount />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(discountText);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Blue", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const text = "Blue";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Blue />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(text);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Green", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const green = "Green";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Green />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(green);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Gray", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const gray = "Gray";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Gray />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(gray);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Red", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const red = "Red";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Red />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(red);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Yellow", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const yellow = "Yellow";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Yellow />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(yellow);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Purple", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const purple = "Purple";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Purple />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(purple);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});

describe("Tag - Pink", () => {
	let container: HTMLDivElement;
	const testId = "test-tag-id";
	const textId = "test-tag-text";
	const pink = "Pink";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Pink />, container);
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
		const element = container.querySelector(`[data-testid="${textId}"]`);
		expect(element?.textContent).toBe(pink);
	});

	it("should render icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).toBeNull();
	});
});
