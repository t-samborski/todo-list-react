import { takeEvery, call, put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./taskSlice";

function* fetchExampleTasksHendler() {
    try {
        const exampleTask = yield call(getExampleTasks);
        yield put(setTasks(exampleTask))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
}

export function* watchFetchExampleTasks() {
    console.log("Saga jest podłączona")
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
}