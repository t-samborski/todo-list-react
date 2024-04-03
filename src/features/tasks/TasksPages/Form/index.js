import { useState, useRef } from "react";
import { Wrapper, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedNewTaskContent = newTaskContent.trim()
        if (trimedNewTaskContent !== "") {
            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }))
            setNewTaskContent("");
            inputRef.current.focus();
        }
    };
    return (
        <Wrapper onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>Dodaj zadanie</Button>
        </Wrapper>
    )
};
export default Form;