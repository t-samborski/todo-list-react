import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    margin: 2px;
    background-color: white;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;
export const Button = styled.button`
    color: teal;
    margin: 1px;
    padding: 1px;
    border: none;
    background: none;
    text-align: right;

    &:disabled {
    color: rgb(170, 170, 170);
}
`;