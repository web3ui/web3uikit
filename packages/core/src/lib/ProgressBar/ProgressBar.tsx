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
    showInfo = 'false',
    ...props
}) => {
    return (
        <DivStyled
            data-testid="test-progressBar"
            nameColor={nameColor}
            titleColor={titleColor}
            {...props}
        >
            <h2 data-testid="test-typography" className="title">
                {title}
            </h2>

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

            {showInfo && (
                <label htmlFor={id}>
                    <span
                        className="value"
                        data-testid="test-progressBar-value"
                    >
                        {value}
                    </span>{' '}
                    of{' '}
                    <span
                        className="total"
                        data-testid="test-progressBar-total"
                    >
                        {total}
                    </span>{' '}
                    <span className="name" data-testid="test-progressBar-name">
                        {name}
                    </span>
                </label>
            )}
        </DivStyled>
    );
};

export default ProgressBar;
