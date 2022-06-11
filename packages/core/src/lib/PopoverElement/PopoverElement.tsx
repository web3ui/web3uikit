import { PopoverElementProps } from './types';
import PopoverElementStyles from './PopoverElement.styles';
import { Ada, Check } from '@web3uikit/icons';

const { DivContainerStyled, DivStyled, DivImageStyled, TextStyled } =
    PopoverElementStyles;

const PopoverElement: React.FC<PopoverElementProps> = ({
    backgroundColor = 'transparent',
    height,
    icon = <Check />,
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
            data-testid={'dropdown-element-test-id'}
            icon={icon}
            iconColor={iconColor}
            id={id}
            {...props}
        >
            <DivStyled
                data-testid={'dropdown-element-click-test-id'}
                height={height}
                width={width}
                onClick={() => {
                    {
                        onClick ? onClick() : '';
                    }
                }}
            >
                {icon ? <DivImageStyled>{icon}</DivImageStyled> : ''}
                <TextStyled
                    data-testid={'dropdown-element-text-test-id'}
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
