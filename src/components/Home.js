
import flowers from '../flowers';
import quizzes from '../data.js';
import { useHistory } from 'react-router-dom';
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
/*
function goToQuiz(event) {
    alert(event.target);
}
*/
function createFlowers() {
    let images = [];
    let i = 0;
    for (let flw in flowers) {
        images.push(<Figure>
            <Figure.Image width={171} height={180}
                alt={flowers[flw].name}
                src={flowers[flw].picture} />
            <Figure.Caption>{flowers[flw].name}</Figure.Caption>
        </Figure>)
        i++;
    }
    return images;
}

export default Home;