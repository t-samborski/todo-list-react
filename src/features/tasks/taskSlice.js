import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        status: "finish",
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHide: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        setAllTask: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.status = "loading";

        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.status = "finish"
        },
    },
});
const selectTasksState = state => state.tasks;

export const { addTask, toggleHide, toggleTaskDone, removeTask, setAllTask, fetchExampleTasks, setTasks } = taskSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectTaskEmpty = state => selectTasks(state).length === 0;
export const selectHideDoneTasks = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const statusTasks = state => selectTasksState(state).status === "finish";
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}
export default taskSlice.reducer;