import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        hideDone: false,
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
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});
const selectTasksState = state => state.tasks;

export const { addTask, toggleHide, toggleTaskDone, removeTask, setAllTask, fetchExampleTasks, setTasks } = taskSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectTaskEmpty = state => selectTasks(state).length === 0;
export const selectHideDoneTasks = state => selectTasksState(state).hideDone;
export default taskSlice.reducer;