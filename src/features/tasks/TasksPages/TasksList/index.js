import { selectHideDoneTasks, toggleTaskDone, removeTask, selectTaskByQuery } from "../../taskSlice";
import { List, Button, Content, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { StyledNavLink } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParameter from "../searchQueryParameter";

const TasksList = () => {
    const location = useLocation();
    const serchParams = new URLSearchParams(location.search);
    const query = serchParams.get(searchQueryParameter);
    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDoneTasks);
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
                        $doneContent={task.done}>
                        <StyledNavLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </StyledNavLink>
                    </Content>
                    <Button
                        $primary
                        onClick={() => dispatch(removeTask(task.id))}>🗑</Button>
                </List>
            ))}
        </Container>
    );
}
export default TasksList;