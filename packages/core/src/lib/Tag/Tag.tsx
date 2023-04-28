import { Checkmark, Cross } from '@web3uikit/icons';
import { color as colors } from '@web3uikit/styles';
import styles from './Tag.styles';
import { TagProps } from './types';
const { TagStyled, SpanStyled } = styles;

const Tag: React.FC<TagProps> = ({
    active = false,
    color,
    fontSize,
    hasCancel = false,
    id,
    onCancelClick,
    padding,
    text = 'Tag',
    theme = 'regular',
    tone = 'light',
    width = 'fit-content',
    prefixIcon,
    customize,
    ...props
}: TagProps) => {
    return (
        <TagStyled
            active={active}
            customize={customize}
            color={color}
            data-testid="test-tag"
            fontSize={fontSize}
            id={id}
            padding={padding}
            role="status"
            theme={theme}
            tone={tone}
            width={width}
            {...props}
        >
            {theme === 'status' && active && (
                <Checkmark
                    title="checkmark icon"
                    titleId="tag checkmark icon"
                    fill="inherit"
                    fontSize={12}
                />
            )}
            {prefixIcon && prefixIcon}
            <strong data-testid="test-tag-text">{text}</strong>
            {hasCancel && (
                <SpanStyled onClick={onCancelClick}>
                    <Cross
                        title="cross icon"
                        titleId="tag cross icon"
                        fill={colors.gray40}
                    />
                </SpanStyled>
            )}
        </TagStyled>
    );
};

export default Tag;
