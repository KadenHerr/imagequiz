import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <br/>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default NavigationBar;