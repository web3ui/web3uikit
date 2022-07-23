import React from 'react';
import { useMoralisFile } from 'react-moralis';
import { IPFSInputProps } from './types';
import { Upload } from '@test_kit_4/core';

const IPFSInput: React.FC<IPFSInputProps> = ({
    type,
    fileName,
    onFinish,
    saveToIPFS = true,
    theme = 'textOnly',
    ...props
}) => {
    const { saveFile } = useMoralisFile();
    return (
        <Upload
            theme={theme}
            onChange={e => {
                saveFile(String(fileName), e as File, {
                    onSuccess(result) {
                        onFinish?.(result);
                    },
                    saveIPFS: saveToIPFS,
                    type: type,
                    onError(err) {
                        console.log(err);
                    },
                });
            }}
            {...props}
        />
    );
};

export default IPFSInput;
