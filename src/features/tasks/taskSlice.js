import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
            
        },
        toggleHide: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks.splice(index, 1);
        },
        setAllTask: ({tasks}) => {
           tasks.map(task => task.done = true)
        }

    },
});

export const { addTask, toggleHide, toggleTaskDone, removeTask, setAllTask } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;