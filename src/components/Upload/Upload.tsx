import React, { useRef, useState } from 'react';

import { Typography } from '../Typography';
import Icon from '../Icon/Icon';
import { Button } from '../Button';
import color from '../../styles/colors';
import { UploadProps } from './types';
import styles from './Upload.styles';

const {
    DivStyled,
    TextContentStyled,
    InputStyled,
    DivUploadedStyled,
    ImageStyled,
    ImageFrameStyled,
    IconDivStyled,
} = styles;

const Upload: React.FC<UploadProps> = ({
    theme = 'withIcon',
    onClick,
    onUpload,
}) => {
    const [fileSelected, setFileSelected] = useState<Blob | null>(null);
    const inputFile = useRef<HTMLInputElement | null>(null);

    const onClickHandler = (
        event:
            | React.MouseEvent<HTMLDivElement, MouseEvent>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        // our logic
        inputFile.current && inputFile.current.click();
        console.log(inputFile);
        onClick && onClick(event);
        onUpload && onUpload();
    };

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.target.files && event.target.files[0];
        console.log(file);
        setFileSelected(file);
    };
    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.dataTransfer.files[0]);
        const file = event.dataTransfer.files[0];
        setFileSelected(file);
    };
    const deleteHandler = () => {
        setFileSelected(null);
    };

    return (
        <>
            {fileSelected === null && (
                <DivStyled
                    onClick={onClickHandler}
                    onDragOver={enableDropping}
                    onDrop={onDropHandler}
                >
                    <InputStyled
                        type="file"
                        id="file"
                        ref={inputFile}
                        onChange={onChangeFile}
                    />
                    {theme === 'textOnly' && (
                        <>
                            <Typography variant="h4" weight="400">
                                Drag & Drop File <br /> or
                            </Typography>

                            <Button
                                theme="text"
                                text="Browse Files"
                                onClick={onClickHandler}
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
            )}
            {fileSelected && (
                <DivUploadedStyled>
                    <ImageFrameStyled>
                        <ImageStyled
                            src={URL.createObjectURL(fileSelected)}
                            alt="image"
                        />
                    </ImageFrameStyled>
                    <IconDivStyled onClick={deleteHandler}>
                        <Icon svg="bin" fill={color.blueSky} size={24} />
                    </IconDivStyled>
                </DivUploadedStyled>
            )}
        </>
    );
};

export default Upload;
