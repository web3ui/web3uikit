import React, { FC, useEffect, useMemo, useState } from 'react';
import { Typography } from '../Typography';
import CodeAreaStyles from './CodeArea.styles';
import color from '../../styles/colors';
import { ICodeAreaProps } from './types';
import CodeAreaHeader from './components/CodeAreaHeader';
import { HideButton } from '../HideButton';
import { CopyButton } from '../CopyButton';

const {
    CodeAreaStyled,
    DividerStyled,
    PreformattedStyled,
    ToolsStyled,
    SideStyled,
    TextAreaStyled,
    StyledUl,
    WrapperStyled,
} = CodeAreaStyles;

const CodeArea: FC<ICodeAreaProps> = ({
    hasCopyButton = true,
    hasHideButton = true,
    title,
    icon,
    iconColor,
    iconSize,
    isHidden = false,
    text,
    width = 'auto',
    hiddenText = '•••••••••••••••••••••••••••••••',
}) => {
    const [isValueHidden, setIsValueHidden] = useState(isHidden);

    useEffect(() => setIsValueHidden(isHidden), [isHidden]);

    const rowNumbers = useMemo(() => {
        const rowsAmount = text.split(/\r\n|\r|\n/).length;
        const numberComps = [];
        for (let i = 1; i < rowsAmount + 1; i++) {
            numberComps.push(
                <li>
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
    }, [text]);

    return (
        // <WrapperStyled>
        //     <SideStyled>
        //         <StyledUl>{rowNumbers}</StyledUl>
        //     </SideStyled>
        //     <TextAreaStyled id="lined" rows={10} cols={60} />
        // </WrapperStyled>
        <TextAreaStyled rows={10} cols={40}></TextAreaStyled>
    );
};

export default CodeArea;
