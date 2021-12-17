// Part 1: Number Facts
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.

// let url = "http://numbersapi.com/12?json"
// let firstPromise = axios.get(url);
// console.log("Request has been sent")
// firstPromise.then(res => console.log(res.data))
// firstPromise.catch(err => console.log("Rejected", err))
// console.log("Last line for this request")


// let res = axios.get("http://numbersapi.com/12/trivia?json")
//     .then((res) => {
//         console.log("Success", res.data)
//     })
//     .catch((err) => {
//         console.log("Error", err)
//     })

// console.log(res);


let url = `http://numbersapi.com/12?json`
async function favNum() {
    let res = await axios.get(url);
    console.log(res.data);
}
favNum();

// Part 1.2
// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.


// let favNums = [7, 12, 17, 18]
// let url = "http://numbersapi.com/random/trivia"
// async function multiNums() {
//     let res = await axios.get(url);
//     console.log(res.data);
// }

// multiNums();

/////////////////////////////////////////////////////

let randoNums = [];

for (let i = 1; i < 5; i++) {

    randoNums.push(
        axios.get(`http://numbersapi.com/random/${i}/trivia?json`)
    );
}


Promise.all(randoNums)
    .then(data => console.log("Success", data))
    .catch(err => console.log("Oh no!", err));





// Part 1.3
// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
// (Note: You’ll need to make multiple requests for this.)

// let baseURL = "http://numbersapi.com/12/trivia?json";
// axios.get(`${baseURL}`)
//     .then(res => {
//         console.log(`Favorite Number fact 1: ${res.data}`);
//         return axios.get(`${baseURL}/trivia`);
//     })
//     .then(res => {
//         console.log(`Favorite number fact 2: ${res.data}`);
//         return axios.get(`${baseURL}/trivia`);
//     })
//     .then(res => {
//         console.log(`Favorite number fact 3: ${res.data}`);
//     })
//     .catch(err => {
//         console.log(`Oh no, ${err}`);
//     });

// Part 2: Deck of Cards
// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.Once you have the card, console.log the value and the suit(e.g.“5 of spades”, “queen of diamonds”).

let baseURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
axios.get(`${baseURL}`)
    .then(res => {
        console.log(res);
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data}/draw/?count=2`)
    })