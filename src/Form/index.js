import { useState, useRef } from "react";
import { FormList, InputTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
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