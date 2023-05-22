import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IBannerStripProps, TBannerStripTypes } from './types';
import { Cross } from '@web3uikit/icons';

const getColor = (type?: TBannerStripTypes) => {
    switch (type) {
        case 'success':
            return {
                bgColor: color.mint10,
                color: color.mint50,
            };
        case 'warning':
            return {
                bgColor: color.yellow10,
                color: color.yellow50,
            };
        case 'error':
            return {
                bgColor: color.red10,
                color: color.red40,
            };
        default:
            return {
                bgColor: color.aero20,
                color: color.navy40,
            };
    }
};

type TSectionStyledProps = Pick<
    IBannerStripProps,
    'customize' | 'isCloseBtnVisible' | 'position' | 'type'
>;

const SectionStyled = styled.section<TSectionStyledProps>`
    ${resetCSS};
    ${fonts.text};
    align-items: center;
    background-color: ${(props) =>
        props.customize?.backgroundColor || getColor(props.type).bgColor};
    border: ${(p) => p.customize?.border ?? ''};
    border-radius: ${(p) => p.customize?.borderRadius ?? ''};
    color: ${(p) =>
        p.customize?.color ?? (p.type ? getColor(p.type).color : color.white)};
    display: flex;
    font-size: ${(p) => p.customize?.fontSize ?? '14px'};
    font-weight: ${(p) => p.customize?.fontWeight ?? '550'};
    justify-content: center;
    left: ${(props) => (props.position === 'absolute' ? '0' : 'unset')};
    line-height: 24px;
    max-width: 100%;
    padding: ${(p) => p.customize?.padding ?? '8px 0px'};
    position: ${(props) => props.position && props.position};
    text-align: center;
    top: ${(props) => (props.position === 'absolute' ? '0' : 'unset')};
    width: 100%;
    z-index: ${(props) => (props.position === 'absolute' ? '10001' : 'unset')};
`;

const DivStyledContainer = styled.div<TSectionStyledProps>`
    align-items: center;
    display: flex;
    gap: 12px;
    height: 100%;
    justify-content: center;
    padding-right: ${(props) => (props.isCloseBtnVisible ? '30px' : '0')};
    position: relative;
    width: 100%;
`;

const CrossStyled = styled(Cross)<TSectionStyledProps>`
    cursor: pointer;
    height: 12px;
    position: absolute;
    right: 8px;
    top: calc(50% - 6px);
    width: 11px;
`;

export default { SectionStyled, CrossStyled, DivStyledContainer };
