import React from "react";
import ReactDOM from "react-dom";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Tooltip.stories";
import "jest-styled-components";

const { RegularNoChildren, ChildrenNoText } = composeStories(stories)

describe("Tooltip - Regular - Active", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<RegularNoChildren />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

})

describe("Tooltip - Regular - Inactive", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ChildrenNoText />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});
})

describe("Tooltip - Regular - Active - No text", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ChildrenNoText />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});
})