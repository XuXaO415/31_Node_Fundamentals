// async function numReq(num) {
//     let res = await axios.get(`http://numbersapi.com/${num}/trivia?json`);
//     console.log(res);
// }
// numReq(12);


// async function shuffCard() {
//     let res = await axios.get('https://deckofcardsapi.dev/api/deck/new/shuffle/?deck_count=1');
//     console.log(res);
// }



// const deck = {
//     async init() {
//         let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
//         this.deckID = res.data.deck_id;
//         console.log(res);
//     },
//     async shuffle() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/suffle`)
//     },
//     async drawCard() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
//         console.log(res);
//     }
// }


//1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.Once you have the card, console.log the value and the suit(e.g.“5 of spades”, “queen of diamonds”).
// async function shuffleCard() {
//     let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     let deckID = res.data.deck_id;
//     let singleCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
//     console.log(`${singleCard.data.cards[0].value} of ${singleCard.data.cards[0].suit}`);
// }
// shuffleCard();


//2. Make a request to the deck of cards API to request a single card from a newly shuffled deck.Once you have the card, make a request to the same API to get one more card from the same deck.

// async function reqTwoCards() {
//     let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     let deckID = res.data.deck_id;
//     let singleCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
//     let cardTwo = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
//     console.log(` Your card is: ${singleCard.data.cards[0].value} of ${singleCard.data.cards[0].suit}`);
// }

// reqTwoCards();

//3. Build an HTML page that lets you draw cards from a deck.When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will
// let you draw a card.Every time you click the button, display a new card, until there are no cards left in the deck.
//class async

let cardBtn = document.querySelector("#gimme-card");
let countCard = document.querySelector("#count-card");
let showPile = document.querySelector("#show-pile");


class Deck {
    constructor() {
        this.deckID;
        this.cardCount = 0;
        this.drawCard;
        this.showCard;
    }



    async newDeck() {
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        this.deckID = res.data.deck_id;
        this.cardCount = 0;
        this.showCard = 'img';
        countCard.innerText = `${this.cardCount}`;

    }
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
        this.drawCard = res.data.cardCount[0].image;
        this.showCard = drawCard;
        let cardPile = cardPile.CardCount++;
        showPile.innerText = `${cardPile.cardCount}`;
        let showPile = $showPile.append(
            $('<img>', {
                src: this.drawCard
            }))
    }
}

// let cardPile = cardPile.countCard++;
let cardDeck = new Deck()
cardBtn.addEventListener('click', function(e) {
    if (cardDeck.cardCount === 52) {
        return newDeck();
    }
})