import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: teal;
`

export const Container = styled.div`
    padding: 10px;
    margin: 2px;
    background-color: white;
`;

export const List = styled.li`
    display: grid;
    grid-template-columns: 40px 2fr 40px;
    margin: 5px;
 
    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Button = styled.button`
    margin: 0, 5px;
    padding: 10px;
    background-color: green;
    border: none;
    color: white;
    transition: 1s;
    ${({ $primary }) => $primary && css`
        background-color: red;
    `}
    &:hover {
        transform: scale(1.1);
}`;

export const Content = styled.div`
    padding: 10px;
    ${({ $doneContent }) => $doneContent && css`
        text-decoration: line-through;
    `}
`;
