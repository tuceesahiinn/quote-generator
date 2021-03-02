const textArea = document.getElementById("quote");

const getQuote = () => {
    fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => {
            textArea.innerHTML = data.quote;
            const quote = data.quote;
            const twitterShare = `https://twitter.com/intent/tweet?text=${quote}`;
            document.querySelector("#twitterButton>a").href = twitterShare;
        });
};