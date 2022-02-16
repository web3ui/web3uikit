import ReactDOM from 'react-dom';
import React from 'react';
import Modal from './Modal';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon';
import color from '../../styles/colors';
import { ModalProps } from './types';

describe('Modal - Regular', () => {
    let container: HTMLDivElement;
    const modalTestId = 'modal-test-id';
    const headerTestId = 'modal-header-test-id';
    const contentTestId = 'modal-content-test-id';
    const footerTestId = 'modal-footer-test-id';

    beforeEach(() => {
        const args: ModalProps = {
            id: 'regular',
            title: 'Confirm',
            children: [
                <div
                    key={'0'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Icon
                        svg={iconTypes.cloud}
                        size={64}
                        fill={color.blueDark2}
                    />
                    <p>Proceed uploading?</p>
                </div>,
            ],
            isVisible: true,
        };
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Modal {...args} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${modalTestId}"]`,
        );
        expect(element).not.toBeNull();
    });
    it('renders the header', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the content', () => {
        const element = container.querySelector(
            `[data-testid="${contentTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the footer', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the title', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"] > h3`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the close icon', () => {
        const element = container.querySelector(
            `[data-testid="${headerTestId}"] > button`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the cancel button', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element?.firstChild).not.toBeNull();
    });

    it('renders the ok button', () => {
        const element = container.querySelector(
            `[data-testid="${footerTestId}"]`,
        );
        expect(element?.lastChild).not.toBeNull();
    });
});
