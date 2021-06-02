const $drawButton = $('.draw_button')
const $shuffleButton = $('.shuffle_button')

const BASE_URL = 'https://deckofcardsapi.com/api/'

let deckId = ''

async function shuffleDeck(decks) {
    $('div').empty()
    response = await $.getJSON(`${BASE_URL}deck/new/shuffle/?deck_count=${decks}`)
    console.log(response)
    deckId = response.deck_id
    console.log(deckId)
}

// let deck_id = response.deck_id

async function getTwoCards(deckId) {
    response = await $.getJSON(`${BASE_URL}deck/${deckId}/draw/?count=1`)
    console.log(response.cards[0].value, response.cards[0].suit)
    response = await $.getJSON(`${BASE_URL}deck/${deckId}/draw/?count=1`)
    console.log(response.cards[0].value, response.cards[0].suit)
}

async function getOneCard(deckId) {
    response = await $.getJSON(`${BASE_URL}deck/${deckId}/draw/?count=1`)
    console.log(response.cards[0].value, response.cards[0].suit)
    let $card = $(`<h1>${response.cards[0].value} of ${response.cards[0].suit}</h1>`)
    await $('div').append($card)
}

$shuffleButton.on('click', function () {
    shuffleDeck(1)
})

$drawButton.on('click', function () {
    getOneCard(deckId)
})











