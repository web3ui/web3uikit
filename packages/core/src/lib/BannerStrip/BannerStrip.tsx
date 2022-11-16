import { IBannerStripProps } from '.';
import styles from './BannerStrip.styles';
import depreciatedWarning from '../../utils/depreciationWarning';
import { Fragment, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const { SectionStyled, CrossStyled, DivStyledContainer } = styles;

const BannerStrip: React.FC<IBannerStripProps> = ({
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
    style,
    text,
    type = 'standard',
    width,
    ...props
}) => {
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
            height={height}
            position={position}
            type={type}
            width={width}
            {...props}
        >
            <DivStyledContainer>
                <Fragment key="banner-strip-text">{text}</Fragment>
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
