import { FC, useMemo } from 'react';
import { color } from '@web3uikit/styles';
import { Typography } from '../Typography';
import CodeAreaStyles from './CodeArea.styles';
import { ILineNumbersProps } from './types';

const { DivStyledSideNumber, StyledUl } = CodeAreaStyles;

const LineNumbers: FC<ILineNumbersProps> = ({ currentValue }) => {
    const rowNumbers = useMemo(() => {
        const rowsAmount = currentValue.split(/\r\n|\r|\n/).length;
        const numberComps = [];
        for (let i = 1; i < rowsAmount + 1; i++) {
            numberComps.push(
                <li key={i}>
                    <Typography
                        variant="caption14"
                        monospace
                        color={color.grey}
                        italic
                    >
                        {i}
                    </Typography>
                </li>,
            );
        }
        return numberComps;
    }, [currentValue]);

    return (
        <DivStyledSideNumber>
            <StyledUl data-testid="test-codearea-linenumbers">
                {rowNumbers}
            </StyledUl>
        </DivStyledSideNumber>
    );
};

export default LineNumbers;
