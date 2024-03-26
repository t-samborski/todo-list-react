import { delay, takeLatest, takeEvery, call, put, select } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setTasks } from "./taskSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
    try {
        yield delay(1000);
        const exampleTask = yield call(getExampleTasks);
        yield put(setTasks(exampleTask))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!")
    }
}
function* saveTasksInLocalStorageHendler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHendler);
    yield takeEvery("*", saveTasksInLocalStorageHendler);
}