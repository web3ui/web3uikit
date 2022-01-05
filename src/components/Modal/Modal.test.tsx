import React from "react";
import ReactDOM from "react-dom";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Modal.stories";

const {
    Regular,
} = composeStories(stories);

describe("Modal - Regular", () => {
    let container: HTMLDivElement;

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
        expect(container).not.toBeNull();
    });
});