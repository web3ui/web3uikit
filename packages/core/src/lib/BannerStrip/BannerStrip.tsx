import { IBannerStripProps } from '.';
import styles from './BannerStrip.styles';
import depreciatedWarning from '../../utils/depreciationWarning';
import { Fragment, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const { SectionStyled, CrossStyled, DivStyledContainer } = styles;

const BannerStrip: React.FC<IBannerStripProps> = ({
    customize,
    bgColor,
    borderRadius = '0px',
    buttonConfig,
    buttonDisplayed = false,
    height = 'auto',
    id = 'web3uikit-banner',
    noOfDaysToHide = null,
    isCloseBtnVisible = true,
    onCloseBtnClick,
    position = 'fixed',
    slots,
    style,
    text,
    type = 'standard',
    width,
    ...props
}) => {
    if (buttonConfig || buttonDisplayed)
        depreciatedWarning('buttonConfig and buttonDisplayed props');
    //persist the banner closed event for a number of days - noOfDaysToHide
    const [isComponentVisible, setIsComponentVisible] = useLocalStorage(
        id,
        true,
        noOfDaysToHide,
    );
    if (!isComponentVisible) return null;
    return (
        <SectionStyled
            bgColor={bgColor}
            borderRadius={borderRadius}
            data-testid="test-banner-strip"
            customize={customize}
            height={height}
            position={position}
            type={type}
            width={width}
            {...props}
        >
            <DivStyledContainer>
                {slots &&
                    slots.slotBefore?.map((slotItem) => (
                        <span className="slot slot-before">{slotItem}</span>
                    ))}

                <Fragment key="banner-strip-text">{text}</Fragment>

                {slots &&
                    slots.slotAfter?.map((slotItem) => (
                        <span className="slot slot-after">{slotItem}</span>
                    ))}

                {isCloseBtnVisible && (
                    <CrossStyled
                        key="banner-strip-cross-button"
                        onClick={() => {
                            setIsComponentVisible(false);
                            onCloseBtnClick?.();
                        }}
                    />
                )}
            </DivStyledContainer>
        </SectionStyled>
    );
};

export default BannerStrip;
