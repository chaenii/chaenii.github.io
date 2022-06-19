const quotes = [
    {quote:"When the student is ready, the teacher will appear - ",
     author:"Buddah"},
     {quote:"When an old man dies, a library burns to the ground - ",
     author:"American proverb"},
     {quote:"I the end, it's not the years in your life that count, it's the life in your years - ",
     author:"Abraham Lincoin"},
     {quote:"You get in life, what you have the courage to ask for - ",
     author:"Oprah Winfrey"},
     {quote:"You can never plan the future by the past - ",
     author:"Edmund Burke"},
     {quote:"We make a living by what we get, but we make a life by what we give - ",
     author:"Winston Churchil"},
     {quote:"Be happy for this moment. this moment is your life",
     author:"Omar Khayyam"},
     {quote:"If there is no struggle, there is no progress - ",
     author:"Fredrick Douglass"},
     {quote:"Iam not in competition with anyone but myself, my goal is to improve myself continuously - ",
     author:"Bill Gates"},
     {quote:"You only live once, But if you do it right, once is enough - ",
     author:"Mae West"},
     {quote:"Be like a tree and let the dead leaves drop - ",
     author:"Fumi"}
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
