import { FC } from 'react';
import { IProgressBarProps, variantType } from './types';
import { ProgressBarStyles } from './ProgressBar.styles';

const getTag = (variant: variantType) => {
    switch (variant) {
        case 'h1':
            return 'h1';
        case 'h2':
            return 'h2';
        case 'h3':
            return 'h3';
        case 'h4':
            return 'h4';
        case 'subtitle1':
        case 'subtitle2':
            return 'h2';
        case 'body18':
        case 'body16':
        case 'caption10':
        case 'caption12':
        case 'caption14':
        default:
            return 'span';
    }
};

const { DivStyled, DivStyledProgress } = ProgressBarStyles;

const ProgressBar: FC<IProgressBarProps> = ({
    id,
    title,
    variant = 'h1',
    titleColor,
    progressBarBgColor,
    progressBarLineColor,
    value,
    total,
    name,
    nameColor,
    ...props
}) => {
    if (value > total) {
        console.error('Value must be less than total');
    }
    const Tag = getTag(variant);
    return (
        <DivStyled
            nameColor={nameColor}
            titleColor={titleColor}
            data-testid="test-progressBar"
        >
            <Tag className="title">{title}</Tag>

            <DivStyledProgress
                progressBarBgColor={progressBarBgColor}
                progressBarLineColor={progressBarLineColor}
            >
                <progress
                    id={id}
                    value={value}
                    max={total}
                    data-testid="test-progressBar-progress"
                />
            </DivStyledProgress>

            <label htmlFor={id} data-testid="test-progressBar-label">
                {value} of {total} <span>{name}</span>
            </label>
        </DivStyled>
    );
};

export default ProgressBar;
