import React from 'react';
import { useMoralisFile } from 'react-moralis';
import { IPFSInputprops, defaultProps } from './types';
import { Upload } from '../Upload';

const IPFSInput: React.FC<IPFSInputprops> = props => {
    const { saveFile } = useMoralisFile();

    return (
        <>
            <Upload
                theme={props.Theme}
                onChange={e => {
                    saveFile(String(props.fileName), e as File, {
                        onSuccess(result) {
                            props.onFinish?.(result);
                        },
                        saveIPFS: props.saveToIPFS,
                        type: props.Type,
                    });
                }}
            />
        </>
    );
};

IPFSInput.defaultProps = defaultProps;

export default IPFSInput;
