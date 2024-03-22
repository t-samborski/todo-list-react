import { useState, useRef } from "react";
import { FormList, InputTask, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
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
        <FormList onSubmit={onFormSubmit}>
            <InputTask
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>Dodaj zadanie</Button>
        </FormList>
    )
};
export default Form;