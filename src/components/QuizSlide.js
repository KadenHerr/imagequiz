import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { useState, useEffect } from 'react';
import api from '../communication/api';


export default function QuizSlide(props) {
    const [answer, setAnswer] = useState("");
    const [btnState, setBtnState] = useState(false);
    const [quizzes, setQuizzes] = useState(null);

    let onAnswerGiven = (event) => {
        setBtnState(true);
        if(quizzes[props.quizNum][props.questionNum].choices[event.target.id] === quizzes[props.quizNum][props.questionNum].answer) {
            setAnswer("You answered "+ quizzes[props.quizNum][props.questionNum].answer+ " and got it right!");
            props.onAnswerGiven(true);
        } else {
            setAnswer("You got it wrong. Correct answer is: "+ quizzes[props.quizNum][props.questionNum].answer);
            props.onAnswerGiven(false);
        }
    }

    useEffect(() => {
        if(quizzes === null) {
            api.getQuizzes()
            .then(x => setQuizzes(x))
            .catch(e => console.log(e));
        }
    });


    function createQuizSlide() {
        if(quizzes === null) {
            return [];
        }

        return (
            <Figure>
                <Figure.Image width={171} height={180}
                    alt={quizzes[props.quizNum][props.questionNum].answer}
                    src={quizzes[props.quizNum][props.questionNum].picture} />
                <Figure.Caption>
                    <Button disabled={btnState} id={0} onClick={onAnswerGiven}>{quizzes[props.quizNum][props.questionNum].choices[0]}</Button>
                    <Button disabled={btnState} id={1} onClick={onAnswerGiven}>{quizzes[props.quizNum][props.questionNum].choices[1]}</Button>
                    <Button disabled={btnState} id={2} onClick={onAnswerGiven}>{quizzes[props.quizNum][props.questionNum].choices[2]}</Button>
                    <br/>{answer}                   
                </Figure.Caption>
            </Figure>
        );
    }

    return (
        <Row><Col>
            {createQuizSlide()}
        </Col></Row>
    );
}