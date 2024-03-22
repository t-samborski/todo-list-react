import { selectTasks, toggleTaskDone, removeTask } from "../taskSlice";
import { List, Button, Content, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {

    const { tasks, hideDone } = useSelector(selectTasks)
    const dispatch = useDispatch();

    return (
        <Container>
            {tasks.map(task => (
                <List
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}>{task.done ? "✔" : ""}
                    </Button>
                    <Content
                        doneContent={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        deleteButton
                        onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
                </List>
            ))}
        </Container>
    );
}
export default TasksList;