import React from 'react';
import { DivStyled, PStyledTopic, PStyledInfo } from './Information.styles';
import { InfoProps } from './types';

const Info: React.FC<InfoProps> = ({ id, information, topic }: InfoProps) => {
    return (
        <DivStyled id={id} data-testid={'card-test-id'}>
            <PStyledTopic data-testid={'topic-test-id'}>{topic}</PStyledTopic>
            <PStyledInfo data-testid={'info-test-id'}>
                {information}
            </PStyledInfo>
        </DivStyled>
    );
};

export default Info;
