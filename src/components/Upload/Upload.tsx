import { Typography } from '../Typography';
import { UploadProps } from './types';
import color from '../../styles/colors';
import Icon from '../Icon/Icon';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Upload.styles';

const {
    DivStyled,
    IconDivStyled,
    ImageStyled,
    InputStyled,
    TextContentStyled,
} = styles;

const Upload: React.FC<UploadProps> = ({ onChange, theme = 'withIcon' }) => {
    const [fileSelected, setFileSelected] = useState<Blob | null>(null);
    const inputFile = useRef<HTMLInputElement | null>(null);

    useEffect(() => onChange(fileSelected), [fileSelected]);

    const onClickHandler = () => {
        inputFile.current && inputFile.current.click();
    };

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files && event.target.files[0];
        setFileSelected(file);
    };

    const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFileSelected(file);
    };

    return (
        <DivStyled
            data-testid={'div-upload-test-id'}
            isFileSelected={Boolean(fileSelected)}
            onClick={onClickHandler}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDropHandler}
        >
            {fileSelected === null && (
                <>
                    <InputStyled
                        data-testid={'input-upload-test-id'}
                        id="file"
                        onChange={onChangeFile}
                        ref={inputFile}
                        type="file"
                    />
                    {theme === 'textOnly' && (
                        <>
                            <Typography variant="h4" weight="400">
                                Drag & Drop File <br /> or
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
                            <Icon
                                data-testid={'icon-upload-test-id'}
                                fill={color.blueSky}
                                size={48}
                                svg="image"
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
                        <Icon fill={color.blue} svg="bin" size={24} />
                    </IconDivStyled>
                </>
            )}
        </DivStyled>
    );
};

export default Upload;
