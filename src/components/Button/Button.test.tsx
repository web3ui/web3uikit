import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

const {
    ColoredBlue,
    ColoredGreen,
    ColoredRed,
    ColoredYellow,
    Ghost,
    Link,
    LoadingButton,
    LoadingButtonCustomProps,
    Outline,
    Primary,
    PrimaryLarge,
    PrimarySmall,
    PrimaryWithIcon,
    PrimaryWithIconAfter,
    PrimaryWithIconOnly,
    PrimaryWithIconOnlyLarge,
    PrimaryWithIconOnlySmall,
    Secondary,
    StatusDanger,
    StatusSuccess,
    StatusWarning,
    Text,
} = composeStories(stories);

let container: HTMLDivElement;
const testClickEvent = jest.fn();
export const buttonTestId = 'test-button';

describe('Button - Primary', () => {
    const testText = Primary?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Primary onClick={testClickEvent} />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        cleanup();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });

    it('renders Primary button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
    });

    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Primary Large', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryLarge />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        expect(styles?.borderWidth).toBe('2px');
        expect(styles?.fontSize).toBe('16px');
        expect(styles?.padding).toBe('6px 22px');
    });
});

describe('Button - Primary Small', () => {
    beforeEach(() => {
        container = document.createElement('div');
        render(<PrimarySmall />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        expect(styles?.fontSize).toBe('14px');
        expect(styles?.padding).toBe('0px 16px');
    });
});

describe('Button - Primary with icon', () => {
    const testText = PrimaryWithIcon?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryWithIcon />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe('plus icon' + testText);
    });
    it('renders icon correctly', () => {
        const iconElement = container.querySelector(
            `[data-testid="${buttonTestId}"] > div > svg`,
        );
        expect(iconElement).not.toBeNull();
    });
});

describe('Button - Primary icon after', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryWithIconAfter />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.flexDirection).toBe('row-reverse');
    });
});

describe('Button - Primary icon only', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryWithIconOnly />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderWidth).toBe('0px');
        expect(styles?.height).toBe('32px');
        expect(styles?.width).toBe('32px');
        expect(styles?.textIndent).toBe('-99999px');
    });
});

describe('Button - Primary icon only large', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryWithIconOnlyLarge />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderWidth).toBe('4px');
        expect(styles?.height).toBe('40px');
        expect(styles?.width).toBe('40px');
        expect(styles?.textIndent).toBe('-99999px');
    });
});

describe('Button - Primary icon only small', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<PrimaryWithIconOnlySmall />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });
    it('renders PrimaryLarge button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.height).toBe('24px');
        expect(styles?.width).toBe('24px');
        expect(styles?.textIndent).toBe('-99999px');
    });
});

describe('Button - Secondary', () => {
    const testText = Secondary?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Secondary />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Secondary button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.blueLight);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });

    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Outline', () => {
    const testText = Outline?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Outline />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Outline button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.white);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - ColoredRed', () => {
    const testText = ColoredRed?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<ColoredRed />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Red button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.red);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.red);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - ColoredBlue', () => {
    const testText = ColoredBlue?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<ColoredBlue />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Blue button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.blue);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - ColoredGreen', () => {
    const testText = ColoredGreen?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<ColoredGreen />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Green button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.green);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - ColoredYellow', () => {
    const testText = ColoredYellow?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<ColoredYellow />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Yellow button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.yellow);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.yellow);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Outline', () => {
    const testText = ColoredYellow?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<ColoredYellow />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Yellow button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.yellow);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.yellow);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Loading', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<LoadingButton />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Loading', () => {
    beforeEach(() => {
        container = document.createElement('div');

        render(<LoadingButtonCustomProps />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders  button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - StatusWarning', () => {
    const testText = StatusWarning?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<StatusWarning />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.yellowLight);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.yellow);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - StatusDanger', () => {
    const testText = StatusDanger?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<StatusDanger />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.red);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.red);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - StatusSuccess', () => {
    const testText = StatusSuccess?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<StatusSuccess />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.green);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.green);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Ghost', () => {
    const testText = Ghost?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Ghost />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.white);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Link', () => {
    const testText = Link?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Link />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && (styles.backgroundColor);
        expect(bgColorHex).toBe('transparent');
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});

describe('Button - Text', () => {
    const testText = Text?.args?.text;

    beforeEach(() => {
        container = document.createElement('div');

        render(<Text />, {
            container: document.body.appendChild(container),
        });
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        expect(element?.textContent).toBe(testText);
    });
    it('renders Warning button with correct styles', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && (styles.backgroundColor);
        expect(bgColorHex).toBe('transparent');
        const colorHex = styles && rgbToHex(styles.color).toUpperCase();
        expect(colorHex).toBe(color.blue);
    });
    it('returns the normal onClick event', () => {
        const element = container.querySelector(
            `[data-testid="${buttonTestId}"]`,
        );
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });
});
