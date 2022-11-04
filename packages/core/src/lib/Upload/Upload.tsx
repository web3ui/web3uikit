import { Typography } from '../Typography';
import { IUploadProps } from './types';
import { color } from '@web3uikit/styles';
import React, { useRef, useState } from 'react';
import styles from './Upload.styles';
import { Bin, Image, File } from '@web3uikit/icons';

const {
    DivStyled,
    IconDivStyled,
    ImageStyled,
    InputStyled,
    TextContentStyled,
} = styles;

const Upload: React.FC<IUploadProps> = ({
    onChange,
    theme = 'withIcon',
    acceptedFiles,
    descriptionText = 'Recommendation: minimum of 350px by 350px',
    style
}) => {
    const [fileSelected, setFileSelected] = useState<Blob | undefined | null>(
        null,
    );
    const [fileName, setFileName] = useState<string | null>();
    const inputFile = useRef<HTMLInputElement | null>(null);

    const onClickHandler = () => {
        inputFile.current && inputFile.current.click();
    };

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files && event.target.files[0];
        setFileName(file?.name);
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
            style={style}
        >
            {fileSelected === null && (
                <>
                    <InputStyled
                        data-testid="test-upload-input"
                        id="file"
                        onChange={onChangeFile}
                        ref={inputFile}
                        type="file"
                        accept={acceptedFiles}
                    />
                    {theme === 'textOnly' && (
                        <>
                            <Typography variant="h4" weight="400">
                                Drag &amp; Drop File <br /> or
                            </Typography>
                            <Typography
                                color={color.navy40}
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
                                fill={color.navy30}
                                fontSize={48}
                            />
                            <TextContentStyled>
                                <Typography
                                    color={color.navy40}
                                    variant="body16"
                                >
                                    Click or Drag File to Upload
                                </Typography>
                                <Typography variant="caption12" weight="400">
                                    {descriptionText}
                                </Typography>
                            </TextContentStyled>
                        </>
                    )}
                </>
            )}
            {fileSelected && (
                <>
                    {fileSelected.type.split("/")[0] === "image" ? (
                        <ImageStyled
                            alt="image"
                            src={URL.createObjectURL(fileSelected)}
                        />
                    ):(
                        <File
                            data-testid="test-file-icon"
                            fill={color.navy30}
                            fontSize={88}
                        />
                    )}
                    <Typography variant='caption14'>{fileName}</Typography>
                    <IconDivStyled onClick={() => setFileSelected(null)}>
                        <Bin
                            data-testid="test-upload-icon"
                            fill={color.navy40}
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
