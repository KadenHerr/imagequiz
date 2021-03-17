import flowers from '../flowers';
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Home</h2>
            {createFlowers()}
        </div>
    );
}

function createFlowers() {
    let images = [];
    let i = 0;
    for (let flw in flowers) {
        images.push(<Link className='link' to="/login"><Figure>
            <Figure.Image width={171} height={180}
                alt={flowers[flw].name}
                src={flowers[flw].picture} />
            <Figure.Caption>{flowers[flw].name}</Figure.Caption>
        </Figure></Link>)
        i++;
    }
    return images;
}

export default Home;