import { selectTasks, toggleHide, setAllTask } from "../taskSlice";
import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()
    return (
        <Container>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHide())}> {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                    <Button onClick={() => dispatch(setAllTask())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie</Button>
                </>
            )}
        </Container>
    );
}

export default Buttons;