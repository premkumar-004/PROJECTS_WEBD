let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://meme-api.com/gimme/";

//Array of Subreddits
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function to get random memes
let getMeme = () => {
    let randomSubreddits = subreddits[Math.floor(Math.random() * subreddits.length)];
    fetch(url + randomSubreddits).then(resp => resp.json()).then(data => {
        console.log(data);
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
        }
        memeImg.src = data.url;
        title.innerHTML = data.title
    })
}
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme)