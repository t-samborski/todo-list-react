import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons"
import Button from "./Button";
import Section from "../../common/Section"
import Header from "../../common/Header"
import Container from "../../common/Container"

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sampleTasks={<Button/>} body={<Form />} />
      <Section title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons/>} />
    </Container>
  );
}
export default Tasks;

