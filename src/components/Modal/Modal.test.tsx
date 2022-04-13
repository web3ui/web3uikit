import React from 'react';
import {
    fireEvent,
    render,
    screen,
} from '@testing-library/react';
import Modal from './Modal';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon';
import color from '../../styles/colors';
import { ModalProps } from './types';

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

const modalTestId = 'modal-test-id';
const headerTestId = 'modal-header-test-id';
const contentTestId = 'modal-content-test-id';
const footerTestId = 'modal-footer-test-id';

test('Renders Modal', () => {
    render(<Modal {...args} />);

    const modal = screen.getByTestId(modalTestId);
    expect(modal).not.toBeNull();

    const header = screen.getByTestId(headerTestId);
    expect(header).not.toBeNull();

    const content = screen.getByTestId(contentTestId);
    expect(content).not.toBeNull();

    const footer = screen.getByTestId(footerTestId);
    expect(footer).not.toBeNull();

    const title = screen.getByText('Confirm');
    expect(title).not.toBeNull();

    const closeButton = header?.lastChild;
    expect(closeButton).not.toBeNull();
    expect(closeButton?.textContent).toBe('x iconclick');

    const cancelButton = footer?.firstChild;
    expect(cancelButton).not.toBeNull();

    const okButton = footer?.lastChild;
    expect(okButton).not.toBeNull();
});

test('Handle Cancel', () => {
    const handleCancel = jest.fn();

    render(<Modal {...args} onCancel={handleCancel} />);

    fireEvent.click(screen.getByText('Cancel'));

    const modal = screen.getByTestId(modalTestId);
    expect(modal).not.toBeNull();

    expect(handleCancel).toHaveBeenCalledTimes(1);
});

test('Handle Close', () => {
    const handleClose = jest.fn();

    render(<Modal {...args} onCloseButtonPressed={handleClose} />);

    fireEvent.click(screen.getByText('x icon'));

    const modal = screen.getByTestId(modalTestId);
    expect(modal).not.toBeNull();

    expect(handleClose).toHaveBeenCalledTimes(1);
});
