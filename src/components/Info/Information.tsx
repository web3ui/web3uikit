import React from 'react';
import {
    CardStyled,
    TitleStyled,
    InformationStyled,
} from './Information.styles';
import { InfoProps } from './types';

const Info: React.FC<InfoProps> = ({ id, topic, information }: InfoProps) => {
    return (
        <CardStyled id={id} data-testid={'card-test-id'}>
            <TitleStyled data-testid={'topic-test-id'}>{topic}</TitleStyled>
            <InformationStyled data-testid={'info-test-id'}>
                {information}
            </InformationStyled>
        </CardStyled>
    );
};

export default Info;
