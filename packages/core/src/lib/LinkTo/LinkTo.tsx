import { Link, Mail } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { LinkToProps } from './types';
import styles from './LinkTo.styles';

const { InternalLinkStyled, LinkStyled, SpanStyledFlex, SpanStyledText } =
    styles;

const LinkTo: React.FC<LinkToProps> = ({
    address,
    text,
    type = 'external',
    iconLayout = 'leading',
    ...props
}) => {
    const renderContent = () => (
        <SpanStyledFlex iconLayout={iconLayout} data-testid="test-link-flex">
            {type !== 'internal' &&
                (type === 'email' ? (
                    <Mail fill={color.blue} size={14} />
                ) : (
                    <Link fill={color.blue} size={14} />
                ))}
            <SpanStyledText data-testid="test-link-text">
                {text || address}
            </SpanStyledText>
        </SpanStyledFlex>
    );

    return type !== 'internal' ? (
        <LinkStyled
            data-testid="test-link-to"
            href={`${type === 'email' ? 'mailto:' : ''}${address}`}
            target={`${type === 'email' ? '_self' : '_blank'}`}
            {...props}
        >
            {renderContent()}
        </LinkStyled>
    ) : (
        <InternalLinkStyled data-testid="test-link-to" to={address}>
            {renderContent()}
        </InternalLinkStyled>
    );
};

export default LinkTo;
