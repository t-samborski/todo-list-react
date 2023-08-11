import "./style.css";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasks }) =>
(
    <div className="container__row">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className= "bindEventsButtons"> {hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                <button onClick={setAllTasks}
                    className="bindEventsButtons"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie</button>
            </>
        )}
    </div>
);






export default Buttons;