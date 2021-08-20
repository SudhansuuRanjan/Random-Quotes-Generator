const jokeContainer = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const url = "https://zenquotes.io/api/quotes";
const tweetButton=document.getElementsByClassName("twitter");

const getNewQuote = async () =>
{    
    author.classList.remove("fade");
    jokeContainer.classList.remove("fade");
    var url="https://type.fit/api/quotes";    
    const response=await fetch(url);
    const allQuotes = await response.json();
    const index = Math.floor(Math.random()*allQuotes.length);
    const quote=allQuotes[index].text;
    const auth=allQuotes[index].author;
    if(auth==null)
    {
        author = "Anonymous";
    }
    jokeContainer.innerHTML=quote;
    author.innerHTML="~ "+auth;
    author.classList.add("fade");
    jokeContainer.classList.add("fade");
}
getNewQuote();

btn.addEventListener("click",getNewQuote);
getNewQuote();