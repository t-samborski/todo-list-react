import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector } from "react-redux"
import { getTaskById } from "../taskSlice"
import { TaskContent } from "../../../common/TaskContent"

const TaskPages = () => {

    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id));

    return (
        <TaskContent title={task ? task.content : "Nie odnaleziona...😬"}
            body={!!task && (<>
                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </>)
            } />
    )
}

export default TaskPages;

