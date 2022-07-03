import { PopoverElementProps } from './types';
import PopoverElementStyles from './PopoverElement.styles';
import { Check } from '@web3uikit/icons';

const { DivContainerStyled, DivStyled, DivImageStyled, TextStyled } =
    PopoverElementStyles;

const PopoverElement: React.FC<PopoverElementProps> = ({
    backgroundColor = 'transparent',
    height,
    icon = (
        <Check
            fontSize={20}
            title="check icon"
            titleId="popover element check icon"
        />
    ),
    iconColor = 'white',
    iconSize = 20,
    id,
    onClick,
    text = 'Text',
    textColor = 'white',
    textSize = 14,
    width,
    ...props
}: PopoverElementProps) => {
    return (
        <DivContainerStyled
            backgroundColor={backgroundColor}
            data-testid="test-dropdown-element"
            icon={icon}
            iconColor={iconColor}
            id={id}
            {...props}
        >
            <DivStyled
                data-testid="test-dropdown-element-click"
                height={height}
                onClick={() => {
                    {
                        onClick ? onClick() : '';
                    }
                }}
                width={width}
            >
                {icon ? <DivImageStyled>{icon}</DivImageStyled> : ''}
                <TextStyled
                    data-testid="test-dropdown-element-text"
                    textColor={textColor}
                    textSize={textSize}
                >
                    {text}
                </TextStyled>
            </DivStyled>
        </DivContainerStyled>
    );
};

export default PopoverElement;
