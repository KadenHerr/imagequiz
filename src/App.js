import { HashRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";
import { useState } from 'react';


function App() {

    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    let onLoggedIn = (email) => {
        localStorage.setItem('username', email);
        setUsername(email);
    }
    return (
        <HashRouter>
            <Container fluid>
                <NavigationBar username={username} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" >
                        <Login onLoggedIn={onLoggedIn} />
                    </Route>
                </Switch>
            </Container>
        </HashRouter>
    );
}

export default App;
