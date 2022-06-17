import { Input, useCopyToClipboard, useNotification } from '../lib/index';
import * as Icons from '@web3uikit/icons';
import { IPosition, notifyType } from '../lib/Notification/types';
import { useState } from 'react';
import * as styles from './iconGallery.styles';
import { color } from '@web3uikit/styles';
const { StyledDivGallery, StyledDivGrid, StyledDivIcon } = styles;

const IconsGallery = () => {
    const AllIcons = Object.values(Icons);
    const AllCustomStyledIcons = AllIcons.map((Icon, index) => {
        return (
            <StyledDivIcon
                key={Icon.name.slice(3)}
                onClick={() => handleClick(Icon.name.slice(3), 'info')}
            >
                <Icon fontSize={30} color={color.red} />
            </StyledDivIcon>
        );
    });
    const dispatch = useNotification();
    const [, copy] = useCopyToClipboard();
    const [searchText, setSearchText] = useState('');
    const handleClick = (
        message: string,
        type: notifyType,
        icon?: React.ReactElement,
        position?: IPosition,
    ) => {
        const text = `import {${message}} from \'@web3uikit/icons\'\n<${message} fontSize='50px'/>`;
        copy(text);
        dispatch({
            type,
            title: `${message} Copied to Clipboard`,
            icon,
            position: position || 'topR',
        });
    };

    return (
        <StyledDivGallery>
            <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                prefixIcon={<Icons.Search />}
                style={{ margin: '50px' }}
            />
            <StyledDivGrid>
                {AllCustomStyledIcons.filter((Icon: JSX.Element) =>
                    Icon.key
                        ?.toString()
                        .toLowerCase()
                        .includes(searchText.toLowerCase()),
                )}
            </StyledDivGrid>
        </StyledDivGallery>
    );
};

export default IconsGallery;
