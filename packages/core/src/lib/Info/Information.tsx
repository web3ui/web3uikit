import React from 'react';
import styles from './Information.styles';
import { InfoProps } from './types';

const { DivStyled, PStyledTopic, PStyledInfo } = styles;

const Info: React.FC<InfoProps> = ({
    id,
    information,
    topic,
    ...props
}: InfoProps) => {
    return (
        <DivStyled id={id} data-testid={'card-test-id'} {...props}>
            <PStyledTopic data-testid={'topic-test-id'}>{topic}</PStyledTopic>
            <PStyledInfo data-testid={'info-test-id'}>
                {information}
            </PStyledInfo>
        </DivStyled>
    );
};

export default Info;
