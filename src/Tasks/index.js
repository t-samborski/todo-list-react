import { List, Button, Content } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <div className="container__row--list">
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
    </div>
);
export default Tasks;