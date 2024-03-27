import { selectTaskEmpty, selectIsEveryTaskDone, selectHideDoneTasks, toggleHide, setAllTask } from "../taskSlice";
import { Container, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const hideDone = useSelector(selectHideDoneTasks);
    const taskEmpty = useSelector(selectTaskEmpty);
    const allTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();
    return (
        <Container>
            {!taskEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHide())}> {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
                    <Button onClick={() => dispatch(setAllTask())}
                        disabled={allTaskDone}
                        >
                        Ukończ wszystkie</Button>
                </>
            )}
        </Container>
    );
}

export default Buttons;