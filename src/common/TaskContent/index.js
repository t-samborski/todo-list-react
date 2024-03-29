import { Header, Content, Section } from "./styled"
export const TaskContent = ({ title, body }) => (
    <>
        <Header>Szczegóły zadania</Header>
        <Content><strong>Treść zadania:</strong> {title}</Content>
        <Section>
           {body}
        </Section>
    </>
)