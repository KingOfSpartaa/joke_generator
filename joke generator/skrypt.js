const button = document.querySelector('.container button');
const jokeText = document.querySelector(".container p");
document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

// async function getJoke(){
//     const jokeData = await fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     const jokeObj = await jokeData.json();
//     jokeText.innerHTML = jokeObj.joke;
// }

function getJoke(){
    fetch('https://icanhazdadjoke.com/', {
        headers:{
        'Accept' : 'application/json'
    }
}).then(data => data.json())
.then(obj => jokeText.innerHTML = obj.joke)
}

//fetch - sprowadzać
// podstawowa składnia fetch(url,[options]);
//jeśli nie poda się dodatkowych opcji dane zostaną pobrane metodą GET
//metody do obsługi then() catch() all()
