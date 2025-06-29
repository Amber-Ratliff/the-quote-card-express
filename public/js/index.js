'use strict'

const elements = {
    quote: document.getElementById('quote'),
    author: document.getElementById('author'),
};

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}

getRandomImage();

/* const quotes = [
    {
       quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
       author: 'Albert Einstein',
    },

    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." ,
        author: 'Bernard M. Baruch',
    },

    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: 'Mark Twain',
    },

    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: ' Martin Luther King Jr.',
    },

    {
        quote: "We accept the love we think we deserve.",
        author: 'Stephen Chbosky'
    },

    {
        quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author: 'Neil Gaiman',
    },

    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: 'Thomas A. Edison',
    },

    {
        quote: "Love is that condition in which the happiness of another person is essential to your own.",
        author: 'Robert A. Heinlein',
    },

    {
        quote: "You are calm and reposed, let your beauty unfold... You are the smell before rain.",
        author: 'Brand New',
    },

    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        author: 'Dolly Parton',
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000); */