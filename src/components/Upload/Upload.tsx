import React, { useState } from 'react';
import { Typography } from '../Typography';
import Icon from '../Icon/Icon';
import { Button } from '../Button';
import color from '../../styles/colors';
import { UploadProps } from './types';
import styles from './Upload.styles';

const { DivStyled, TextContentStyled } = styles;

const Upload: React.FC<UploadProps> = ({ theme = 'withIcon' }) => {
    // const [isPressed, setIsPressed] = useState(false);

    const browseFile = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault;
        console.log('clicked');
    };

    const divClickHandler = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        event.preventDefault;
    };
    return (
        <DivStyled onClick={divClickHandler}>
            {theme === 'textOnly' && (
                <>
                    <Typography variant="h4" weight="400">
                        Drag & Drop File <br /> or
                    </Typography>
                    <Button
                        theme="text"
                        text="Browse Files"
                        onClick={browseFile}
                    />
                </>
            )}
            {theme === 'withIcon' && (
                <>
                    <Icon svg="image" fill={color.blueSky} size={48} />
                    <TextContentStyled>
                        <Typography color={color.blue} variant="body16">
                            Click or Drag File to Upload
                        </Typography>
                        <Typography variant="caption12" weight="400">
                            Recommendation: minimum of 350px by 350px
                        </Typography>
                    </TextContentStyled>
                </>
            )}
        </DivStyled>
    );
};

export default Upload;
