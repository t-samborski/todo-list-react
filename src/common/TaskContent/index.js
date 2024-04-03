import { Header, Content, Section } from "./styled";
export const TaskContent = ({ title, body }) => {
    return (
        <>
            <Header>Szczegóły zadania</Header>
            <Content><strong>Treść zadania:</strong> {title}</Content>
            <Section>
               {body}
            </Section>
        </>
    )
}