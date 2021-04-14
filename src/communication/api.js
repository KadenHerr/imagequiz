
let apiHost = "https://imagequiz-serverside.herokuapp.com";

let getFlowers = () => {
    return fetch(apiHost + '/flowers')
    .then(response => response.json());
};

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then(response => response.json());
};

let addScore = (score) => {
    return fetch(apiHost + '/score', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
    });
}


let api = {
    getFlowers: getFlowers,
    getQuizzes: getQuizzes,
    addScore: addScore
};

export default api;