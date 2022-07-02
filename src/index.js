
import generateJoke from "./generateJoke";
import './styles/main.scss';
import laughing from "./asset/laughing.svg";

console.log(generateJoke());

const laughting = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)
generateJoke();