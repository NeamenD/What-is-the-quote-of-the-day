// in this project every time a user rans a project they get a new randomized output
// const generate_random = (num)=>{
//     return Math.floor(Math.random(num) *2)

// }
// string_arr = []
// console.log(generate_random(num))

import myArray from './data_set.js';
function Get_random_Array(myArray){
    const randomindex = Math.floor(Math.random() * myArray.length)
    return myArray[randomindex];

}

const styledButton = document.getElementById("styledButton");
const cardText = document.getElementById("cardText")
const authorName = document.getElementById("authorName")

styledButton.addEventListener('click', ()=>{
    const randomQuote_author = Get_random_Array(myArray)
    cardText.textContent = `" ${randomQuote_author.quote} "`
    authorName.textContent = `By - ${randomQuote_author.author}`

})


// console.log(randomQuote_author.quote, randomQuote_author.author)