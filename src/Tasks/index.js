import { List, Button, Content, Container } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
<Container>
    {tasks.map(task => (
<List
    key={task.id}
    hidden={task.done && hideDone}>
<Button
    onClick={() => toggleTaskDone(task.id)}>{task.done ? "✔" : ""}
</Button>
<Content
    doneContent={task.done}>
    {task.content}
</Content>
<Button
    deleteButton
    onClick={() => removeTask(task.id)}>🗑</Button>
</List>
    ))}
</Container>
);
export default Tasks;