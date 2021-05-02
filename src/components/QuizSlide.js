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
        if (quizzes[props.quizNum][props.questionNum].choices[event.target.id] === quizzes[props.quizNum][props.questionNum].answer) {
            setAnswer("You answered " + quizzes[props.quizNum][props.questionNum].answer + " and got it right!");
            props.onAnswerGiven(true);
        } else {
            setAnswer("You got it wrong. Correct answer is: " + quizzes[props.quizNum][props.questionNum].answer);
            props.onAnswerGiven(false);
        }
    }

    useEffect(() => {
        if (quizzes === null) {
            api.getFlowers()
                .then(x => setQuizzes(generateQuizzes(x)))
                .catch(e => console.log(e));
        }
    });

    // Generate quiz questions
    function generateQuestions(flowers) {
        let questions = [];
        let choiceIndex = 0;
        for (let i = 0; i < flowers.length; i++) {
            choiceIndex = i;
            if (choiceIndex > (flowers.length - 4)) {
                choiceIndex = i - 2;
            }
            let question = {
                picture: flowers[i].picture,
                choices: [flowers[choiceIndex].name, flowers[choiceIndex + 1].name, flowers[choiceIndex + 2].name],
                answer: flowers[i].name
            };
            questions.push(question);
        }
        return questions;
    };

    // Generate quizzes
    function generateQuizzes(flowers) {
        let quizzes = [];
        let questionIndex = 0;
        let questions = generateQuestions(flowers);
        for (let i = 0; i < questions.length; i++) {
            questionIndex = i;
            if (questionIndex > (questions.length - 7)) {
                questionIndex = i - 5;
            }
            let quiz = [
                questions[questionIndex],
                questions[questionIndex + 1],
                questions[questionIndex + 2],
                questions[questionIndex + 3],
                questions[questionIndex + 4],
                questions[questionIndex + 5]
            ];
            quizzes.push(quiz);
        }
        return quizzes;
    };


    function createQuizSlide() {
        if (quizzes === null) {
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
                    <br />{answer}
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