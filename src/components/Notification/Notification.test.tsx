import "jest-styled-components";
import * as stories from "./Notification.stories";
import React from "react";
import ReactDOM from "react-dom";
import { composeStories } from "@storybook/testing-react";

const {
	Regular, Standard, CustomIcon, Inactive
} = composeStories(stories);

describe("Notification - Standard - Active - Regular Text - Regular Icon", () => {
	let container: HTMLDivElement;
	const testId = "test-notification-id";
	const messageId = "test-notification-message";
    const titleId = "test-notification-title";
    const closeId = "test-notification-x";
    const title = "New Message"
	const message = "Kresimir: Thank you for sharin.."

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Standard />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});

	it("renders title correctly", () => {
		const element = container.querySelector(`[data-testid="${titleId}"]`);
		expect(element?.textContent).toBe(title);
	});

    it("renders message correctly", () => {
		const element = container.querySelector(`[data-testid="${messageId}"]`);
		expect(element?.textContent).toBe(message);
	});

	it("should render left icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});

    it("should render close icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${closeId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});
});

describe("Notification - Regular - Active - Custom Text - Regular Icon", () => {
	let container: HTMLDivElement;
	const testId = "test-notification-id";
	const messageId = "test-notification-message";
    const titleId = "test-notification-title";
    const closeId = "test-notification-x";
    const title = Regular?.args?.title
	const message = Regular?.args?.message

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

	it("renders title correctly", () => {
		const element = container.querySelector(`[data-testid="${titleId}"]`);
		expect(element?.textContent).toBe(title);
	});

    it("renders message correctly", () => {
		const element = container.querySelector(`[data-testid="${messageId}"]`);
		expect(element?.textContent).toBe(message);
	});

	it("should render left icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});

    it("should render close icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${closeId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});
});

describe("Notification - Active - Custom Text - Custom Icon", () => {
	let container: HTMLDivElement;
	const testId = "test-notification-id";
	const messageId = "test-notification-message";
    const titleId = "test-notification-title";
    const closeId = "test-notification-x";
    const title = CustomIcon?.args?.title;
	const message = CustomIcon?.args?.message;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<CustomIcon />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("renders the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).not.toBeNull();
	});

	it("renders title correctly", () => {
		const element = container.querySelector(`[data-testid="${titleId}"]`);
		expect(element?.textContent).toBe(title);
	});

    it("renders message correctly", () => {
		const element = container.querySelector(`[data-testid="${messageId}"]`);
		expect(element?.textContent).toBe(message);
	});

	it("should render left icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testId}"] > svg`);
		expect(iconSVG).not.toBeNull()
	});

    it("should render close icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${closeId}"] > svg`);
		expect(iconSVG).not.toBeNull();
	});
});

describe("Notification - Inactive", () => {
	let container: HTMLDivElement;
	const testId = "test-notification-id";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<Inactive />, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it("should not render the component", () => {
		const element = container.querySelector(`[data-testid="${testId}"]`);
		expect(element).toBeNull();
	});
});