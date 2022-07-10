import React from 'react';
import { useMoralisFile } from 'react-moralis';
import { IpfsInputprops } from './types';
import { Upload } from '../Upload';

const IpfsInput: React.FC<IpfsInputprops> = ({
    Theme = 'textOnly',

    ...props
}) => {
    const { saveFile } = useMoralisFile();

    // useEffect(() => {
    //     console.log(moralisFile);
    // }, [moralisFile]);

    return (
        <>
            <Upload
                theme={Theme}
                onChange={e => {
                    saveFile(String(props.FileName), e as File, {
                        onSuccess(result) {
                            props.OnFinish(result);
                        },
                        saveIPFS: props.SaveToIpfs,
                        type: props.Type,
                    });
                }}
            />
        </>
    );
};

export default IpfsInput;
