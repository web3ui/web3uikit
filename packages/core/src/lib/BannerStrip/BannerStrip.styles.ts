import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IBannerStripProps, TBannerStripTypes } from './types';
import { Cross } from '@web3uikit/icons';

// TODO : UPDATE ALL COLORS WITH NAMING SYSTEM ONCE IT IS FINALIZED
const getColor = (type?: TBannerStripTypes) => {
    switch (type) {
        case 'success':
            return {
                bgColor: '#E8FCF9',
                color: color.mint50,
            };
        case 'warning':
            return {
                bgColor: '#FEFAED',
                color: color.yellow50,
            };
        case 'error':
            return {
                bgColor: '#FDF0F0',
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
    'height' | 'width' | 'borderRadius' | 'type' | 'position' | 'bgColor'
>;

const SectionStyled = styled.section<TSectionStyledProps>`
    ${resetCSS};
    ${fonts.text};
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 550;
    justify-content: center;
    left: 0;
    line-height: 24px;
    max-width: 100%;
    padding: 8px 0px;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 10001;

    position: ${(props) => props.position && props.position};
    border-radius: ${(props) => props.borderRadius && props.borderRadius};
    height: ${(props) => props.height && props.height};
    width: ${(props) => props.width && props.width};
    background-color: ${(props) =>
        props.type !== 'custom' ? getColor(props.type).bgColor : props.bgColor};
    color: ${(p) => (p.type ? getColor(p.type).color : color.white)};
`;

const DivStyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-right: 20px;
`;

const CrossStyled = styled(Cross)`
    fill: ${color.gray40};
    right: 14px;
    top: 7px;
    height: 11px;
    width: 11px;
    position: absolute;
    cursor: pointer;
`;

export default { SectionStyled, CrossStyled, DivStyledContainer };
