import { useDispatch } from "react-redux";
import { SampleTasks } from "./style";
import { fetchExampleTasks } from "../taskSlice";

const Button = () => {

    const dispatch = useDispatch();

    return (
        <SampleTasks onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadanie</SampleTasks>
    )
}
export default Button