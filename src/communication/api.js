
let apiHost = "https://imagequiz-serverside.herokuapp.com";

let getFlowers = () => {
    return fetch(apiHost + '/flowers')
    .then(response => response.json());
};

let getQuizzes = () => {
    return fetch(apiHost + '/quizzes')
    .then(response => response.json());
};


let api = {
    getFlowers: getFlowers,
    getQuizzes: getQuizzes
};

export default api;