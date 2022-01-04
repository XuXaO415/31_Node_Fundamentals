// Part 1: Number Facts
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API.


// let url = "http://numbersapi.com/12?json"
// let firstPromise = axios.get(url);
// console.log("Request has been sent")
// firstPromise.then(res => console.log(res.data))
// firstPromise.catch(err => console.log("Rejected", err))
// console.log("Last line for this request")

// let url = ("https://swapi.dev/api/planets/1/?json")
// let ourFirstPromise = axios.get(url);
// ourFirstPromise.then(data => console.log(data));
// ourFirstPromise.catch(err => console.log("Rejected!", err));



// axios.defaults.baseURL = "http://numbersapi.com";
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// favNum = 12
// async function favNums() {
//     const config = {
//         'X-Requested-With': 'XMLHttpRequest',
//         'withCredentials': 'false',


//     };
//     // const proxy = {
//     //     protocol: 'http',
//     // }

//     axios.get("http://numbersapi.com/12")

//     .then(res => {
//             console.log("Success", res);
//         })
//         .catch(err => {
//             console.log("Error", err);
//         })
// }


axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('http://numbersapi.com/12/?json')}`)
    .then((response) => console.log('Success', response))
    .catch((error) => console.log('Error', error))




// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// let res = axios.get('http://numbersapi.com/12'

//     )
//     .then(res => {

//         console.log("Success", res)
//     })
//     .catch(err => {
//         console.log("Error", err)
//     })

// fetch('http://numbersapi.com/12/allow-cors')
//     .then(res => {
//         if (res.ok) {
//             console.log('Success, yay!')
//         } else {
//             console.log('Error')
//         }
//         res.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log('Call didn\'t work'))




// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://numbersapi.com/12/trivia')}`)
//     .then(res => {
//         if (res.ok) return res.json()
//     })
//     .then(data => console.log(data.contents))


// let url = "http://numbersapi.com/12?json"
// async function favNum() {
//     let res = await axios.get(url);
//     console.log(res.data);
// }




// Part 1.2
// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.



// async

// function multiNums() {
//     let url = 'http://numbersapi.com/12,17,18,6/trivia?json';
//     let res = await axios.get(url);
//     console.log(res.data);
//}


/////////////////////////////////////////////////////

// let multiNums = [];
// for (let i = 1; i < 5; i++) {
//     multiNums.push(
//         axios.get(`http://numbersapi.com/${i}/trivia?json`))
// }
// let listNums = document.querySelector("results");
// Promise.all(multiNums)
//     .then(numArr => {
//         for (res of numArr) {
//             let listNums = document.createElement("li");
//             listNums.innerText = res.data.text;
//             listNums.append(listNums);
//         }
//     })
//     .catch(err => console.log("Error", err))

// .then(data => console.log("Success", data))
//     .catch(err => console.log("Oh no!", err));

// fetch(`
//https: //api.allorigins.win/get?url=${encodeURIComponent('http://numbersapi.com/12/trivia')}`)
//     .then(response => {
//         if (response.ok) return response.json()
//         throw new Error('Network response was not ok.')
//     })
//     .then(data => console.log(data.contents));




// Part 1.3
// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
// (Note: You’ll need to make multiple requests for this.)

// let baseURL = "http://numbersapi.com/12,7,18,6/trivia?json";
// axios.get(`${baseURL}`)
//     .then(res => {
//         console.log(`Favorite Number fact 1: ${res.data}`);
//         return axios.get(`${baseURL}`);
//     })
//     .then(res => {
//         console.log(`Favorite number fact 2: ${res.data}`);
//         return axios.get(`${baseURL}`);
//     })
//     .then(res => {
//         console.log(`Favorite number fact 3: ${res.data}`);
//     })
//     .then(res => {
//         console.log(`Favorite number fact 4: ${res.data}`);
//     })
//     .catch(err => {
//         console.log(`Oh no there's an ${err}`);
//     });

// Part 2: Deck of Cards
// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.Once you have the card, console.log the value and the suit(e.g.“5 of spades”, “queen of diamonds”).

// let baseURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
// axios.get(`${baseURL}`)
//     .then(res => {
//         console.log(res.data);
//         return axios.get(`https://deckofcardsapi.com/api/deck/${res.data}/draw/?count=1`)
//     })



// function sayHi() {
//     returnPromise.resolve("HELLO!!")
// }

// async function oops() {
//     throw "BAD IDEA!"
// }

// sayHi().then((msg) => console.log(msg))

// oops().then

//     .then(msg => console.log(msg))
//     .catch(err => console.log("Inside Catch: ", err))


// const body = document.querySelector('body');
// const button = document.querySelector('.button');
// const num = document.createElement('h1');

// const favNum = () => {
//     fetch('http://numbersapi.com/12')
//         .then(response => {
//             return response.json();
//         })
//         .then(response => {

//             num.textContent = response;
//             body.appendChild(num);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

// button.addEventListener('click', function() {
//     favNum();
// })


// Notes
// async function sayHi() {
//     return "Hello :) "
//}

// function sayHi() {
//     return Promise.resolve("HELLO")
// }

// async function oops() {
//     // return "Oof, bad Idea!"
//     throw "Bad idea"
// }

// sayHi().then((msg) => console.log(msg))

// oops()
//     .then(msg => console.log("Inside Then:", msg))
//     .catch(err => console.log("Inside Catch: ", err))


// async function getStarWarsFilms() {
//     console.log("Starting");
//     const res = await axios.get('https://swapi.co/api/films/')
//     console.log("Ending");
//     console.log(res);
// }

// console.log("starting");
// axios.get("https://swapi.co/api/films")
//     .then(res => {
//         console.log("Ending");
//         console.log(res);
//     })

// const h1 = document.querySelector('h1');

// function changeColor(el, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// changeColor(h1, 'red')
//     .then(() => changeColor(h1, 'pink'))
//     .then(() => changeColor(h1, 'red'))
//     .then(() => changeColor(h1, 'orange'))
//     .then(() => changeColor(h1, 'indigo'))
//     .then(() => changeColor(h1, 'lavender'))
//     .then(() => changeColor(h1, 'purple'))
//     .then(() => changeColor(h1, 'gold'))
//     .then(() => changeColor(h1, 'blue'))
//     .then(() => changeColor(h1, 'turquoise'))

// async function rainbow(el) {
//     await changeColor(el, 'red')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'red')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'red')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'red')
//     await changeColor(el, 'blue')
// }

// rainbow(h1)




// const deck = {
//     async init() {
//         let res = await axios.get(
//             "https://deckofcardsapi.com/api/deck/new/")
//         this.deckId = res.data.deck_id;
//     },
//     async shuffle() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`)
//         console.log(res);
//     },
//     async drawCard() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
//         console.log(res);
//     }
// }

// class Pokemon {
//     constructor(id) {
//         this.id = id;
//         this.types = [];
//     }
//     async getInfo() {
//         let res = await axios.get(
//             `https://pokeapi.co/api/v2/pokemon/${this.id}`)
//         this.name = res.data.name;
//         for (let type of res.data.types) {
//             this.types.push(type.type.name)
//         }
//     }
// }

// Pokemon(56)

// async function favNum() {
//     try {
//         let url = `http://numbersapi.com/12?json`;
//         let res = await axios.get(url);
//         console.log(`${res.data.random}`);
//     } catch (e) {

//     }
// }