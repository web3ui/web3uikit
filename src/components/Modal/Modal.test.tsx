import ReactDOM from "react-dom";
import React from "react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Modal.stories";
import "jest-styled-components";
// import {screen} from "@testing-library/react";

const { Regular } = composeStories(stories);

describe("Breadcrumbs - One", () => {
    let container: HTMLDivElement;
//     let modalTestId: "modal-test-id";
//     let headerTestId: "modal-header-test-id";
//     let contentTestId: "modal-content-test-id";
//     let footerTestId: "modal-footer-test-id";
//     let closeIconTestId: "modal-close-test-id";
//     let cancelButtonTestId: "modal-cancel-button-test-id";
//     let okButtonTestId: "modal-ok-button-test-id";

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

//     it("renders the component", () => {
//         const x = screen.getByTestId(modalTestId)
//         console.log(x)
//         const element = container.querySelector(`[data-testid="${modalTestId}"]`);
//         expect(element).not.toBeNull();
//     });

//     it("renders the header", () => {
//         const element = container.querySelector(`[data-testid="${headerTestId}"]`);
//         expect(element).not.toBeNull();
//     })

//     it("renders the content", () => {
//         const element = container.querySelector(`[data-testid="${contentTestId}"]`);
//         expect(element).not.toBeNull();
//     })

//     it("renders the footer", () => {
//         const element = container.querySelector(`[data-testid="${footerTestId}"]`);
//         expect(element).not.toBeNull();
//     })

//     it("renders the close icon", () => {
//         const element = container.querySelector(`[data-testid="${closeIconTestId}"]`);
//         expect(element).not.toBeNull();
//     })

//     it("renders the cancel button", () => {
//         const element = container.querySelector(`[data-testid="${cancelButtonTestId}"]`);
//         expect(element).not.toBeNull();
//     })

//     it("renders the ok button", () => {
//         const element = container.querySelector(`[data-testid="${okButtonTestId}"]`);
//         expect(element).not.toBeNull();
//     })
});
