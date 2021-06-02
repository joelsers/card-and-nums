const BASE_URL = "http://numbersapi.com/"
const num = 5

async function getFact() {
    const response = await $.getJSON(`${BASE_URL}${num}?json`)

    console.log(response)
}

let nums = [3, 89, 6]

async function getFacts() {
    const response = await $.getJSON(`${BASE_URL}${nums}?json`)
    let facts = Object.entries(response).forEach(([key, value]) => {
        let fact = $(`<p>${value}</p>`)
        $("body").append(fact)

    })

    console.log(facts)
}
getFacts()

async function getFactsForSameNum() {

    const response1 = await $.getJSON(`${BASE_URL}${num}?json`)

    const response2 = await $.getJSON(`${BASE_URL}${num}?json`)
    const response3 = await $.getJSON(`${BASE_URL}${num}?json`)
    const response4 = await $.getJSON(`${BASE_URL}${num}?json`)

    let responses = {
        1: response1.text,
        2: response2.text,
        3: response3.text,
        4: response4.text
    }
    let facts = Object.entries(responses).forEach(([key, value]) => {
        let fact = $(`<p>${value}</p>`)
        $("body").append(fact)
    })
    console.log(responses)
    console.log(facts)

}
getFactsForSameNum()




