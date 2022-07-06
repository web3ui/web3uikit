import React,{useEffect} from 'react';
import { useMoralisFile } from 'react-moralis';
import { IpfsInputStyles } from './IpfsInput.styles';
import { IpfsInputprops } from './types';


/**
 * An Input buton to upload files to either IPFS or moralis
 * @param {*} props
 * @returns <IpfsInput> JSX Element
 */

const { InputButton } = IpfsInputStyles;

const IpfsInput: React.FC<IpfsInputprops> = (props) => {
    const { moralisFile,saveFile,} = useMoralisFile();

    useEffect(() => {
    //   moralisFile?.getData().then((e) => console.log(e))
        
        console.log(moralisFile)
      
    }, [moralisFile])
    

    return (
        <>
            <InputButton type="file" name="ipfs" onChange={(e) => {
                console.log(e)
                saveFile("e.target.value",
                    e.target.files[0], { saveIPFS: props.SaveToIpfs })
            }} />
        </>
    );
};

export default IpfsInput;
