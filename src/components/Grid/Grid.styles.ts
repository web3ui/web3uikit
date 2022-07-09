// importing styled to make components and css to make themes
import styled from 'styled-components';
// importing centralized styles
import colors from '../../styles/colors';

// //////////////////
// Theme CSS
// CSS Props should be sorted alphabetically
// //////////////////
const DivStyled = styled.div`
    display: grid;
`;
const DivTestItem = styled.div`
    background-color: ${colors.greenLight};
`;
const CodeStyled = styled.code``;

export default {
    CodeStyled,
    DivStyled,
    DivTestItem,
};
