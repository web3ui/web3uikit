import { Fragment } from 'react';
import { IBannerStripProps } from '.';
import styles from './BannerStrip.styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import { color } from '@web3uikit/styles';

const { SectionStyled, CrossStyled, DivStyledContainer } = styles;

const BannerStrip: React.FC<IBannerStripProps> = ({
    customize,
    id = 'web3uikit-banner',
    noOfDaysToHide = null,
    isCloseBtnVisible = true,
    onCloseBtnClick,
    position = 'fixed',
    slots,
    style,
    text,
    type = 'standard',
    ...props
}) => {
    //persist the banner closed event for a number of days - noOfDaysToHide
    const [isComponentVisible, setIsComponentVisible] = useLocalStorage(
        id,
        true,
        noOfDaysToHide,
    );
    if (!isComponentVisible) return null;
    return (
        <SectionStyled
            data-testid="test-banner-strip"
            className="banner-strip"
            customize={customize}
            position={position}
            type={type}
            {...props}
        >
            <DivStyledContainer
                className="banner-strip-container"
                isCloseBtnVisible={isCloseBtnVisible}
            >
                {slots &&
                    slots.slotBefore?.map((slotItem, i) => (
                        <span
                            className="slot slot-before"
                            key={`slot-before-${i}`}
                        >
                            {slotItem}
                        </span>
                    ))}

                <Fragment key="banner-strip-text">{text}</Fragment>

                {slots &&
                    slots.slotAfter?.map((slotItem, i) => (
                        <span
                            className="slot slot-after"
                            key={`slot-after-${i}`}
                        >
                            {slotItem}
                        </span>
                    ))}

                {isCloseBtnVisible && (
                    <CrossStyled
                        color={customize?.color || color.gray40}
                        className="banner-strip-close"
                        key="banner-strip-cross-button"
                        onClick={() => {
                            setIsComponentVisible(false);
                            onCloseBtnClick?.();
                        }}
                        role="button"
                    />
                )}
            </DivStyledContainer>
        </SectionStyled>
    );
};

export default BannerStrip;
