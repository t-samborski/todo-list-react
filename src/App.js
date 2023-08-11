import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Container from "./Container"
import { useState, useEffect } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);

  const localStorageTasks = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    localStorageTasks ? JSON.parse(localStorageTasks) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
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

  return (



    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <Section title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllTasks={setAllTasks} />} />
    </Container>

  );
}

export default App;

