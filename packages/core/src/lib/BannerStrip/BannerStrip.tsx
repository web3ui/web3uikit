import { IBannerStripProps } from '.';
import styles from './BannerStrip.styles';
import depreciatedWarning from '../../utils/depreciationWarning';
import { Fragment, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const { SectionStyled, CrossStyled, DivStyledContainer } = styles;

const BannerStrip: React.FC<IBannerStripProps> = ({
    borderRadius = '0px',
    buttonConfig,
    buttonDisplayed = false,
    height = 'auto',
    id = 'web3uikit-banner',
    onCloseBtnClick,
    position = 'fixed',
    text,
    bgColor,
    isCloseBtnVisible = true,
    type = 'standard',
    width,
    ...props
}) => {
    depreciatedWarning('buttonConfig and buttonDisplayed props');
    //persist the banner closed event for a day
    const [isComponentVisible, setIsComponentVisible] = useLocalStorage(
        id,
        true,
        1,
    );
    if (!isComponentVisible) return null;
    return (
        <SectionStyled
            borderRadius={borderRadius}
            data-testid="test-banner-strip"
            height={height}
            position={position}
            bgColor={bgColor}
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
