import React, { useEffect } from 'react';
import { useMoralisFile } from 'react-moralis';
import { IpfsInputprops } from './types';
import { Upload } from '../Upload';

const IpfsInput: React.FC<IpfsInputprops> = ({
    Theme = 'textOnly',
    ...props
}) => {
    const { moralisFile, saveFile } = useMoralisFile();

    useEffect(() => {
        console.log(moralisFile);
    }, [moralisFile]);

    return (
        <>
            <Upload
                theme={Theme}
                onChange={(e) => {
                    console.log(e);
                    saveFile(String(props.FileName), e, {
                        saveIPFS: props.SaveToIpfs,
                        type: props.Type,
                    });
                }}
            />
        </>
    );
};

export default IpfsInput;
