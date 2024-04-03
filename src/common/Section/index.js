import { Container, List, Title } from "./styled";
const Section = ({ title, body, extraHeaderContent, sampleTasks }) => (
    <Container>
        <List>
            <Title>{title}</Title>
            {sampleTasks}
            {extraHeaderContent}
        </List>
        {body}
    </Container>
);
export default Section;