import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onLoginSubmitted = () => {
        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        props.onLoggedIn(email);
        history.push('/');
    }

    let onEmailChanged = (event) => {
        setEmail(event.target.value);
    }

    let onPasswordChanged = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Form onSubmit={onLoginSubmitted}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={onEmailChanged} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else (or will we?).
        </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={onPasswordChanged} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
      </Button>
        </Form>



    );
}