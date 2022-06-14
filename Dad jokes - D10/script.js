const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// using async await 
async function generateJoke() {
    const res = await fetch(' https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
    
    const data = await res.json()

    joke.innerHTML = data.joke
}

// function generateJoke() {
//     fetch(' https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke
//     })
// }