import AutorPages from "./features/AutorPages";
import TasksPages from "./features/tasks/TasksPages";
import TaskPages from "./features/tasks/TaskPage";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StyledNavLink, Navigation } from "./styled";


const App = () => (
    <HashRouter>
        <Navigation>
            <StyledNavLink to="/zadania">Lista zadań</StyledNavLink>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </Navigation>
        <Switch>
        <Route path="/zadania/:id">
                <TaskPages />
            </Route>
            <Route path="/autor">
                <AutorPages />
            </Route>
            <Route path="/zadania">
                <TasksPages />
            </Route>
            <Route path="/">
                <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </HashRouter>
)

export default App;