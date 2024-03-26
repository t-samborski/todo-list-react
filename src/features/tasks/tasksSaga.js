import { delay, takeEvery, call, put } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./taskSlice";

function* fetchExampleTasksHendler() {
    try {
        console.log("Zaczynam pracę")
        yield delay(2000);
        const exampleTask = yield call(getExampleTasks);
        yield put(setTasks(exampleTask))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler);
}