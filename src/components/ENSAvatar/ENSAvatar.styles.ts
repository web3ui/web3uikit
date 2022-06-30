import styled from "styled-components";
import resetCSS from '../../styles/reset';


const NonAvatarDiv = styled.div`
    ${resetCSS}
    border-radius: 50%;
    display: inline-flex;
    overflow: hidden;
`;




const AvatarImg = styled.img`
    height : 100px;
    width : 100px;
    border-radius : 50%;

`


export const ENSAvatarStyles = {
    NonAvatarDiv,
    AvatarImg
}

