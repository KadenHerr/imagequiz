import { Link } from "react-router-dom";
import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function NavigationBar(props) {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">

            <Nav.Link>
                <Link className='link' to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
                {
                    props.username === '' ?
                    <Link className='link' to="/login">Login</Link>
                    :
                    <Link className='link' to="/logout">{props.username}, Logout</Link>
                }
            </Nav.Link>

        </Navbar>
    );
}

export default NavigationBar;