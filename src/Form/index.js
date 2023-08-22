import { useState } from "react";
import { FormList, InputTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
    };
    return (
        <FormList onSubmit={onFormSubmit}>
            <InputTask
                value={newTaskContent}
                placeholder="Co jest do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>Dodaj zadanie</Button>

        </FormList>
    )
};
export default Form;