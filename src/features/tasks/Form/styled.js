import styled from "styled-components";

export const FormList = styled.form`
    display: grid;
    grid-template-columns: 1fr 200px;
    padding: 10px;
    margin: 2px;
    background-color: white;

@media (max-width: 767px) {
    grid-template-columns: 1fr;
    }
`;
export const InputTask = styled.input`
    padding: 5px;
    margin: 5px;
`;
export const Button = styled.button`
    transition: 1s;
    padding: 5px;
    margin: 5px;
    border: none;
    background-color: teal;
    color: white;

&:hover {
    background-color: rgb(4, 171, 171);
    transform:scale(1.05);
    }
`;