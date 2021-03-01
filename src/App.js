import {HashRouter,Switch,Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <HashRouter>
      <Container fluid>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
