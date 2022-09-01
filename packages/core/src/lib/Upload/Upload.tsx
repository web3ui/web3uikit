import { Typography } from '../Typography';
import { IUploadProps } from './types';
import { color } from '@web3uikit/styles';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Upload.styles';
import { Bin, Image } from '@web3uikit/icons';

const {
    DivStyled,
    IconDivStyled,
    ImageStyled,
    InputStyled,
    TextContentStyled,
} = styles;

const Upload: React.FC<IUploadProps> = ({ onChange, theme = 'withIcon' }) => {
    const [fileSelected, setFileSelected] = useState<Blob | undefined | null>(
        null,
    );
    const inputFile = useRef<HTMLInputElement | null>(null);

    const onClickHandler = () => {
        inputFile.current && inputFile.current.click();
    };

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files && event.target.files[0];
        setFileSelected(file);
        onChange && onChange(file);
    };

    const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFileSelected(file);
    };

    return (
        <DivStyled
            data-testid="test-upload"
            isFileSelected={Boolean(fileSelected)}
            onClick={onClickHandler}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDropHandler}
        >
            {fileSelected === null && (
                <>
                    <InputStyled
                        data-testid="test-upload-input"
                        id="file"
                        onChange={onChangeFile}
                        ref={inputFile}
                        type="file"
                    />
                    {theme === 'textOnly' && (
                        <>
                            <Typography variant="h4" weight="400">
                                Drag &amp; Drop File <br /> or
                            </Typography>
                            <Typography
                                color={color.blue}
                                variant="body16"
                                weight="500"
                            >
                                Browse Files
                            </Typography>
                        </>
                    )}
                    {theme === 'withIcon' && (
                        <>
                            <Image
                                data-testid="test-upload-icon"
                                fill={color.blueSky}
                                fontSize={48}
                            />
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
                </>
            )}
            {fileSelected && (
                <>
                    <ImageStyled
                        alt="image"
                        src={URL.createObjectURL(fileSelected)}
                    />
                    <IconDivStyled onClick={() => setFileSelected(null)}>
                        <Bin
                            data-testid="test-upload-icon"
                            fill={color.blue}
                            fontSize={24}
                        />
                    </IconDivStyled>
                </>
            )}
        </DivStyled>
    );
    ``;
};

export default Upload;
