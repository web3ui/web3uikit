import { Link, Mail } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { LinkToProps } from './types';
import styles from './LinkTo.styles';
import { Typography } from '../Typography';

const { InternalLinkStyled, LinkStyled, SpanStyledFlex, SpanStyledText } =
    styles;

const LinkTo: React.FC<LinkToProps> = ({
    address,
    iconLayout = 'leading',
    text,
    type = 'external',
    isUnderlined = true,
    textColor,
    ...props
}) => {
    const renderContent = () => (
        <SpanStyledFlex iconLayout={iconLayout} data-testid="test-link-flex">
            {iconLayout !== 'none' &&
                type !== 'internal' &&
                (type === 'email' ? (
                    <Mail
                        title="mail icon"
                        titleId="linkto mail icon"
                        fill={textColor || color.navy40}
                        fontSize={18}
                        style={{ marginTop: 'auto' }}
                    />
                ) : (
                    <Link
                        title="link icon"
                        titleId="linkto link icon"
                        fill={textColor || color.navy40}
                        fontSize={18}
                        style={{ marginTop: 'auto' }}
                    />
                ))}
            <Typography
                data-testid="test-link-text"
                color={textColor || color.navy40}
                {...props}
            >
                {text || address}
            </Typography>
        </SpanStyledFlex>
    );

    return type !== 'internal' ? (
        <LinkStyled
            data-testid="test-link-to"
            href={`${type === 'email' ? 'mailto:' : ''}${address}`}
            target={`${type === 'email' ? '_self' : '_blank'}`}
            isUnderlined={isUnderlined}
            textColor={textColor}
        >
            {renderContent()}
        </LinkStyled>
    ) : (
        <InternalLinkStyled
            data-testid="test-link-to"
            to={address}
            isUnderlined={isUnderlined}
            textColor={textColor}
        >
            {renderContent()}
        </InternalLinkStyled>
    );
};

export default LinkTo;
