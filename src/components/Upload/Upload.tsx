import { UploadProps } from "./types"
import React, { useRef } from "react"
import styled from "styled-components"
import resetCSS from "../../styles/reset"
import fonts from "../../styles/fonts"
import { Icon } from "../Icon"
import { iconTypes } from "../Icon/collection"

const UploadStyled = styled.div`
${resetCSS}
${fonts.text}
align-items: center;
border-radius: 13.039px;
border: 2px dashed #9ECCEA;
box-sizing: border-box;
display: flex;
flex-direction: column;
height: 30%;
justify-content: center;
padding: 40px;
width: 100%;

&:hover {
    cursor: pointer;
}
`

const TextStyled = styled.text`
${resetCSS}
${fonts.text}
color: #2E7DAF;
font-size: 16px;
`

const InfoStyled = styled.text`
${resetCSS}
${fonts.text}
color: #68738D;
font-size: 12px;
`

const Upload: React.FC<UploadProps> = ({
id=String(Date.now())
}: UploadProps) => {
    const file = useRef(null)
    return (
        <UploadStyled
        id={id}
        ref={file}
        >
            <Icon fill="#9ECCEA" svg={iconTypes.image} size={64}/>
            <TextStyled>Click or Drag File to Upload</TextStyled>
            <InfoStyled>Recommendation: minimum of 350px by 350px</InfoStyled>
        </UploadStyled>
    )
}

export default Upload;