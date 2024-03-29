import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons"
import Section from "../../../common/Section"
import Header from "../../../common/Header"
import Container from "../../../common/Container"
import SampleTasks from "./SampleTasks";

function TasksPages() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" sampleTasks={<SampleTasks/>} body={<Form />} />
      <Section title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons/>} />
    </Container>
  );
}
export default TasksPages;

