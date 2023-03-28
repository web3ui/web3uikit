import { IToggleProps } from './types';
import ToggleStyles from './Toggle.styles';

const { LabelStyled } = ToggleStyles;

const Toggle: React.FC<IToggleProps> = ({
    customize,
    disabled = false,
    id = 'web3uiKit-toggle',
    labelOff = 'off',
    labelOn = 'on',
    name = 'web3uiKit-toggle',
    onBlur,
    onChange,
    onFocus,
    onToggle,
    validation,
    ...props
}) => {
    const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange && onChange(event);

        if (event.target.checked) {
            onToggle && onToggle(labelOn);
        } else {
            onToggle && onToggle(labelOff);
        }
    };

    return (
        <LabelStyled
            className="toggle"
            customize={customize}
            data-testid="test-toggle-label"
            disabled={disabled}
        >
            <span className="toggle-label" data-testid="test-toggle-labelOff">
                {labelOff}
            </span>
            <input
                data-testid="test-toggle-input"
                disabled={disabled}
                id={id}
                name={name}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    onBlur && onBlur(event)
                }
                onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
                    onFocus && onFocus(event)
                }
                onChange={onToggleChange}
                required={validation?.required}
                type="checkbox"
                {...props}
            />

            <span className="toggle" data-testid="test-toggle-switch" />

            <span className="toggle-label" data-testid="test-toggle-labelOn">
                {labelOn}
            </span>
        </LabelStyled>
    );
};

export default Toggle;
