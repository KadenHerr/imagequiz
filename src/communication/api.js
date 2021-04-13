
let apiHost = "https://imagequiz-serverside.herokuapp.com";

let getFlowers = () => {
    return fetch(apiHost + '/flowers')
    .then(response => response.json());
};


let api = {
    getFlowers: getFlowers
};

export default api;