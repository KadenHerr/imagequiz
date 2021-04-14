import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizSlide from './QuizSlide';
import { useState } from 'react';
import api from '../communication/api';



export default function Quiz(props) {
    
    const [score, setScore] = useState(0);
    const [answerCount, setAnswerCount] = useState(1);

    let onRestart = (event) => {
        window.location.reload();
    }

    let onAnswerGiven = (answer) => {
        setAnswerCount(answerCount + 1);
        // Because setScore only changes the score after the function has
        // finished, use this variable to store an extra point if the last
        // question was answered right so that the correct final score can
        // be displayed.
        let lastPoint = 0;
        // If the answer is correct, add 1 to the score.
        if (answer) {
            setScore(score + 1);
            lastPoint = 1;
        }
        // When all of the questions have been answered, display the results.
        if (answerCount >= 6) {
            alert("Total score is: "+ (score + lastPoint));
            let retval = {score: score+lastPoint};
            api.addScore(retval)
            .catch(e => console.log(e));
        }
    }

    return (
        <Col>
            <Row>
                <Button onClick={onRestart}>Restart Quiz</Button>
            </Row>
            <Row>
                <h2>Current Score: {score}/6</h2>
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={0} />
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={1} />
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={2} />
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={3} />
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={4} />
            </Row>
            <Row>
                <QuizSlide onAnswerGiven={onAnswerGiven} quizNum={props.quizNum} questionNum={5} />
            </Row>
        </Col>
    );
}