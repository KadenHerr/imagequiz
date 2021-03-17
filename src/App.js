import { HashRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import { useHistory } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import { useState } from 'react';


function App() {
    const history = useHistory();
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [quizNum, setQuizNum] = useState(0);

    let onLoggedIn = (email) => {
        localStorage.setItem('username', email);
        setUsername(email);
    }

    let onQuizClicked = (quizID) => {
        setQuizNum(quizID);
        console.log(quizID);
    }
    return (
        <HashRouter>
            <Container fluid>
                <NavigationBar username={username} />
                <Switch>
                    <Route exact path="/">
                        <Home onQuizClicked={onQuizClicked}/>
                    </Route>
                    <Route path="/login" >
                        <Login onLoggedIn={onLoggedIn} />
                    </Route>
                    <Route path="/quiz" >
                        
                    </Route>
                </Switch>
            </Container>
        </HashRouter>
    );
}

export default App;
