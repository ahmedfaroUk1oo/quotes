var displayQ = document.getElementById("quote");
var quotes = [
    {
        quote : `“Be yourself; everyone else is already taken.”`,
        author : `― Oscar Wilde`
    },
    {
        quote :`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author:`― Marilyn Monroe`
    },
    {
        quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author:`― Albert Einstein`
    },
    {
        quote:`“You only live once, but if you do it right, once is enough.”`,
        author:`― Mae West`
    },
    {
        quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        author:`― Bernard M. Baruch`
    },
    {
        quote:`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        author:`― Mahatma Gandhi`
    },
    {
        quote:`“None of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have faith.”`,
        author:`― Paulo Coelho`
    }
];

var arr = [];

function displayQuote(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var spliced = quotes.splice(randomQuote,1)[0];
    arr.push(spliced);
    if(quotes.length==0){
        quotes = arr;
        arr=[];
    }
    return spliced ;
}


function showQuote () {
    var  apllyQ= displayQuote();
    displayQ.innerHTML = `${apllyQ.quote} <br><span class ="fs-3 fw-medium py-2">${apllyQ.author}</span>`;

}

