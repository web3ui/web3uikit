// / Importing React and its awesome hooks
import React, { useState } from 'react';
import { Typography } from '../Typography';

// importing elements from the kit, never add more elements, improve what we have
import Icon from '../Icon/Icon';
import { iconTypes } from '../Icon/collection';
import { Button } from '../Button';

// importing centralized colors
import color from '../../styles/colors';

// importing props from the components TypeScript interface
import { UploadProps } from './types';

// importing CSS styles as styled components, sorted alphabetically
import styles from './Upload.styles';

const { DivStyled } = styles;

// Normal boilerplate React functional component
const Upload: React.FC<UploadProps> = ({ theme }) => {
    const [pressed, setPressed] = useState(false);
    const BrowseFile = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault;
        console.log('clicked');
    };
    const divClickHandler = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        event.preventDefault;
        setPressed(!pressed);
    };
    return (
        <DivStyled onClick={divClickHandler} pressed={pressed}>
            {theme === 'textOnly' ? (
                <>
                    <Typography variant="h4" weight="400">
                        Drag & Drop File
                    </Typography>
                    <Typography variant="h4">or </Typography>
                    <Button
                        theme="text"
                        text="Browse File"
                        onClick={BrowseFile}
                    />
                </>
            ) : theme === 'withIcon' ? (
                <>
                    <Icon svg={iconTypes.downloadCloud} fill={color.blue} />
                    <Typography color={color.blue}>
                        Click or Drag File to Upload
                    </Typography>
                    <Typography variant="caption12">
                        Recommendation: minmum of 350px by 350px
                    </Typography>
                </>
            ) : (
                ''
            )}
        </DivStyled>
    );
};

export default Upload;
