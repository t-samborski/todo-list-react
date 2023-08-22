import {Container, Button} from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasks }) =>
(
<Container>
    {tasks.length > 0 && (
<>
<Button onClick={toggleHideDone}> {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
<Button onClick={setAllTasks}
    disabled={tasks.every(({ done }) => done)}>
    Ukończ wszystkie</Button>
</>
    )}
</Container>
);

export default Buttons;