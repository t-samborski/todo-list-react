import { useEffect, useState } from "react";

export const useTasks = () => {
    const localStorageTasks = localStorage.getItem("tasks");

    const [tasks, setTasks] = useState(
      localStorageTasks ? JSON.parse(localStorageTasks) : []
    );
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
   
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    }
    const toggleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      }));
    }
    const setAllTasks = () => {
      setTasks(tasks => tasks.map(task =>
        ({ ...task, done: true, })));
    };
    const addNewTask = (content) => {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        }
      ])
      localStorage.removeItem("tasks", JSON.stringify(tasks));
    };
    return {
        tasks,
        removeTask,
        setAllTasks,
        toggleTaskDone,
        addNewTask,
    };
};


