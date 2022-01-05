import ReactDOM from "react-dom";
import React from "react";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Breadcrumbs.stories";
import color from "../../styles/colors";
import "jest-styled-components";

const { One } = composeStories(stories);

describe("Breadcrumbs - One", () => {
        let container: HTMLDivElement;
        let olId = "breadcrumbs-ol-test-id";
        let navId = "breadcrumbs-nav-test-id";
        let separatorId = "breadcrumbs-separator-test-id";
        let breadcrumbId = "breadcrumb-test-id";

        beforeEach(() => {
                container = document.createElement("div");
                document.body.appendChild(container);
                ReactDOM.render(<One />, container);
        });

        afterEach(() => {
                document.body.removeChild(container);
                container.remove();
        });

        it("nav wrapper should  be visible", () => {
                const element = container.querySelector(
                        `[data-testid="${navId}"]`,
                );
                expect(element).not.toBeNull();
        });

        it("separator should be not visible", () => {
                const element = container.querySelector(
                        `[data-testid="${separatorId}"]`,
                );
                expect(element).toBeNull();
        });

        it("svg icon should be visible", () => {
                const element = container
                        .querySelector(`[data-testid="${breadcrumbId}"]`)
                        ?.querySelector("svg");
                expect(element).toBeDefined();
        });

        it("ol should be visible", () => {
                const element = container.querySelector(
                        `[data-testid="${olId}"]`,
                );
                expect(element).not.toBeNull();
        });

        it("breadcrumb should not change color on hover", async () => {
                fireEvent.mouseOver(screen.getByTestId(breadcrumbId));
                await waitFor(() => screen.getByTestId(breadcrumbId));

                expect(
                        container.querySelector(
                                `[data-testid="${breadcrumbId}"]`,
                        ),
                ).toHaveStyleRule(`background: ${color.grey}`);
        });
});
