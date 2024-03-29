import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
color: white;
text-decoration: none;
background-color: teal;
padding: 10px;
margin: 2px;
border-radius: 0px 0px 10px 10px;
text-align: center;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
&.active {
    text-shadow: 3px 3px 3px black;
}
`

export const Navigation = styled.nav`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
`

export const Tab = styled.div`
text-decoration: none;
background-color: teal;
padding: 10px;
text-align: center;
color: white;
text-decoration: none;
margin: 1px;
`