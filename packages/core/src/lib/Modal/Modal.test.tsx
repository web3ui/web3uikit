import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';
import { Cloud } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { ModalProps } from './types';
import { test, expect, describe, vi } from 'vitest';

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
            <Cloud fontSize={64} fill={color.blueDark2} />
            <p>Proceed uploading?</p>
        </div>,
    ],
    isVisible: true,
};

const modalTestId = 'test-modal';
const headerTestId = 'test-modal-header';
const contentTestId = 'test-modal-content';
const footerTestId = 'test-modal-footer';

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
    expect(closeButton?.textContent).toBe('clickcross icon');

    const cancelButton = footer?.firstChild;
    expect(cancelButton).not.toBeNull();

    const okButton = footer?.lastChild;
    expect(okButton).not.toBeNull();
});

test('Handle Cancel', () => {
    const handleCancel = vi.fn();

    render(<Modal {...args} onCancel={handleCancel} />);

    fireEvent.click(screen.getByText('Cancel'));

    const modal = screen.getByTestId(modalTestId);
    expect(modal).not.toBeNull();

    expect(handleCancel).toHaveBeenCalledTimes(1);
});

test('Handle Close', () => {
    const handleClose = vi.fn();

    render(<Modal {...args} onCloseButtonPressed={handleClose} />);

    fireEvent.click(screen.getByText('cross icon'));

    const modal = screen.getByTestId(modalTestId);
    expect(modal).not.toBeNull();

    expect(handleClose).toHaveBeenCalledTimes(1);
});
