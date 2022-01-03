import React from "react";
import ReactDOM from "react-dom";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Tooltip.stories";
import "jest-styled-components";

const { Regular, RegularInactive } = composeStories(stories)

describe("Tooltip - Regular - Active", () => {
    let container: HTMLDivElement;
	const testId = "test-tooltip-id";
	const text = "This is a text inside a tooltip";

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
		const element = container.querySelector(`[data-testid="${testId}"]`)?.innerHTML;
		expect(element).toBe(text);
	});
})

describe("Tooltip - Regular - Inactive", () => {
    let container: HTMLDivElement;
	const testId = "test-tooltip-id";

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<RegularInactive />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

    it("does not render the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).toBeNull();
	});

	it(" does not render text", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`)?.innerHTML;
        console.log(element)
		expect(element).toBeUndefined();
	});
})