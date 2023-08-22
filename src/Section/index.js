import {Container, List} from "./styled";
const Section = ({title, body, extraHeaderContent}) => (
<Container>
<List>
    <h2>{title}</h2>
    {extraHeaderContent}
</List>
    {body}
</Container>
);
export default Section;