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
        <DivStyled id={id} data-testid="test-info" {...props}>
            <PStyledTopic data-testid="test-info-topic">{topic}</PStyledTopic>
            <PStyledInfo data-testid="test-info-info">
                {information}
            </PStyledInfo>
        </DivStyled>
    );
};

export default Info;
