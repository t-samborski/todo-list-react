import { selectTaskEmpty, selectTasks, selectHideDoneTasks, toggleHide, setAllTask } from "../taskSlice";
import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDoneTasks);
    const taskEmpty = useSelector(selectTaskEmpty);
    const dispatch = useDispatch();
    return (
        <Container>
            {!taskEmpty && (
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