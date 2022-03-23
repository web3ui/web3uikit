import React, { FC, useMemo } from 'react';
import color from '../../styles/colors';
import { Typography } from '../Typography';
import CodeAreaStyles from './CodeArea.styles';
import { ILineNumbersProps } from './types';

const { SideStyled, StyledUl } = CodeAreaStyles;

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
        <SideStyled>
            <StyledUl>{rowNumbers}</StyledUl>
        </SideStyled>
    );
};

export default LineNumbers;
