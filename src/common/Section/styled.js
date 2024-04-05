import styled from "styled-components";

export const Title = styled.h2`
margin: 12px;
`
export const Container = styled.section`
    padding: 5px;
`;
export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5px;
    margin: 2px;
    background-color: white;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;