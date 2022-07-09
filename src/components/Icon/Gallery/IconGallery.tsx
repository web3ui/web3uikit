import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import color from '../../../styles/colors';
import { useCopyToClipboard } from '../../CopyButton';
import { Input } from '../../Input';
import { useNotification } from '../../Notification';
import { IPosition, notifyType } from '../../Notification/types';
import { iconTypes, TIconType } from '../collection';
import Icon from '../Icon';

const StyledDivGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDivGrid = styled.div`
    max-width: 95vw;
    margin: auto;
    display: grid;
    gap: 1rem;
    align-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const StyledDivIcon = styled.div`
    border: 1px solid grey;
    position: relative;
    margin: auto;
    padding: 50px;
    border-radius: 20px;
    transition: all 0.1s linear;
    &:hover {
        background-color: ${color.blueCloud};
    }
`;

const IconsGallery = () => {
    const AllIcons = Object.keys(iconTypes);
    const AllCustomStyledIcons = AllIcons.map((svg) => {
        return (
            <StyledDivIcon key={svg} onClick={() => handleClick(svg, 'info')}>
                <Icon svg={svg as TIconType} fill="#000" size={32} />
            </StyledDivIcon>
        );
    });
    const dispatch = useNotification();
    const [, copy] = useCopyToClipboard();
    const [searchText, setSearchText] = useState('');
    const handleClick = (
        message: string,
        type: notifyType,
        icon?: TIconType,
        position?: IPosition,
    ) => {
        const text = `${message}`;
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
                prefixIcon="search"
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
