import { Typography } from '../Typography';
import { UploadProps } from './types';
import color from '../../styles/colors';
import Icon from '../Icon/Icon';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Upload.styles';

const {
    DivStyled,
    TextContentStyled,
    InputStyled,
    ImageStyled,
    ImageFrameStyled,
    IconDivStyled,
} = styles;

const Upload: React.FC<UploadProps> = ({ theme = 'withIcon', onChange }) => {
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
            onClick={onClickHandler}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDropHandler}
            isFileSelected={Boolean(fileSelected)}
        >
            {fileSelected === null && (
                <>
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
                            <Typography
                                variant="body16"
                                weight="500"
                                color={color.blue}
                            >
                                Browse Files
                            </Typography>
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
                </>
            )}
            {fileSelected && (
                <>
                    <ImageStyled
                        src={URL.createObjectURL(fileSelected)}
                        alt="image"
                    />
                    <IconDivStyled onClick={() => setFileSelected(null)}>
                        <Icon svg="bin" fill={color.blue} size={24} />
                    </IconDivStyled>
                </>
            )}
        </DivStyled>
    );
};

export default Upload;
