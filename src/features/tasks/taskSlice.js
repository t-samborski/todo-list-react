import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        status: "finish"
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
            tasks.map(task => task.done = true)
        },
        fetchExampleTasks: (state) => {
            state.status = "loading"
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
export const statusTasks = state => selectTasksState(state).status === "finish";
export default taskSlice.reducer;