import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Tooltip.stories";
import "jest-styled-components";

const { NotVisible, Bottom, Top, Left, Right } = composeStories(stories)

describe("Tooltip - Not Visible - No Children", () => {
    let container: HTMLDivElement;
	let childrenId = "tooltip-children-test-id"
	let wrapperId = "tooltip-wrapper-test-id"
	let boxId = "tooltip-box-test-id"

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<NotVisible />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("wrapper should not be visible", () => {
		const element = container.querySelector(`[data-testid="${childrenId}"]`);
		expect(element).toBeNull();
	});

	it("child should not be visible", () => {
		const element = container.querySelector(`[data-testid="${wrapperId}"]`);
		expect(element).toBeNull();
	});

	it("should not see text", () => {
		const text = container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML;
		expect(text).toBeUndefined();
	});
})

describe("Tooltip - Bottom - Visible - With Children", () => {
    let container: HTMLDivElement;
	let childrenId = "tooltip-children-test-id"
	let wrapperId = "tooltip-wrapper-test-id"
	let boxId = "tooltip-box-test-id"

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Bottom />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("wrapper should  be visible", () => {
		const element = container.querySelector(`[data-testid="${wrapperId}"]`);
		expect(element).not.toBeNull();
	});

	it("child should be visible", () => {
		const element = container.querySelector(`[data-testid="${childrenId}"]`);
		expect(element).not.toBeNull();
	});

	it("should not see text", () => {
		const text = container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML;
		expect(text).toBeUndefined();
	});

	it('should see text on hover', async () => {
		fireEvent.mouseOver(screen.getByTestId(childrenId))

		await waitFor(() => screen.getByTestId(childrenId))
		expect(container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML).toBe("Tooltip text")
	})
})

describe("Tooltip - Top - Visible - With Children", () => {
    let container: HTMLDivElement;
	let childrenId = "tooltip-children-test-id"
	let wrapperId = "tooltip-wrapper-test-id"
	let boxId = "tooltip-box-test-id"

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Top />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("wrapper should  be visible", () => {
		const element = container.querySelector(`[data-testid="${wrapperId}"]`);
		expect(element).not.toBeNull();
	});

	it("child should be visible", () => {
		const element = container.querySelector(`[data-testid="${childrenId}"]`);
		expect(element).not.toBeNull();
	});

	it("should not see text", () => {
		const text = container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML;
		expect(text).toBeUndefined();
	});

	it('should see text on hover', async () => {
		fireEvent.mouseOver(screen.getByTestId(childrenId))

		await waitFor(() => screen.getByTestId(childrenId))
		expect(container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML).toBe("Tooltip text")
	})
})

describe("Tooltip - Left - Visible - With Children", () => {
    let container: HTMLDivElement;
	let childrenId = "tooltip-children-test-id"
	let wrapperId = "tooltip-wrapper-test-id"
	let boxId = "tooltip-box-test-id"

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Left />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("wrapper should  be visible", () => {
		const element = container.querySelector(`[data-testid="${childrenId}"]`);
		expect(element).not.toBeNull();
	});

	it("child should be visible", () => {
		const element = container.querySelector(`[data-testid="${wrapperId}"]`);
		expect(element).not.toBeNull();
	});

	it("should not see text", () => {
		const text = container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML;
		expect(text).toBeUndefined();
	});

	it('should see text on hover', async () => {
		fireEvent.mouseOver(screen.getByTestId(childrenId))

		await waitFor(() => screen.getByTestId(childrenId))
		expect(container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML).toBe("Tooltip text")
	})
})

describe("Tooltip - Right - Visible - With Children", () => {
    let container: HTMLDivElement;
	let childrenId = "tooltip-children-test-id"
	let wrapperId = "tooltip-wrapper-test-id"
	let boxId = "tooltip-box-test-id"

    beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Right />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("wrapper should  be visible", () => {
		const element = container.querySelector(`[data-testid="${childrenId}"]`);
		expect(element).not.toBeNull();
	});

	it("child should be visible", () => {
		const element = container.querySelector(`[data-testid="${wrapperId}"]`);
		expect(element).not.toBeNull();
	});

	it("should not see text", () => {
		const text = container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML;
		expect(text).toBeUndefined();
	});

	it('should see text on hover', async () => {
		fireEvent.mouseOver(screen.getByTestId(childrenId))
		await waitFor(() => screen.getByTestId(childrenId))
		expect(container.querySelector(`[data-testid="${boxId}"]`)?.innerHTML).toBe("Tooltip text")
	})
})