import "./style.css";
const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <div className="container__row--list">
        {tasks.map(task => (
            <li 
            className ={`container__row--grid${hideDone && task.done ? " task__hiden" : ""}`} 
            key={task.id}>
            <button onClick={() =>toggleTaskDone(task.id)} className="toggle__button">{task.done ? "✔" : ""}</button>
            <div className={`task__list ${task.done ? "task__list--done" : ""}`}>{task.content}</div>
            <button onClick={() => removeTask(task.id)} className="delete__button">🗑</button>
            </li>
        ))}
    </div>
);
export default Tasks;