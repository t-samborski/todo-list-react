import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks, statusTasks } from "../taskSlice";

const SampleTasks = () => {
    const dispatch = useDispatch();
    const status = useSelector(statusTasks);
    return (
        <Button
            disabled={!status}
            onClick={() => dispatch(fetchExampleTasks())}>
            {status ? "Pobierz przykładowe zadania" : "Ładowanie..."}
        </Button>
    )
}
export default SampleTasks