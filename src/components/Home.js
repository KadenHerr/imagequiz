import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import api from '../communication/api';


function Home(props) {

    const [flowers, setFlowers] = useState(null);

    let onImageClick = (event) => {
        props.onQuizClicked(event.target.id);
    }

    
    // Get the flowers array from the api
    useEffect(() => {
        if(flowers === null) {
            api.getFlowers()
            .then(x => setFlowers(x))
            .catch(e => console.log(e));
        }
        console.log("useEffect ran");
    });
    
    


    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Home</h2>
             {createFlowers()}
        </div>
    );


    function createFlowers() {
        let images = [];
        let i = 0;
        for (let flw in flowers) {
            images.push(<Link id={i} onClick={onImageClick} className='link' to="/quiz">
                <Figure id={i}>
                    <Figure.Image id={i} width={171} height={180}
                        alt={flowers[flw].name}
                        src={flowers[flw].picture} />
                    <Figure.Caption id={i}>{flowers[flw].name}</Figure.Caption>
                </Figure>
            </Link>)
            i++;
        }
        return images;
    }

}



export default Home;