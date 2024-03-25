import { Container, List } from "./styled";
const Section = ({ title, body, extraHeaderContent, sampleTasks }) => (
    <Container>
        <List>
            <h2>{title}</h2>
            {sampleTasks}
            {extraHeaderContent}
        </List>
        {body}
    </Container>
);
export default Section;