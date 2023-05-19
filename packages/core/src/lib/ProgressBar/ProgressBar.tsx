import { FC } from 'react';
import { IProgressBarProps } from './types';
import { ProgressBarStyles } from './ProgressBar.styles';

const { DivStyled, DivStyledProgress } = ProgressBarStyles;

const ProgressBar: FC<IProgressBarProps> = ({
    id = 'web3uiKit-progress',
    name,
    nameColor,
    progressBarBgColor,
    progressBarLineColor,
    title,
    titleColor,
    total,
    value,
    ...props
}) => {
    return (
        <DivStyled
            data-testid="test-progressBar"
            nameColor={nameColor}
            titleColor={titleColor}
            {...props}
        >
            {title && title}

            <DivStyledProgress
                data-testid="progress-bar-background"
                progressBarBgColor={progressBarBgColor}
                progressBarLineColor={progressBarLineColor}
            >
                <progress
                    data-testid="test-progressBar-progress"
                    id={id}
                    max={total}
                    value={value}
                />
            </DivStyledProgress>

            <label htmlFor={id} data-testid="test-progressBar-label">
                {value} of {total} <span>{name}</span>
            </label>
        </DivStyled>
    );
};

export default ProgressBar;
