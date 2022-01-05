import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./LinkTo.stories";
import "jest-styled-components";
import color from "../../styles/colors";

const {
	ExternalLink,
	ExternalLinkIconAfter,
	MailToLink,
	MailToLinkIconAfter,
	LinkWithOutText,
} = composeStories(stories);

describe("LinkTo - External", () => {
	let container: HTMLDivElement;
	const testAddress = ExternalLink?.args?.address;
	const testIcon = "test-icon";
	const testId = "test-link-to";
	const testText = ExternalLink?.args?.text;
	const testTextWrap = "test-link-text";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ExternalLink />, container);
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
		const element = container.querySelector(`[data-testid="${testTextWrap}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders link address correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.href).toBe(testAddress);
	});
	it("renders link target correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.target).toBe("_blank");
	});
	it("renders the correct icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
		expect(iconSVG).not.toBeNull();
		expect(iconSVG?.textContent).toBe("link icon");
	});
	it("renders link as blue color", () => {
		const element = renderer.create(<ExternalLink />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("color", `${color.blue}`);
	});
	it("renders inline so it can be mid text", () => {
		const element = renderer.create(<ExternalLink />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("display", "inline-block");
	});
	it("renders icon in leading position", () => {
		const flexSpan: HTMLSpanElement | null = container.querySelector(
			`[data-testid="${testId}"] .flex`
		);
		const styles = flexSpan && getComputedStyle(flexSpan);
		expect(styles?.flexDirection).toBe("row");
	});
});

describe("LinkTo - External Icon After", () => {
	let container: HTMLDivElement;
	const testAddress = ExternalLinkIconAfter?.args?.address;
	const testIcon = "test-icon";
	const testId = "test-link-to";
	const testText = ExternalLinkIconAfter?.args?.text;
	const testTextWrap = "test-link-text";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<ExternalLinkIconAfter />, container);
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
		const element = container.querySelector(`[data-testid="${testTextWrap}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders link address correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.href).toBe(testAddress);
	});
	it("renders link target correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.target).toBe("_blank");
	});
	it("renders the correct icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
		expect(iconSVG).not.toBeNull();
		expect(iconSVG?.textContent).toBe("link icon");
	});
	it("renders link as blue color", () => {
		const element = renderer.create(<ExternalLinkIconAfter />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("color", `${color.blue}`);
	});
	it("renders inline so it can be mid text", () => {
		const element = renderer.create(<ExternalLinkIconAfter />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("display", "inline-block");
	});
	it("renders icon in leading position", () => {
		const flexSpan: HTMLSpanElement | null = container.querySelector(
			`[data-testid="${testId}"] .flex`
		);
		const styles = flexSpan && getComputedStyle(flexSpan);
		expect(styles?.flexDirection).toBe("row-reverse");
	});
});

describe("LinkTo - Email", () => {
	let container: HTMLDivElement;
	const testAddress = `mailto:${MailToLink?.args?.address}`;
	const testIcon = "test-icon";
	const testId = "test-link-to";
	const testText = MailToLink?.args?.text;
	const testTextWrap = "test-link-text";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<MailToLink />, container);
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
		const element = container.querySelector(`[data-testid="${testTextWrap}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders link address correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.href).toBe(testAddress);
	});
	it("renders link target correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.target).toBe("_self");
	});
	it("renders the correct icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
		expect(iconSVG).not.toBeNull();
		expect(iconSVG?.textContent).toBe("mail icon");
	});
	it("renders link as blue color", () => {
		const element = renderer.create(<MailToLink />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("color", `${color.blue}`);
	});
	it("renders inline so it can be mid text", () => {
		const element = renderer.create(<MailToLink />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("display", "inline-block");
	});
	it("renders icon in leading position", () => {
		const flexSpan: HTMLSpanElement | null = container.querySelector(
			`[data-testid="${testId}"] .flex`
		);
		const styles = flexSpan && getComputedStyle(flexSpan);
		expect(styles?.flexDirection).toBe("row");
	});
});

describe("LinkTo - External Icon After", () => {
	let container: HTMLDivElement;
	const testAddress = `mailto:${MailToLinkIconAfter?.args?.address}`;
	const testIcon = "test-icon";
	const testId = "test-link-to";
	const testText = MailToLinkIconAfter?.args?.text;
	const testTextWrap = "test-link-text";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<MailToLinkIconAfter />, container);
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
		const element = container.querySelector(`[data-testid="${testTextWrap}"]`);
		expect(element?.textContent).toBe(testText);
	});
	it("renders link address correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.href).toBe(testAddress);
	});
	it("renders link target correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.target).toBe("_self");
	});
	it("renders the correct icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
		expect(iconSVG).not.toBeNull();
		expect(iconSVG?.textContent).toBe("mail icon");
	});
	it("renders link as blue color", () => {
		const element = renderer.create(<MailToLinkIconAfter />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("color", `${color.blue}`);
	});
	it("renders inline so it can be mid text", () => {
		const element = renderer.create(<MailToLinkIconAfter />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("display", "inline-block");
	});
	it("renders icon in leading position", () => {
		const flexSpan: HTMLSpanElement | null = container.querySelector(
			`[data-testid="${testId}"] .flex`
		);
		const styles = flexSpan && getComputedStyle(flexSpan);
		expect(styles?.flexDirection).toBe("row-reverse");
	});
});

describe("LinkTo - No text set for link", () => {
	let container: HTMLDivElement;
	const testAddress = LinkWithOutText?.args?.address;
	const testIcon = "test-icon";
	const testId = "test-link-to";
	const testTextWrap = "test-link-text";

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		ReactDOM.render(<LinkWithOutText />, container);
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
		const element = container.querySelector(`[data-testid="${testTextWrap}"]`);
		expect(element?.textContent).toBe(testAddress);
	});
	it("renders link address correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.href).toBe(testAddress);
	});
	it("renders link target correctly", () => {
		const element: HTMLAnchorElement | null = container.querySelector(
			`[data-testid="${testId}"]`
		);
		expect(element?.target).toBe("_blank");
	});
	it("renders the correct icon", () => {
		const iconSVG = container.querySelector(`[data-testid="${testIcon}"]`);
		expect(iconSVG).not.toBeNull();
		expect(iconSVG?.textContent).toBe("link icon");
	});
	it("renders link as blue color", () => {
		const element = renderer.create(<LinkWithOutText />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("color", `${color.blue}`);
	});
	it("renders inline so it can be mid text", () => {
		const element = renderer.create(<LinkWithOutText />).toJSON();
		expect(element).toMatchSnapshot();
		expect(element).toHaveStyleRule("display", "inline-block");
	});
	it("renders icon in leading position", () => {
		const flexSpan: HTMLSpanElement | null = container.querySelector(
			`[data-testid="${testId}"] .flex`
		);
		const styles = flexSpan && getComputedStyle(flexSpan);
		expect(styles?.flexDirection).toBe("row");
	});
});
