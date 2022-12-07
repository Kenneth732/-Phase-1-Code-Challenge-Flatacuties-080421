// Your code here
const character = document.querySelector("#character-bar"),
container = document.querySelector("#detailed-info"),
animalName = document.getElementById("name"),
image = document.getElementById("image"),
form = document.getElementById("votes-form"),
animalVotes = document.getElementById("vote-count"),
input = document.getElementById("votes"),
resetVotes = document.getElementById('reset-btn');
resetVotes.style.cursor = 'pointer';
// let currentAnimal;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentAnimal.votes += parseInt(e.target.votes.value);
    showAnimal(currentAnimal);
});
resetVotes.addEventListener('click', () => {
    currentAnimal.votes = 0;
    showAnimal(currentAnimal);
})

const getCharacters = () =>{
    fetch('http://localhost:3000/characters/')
    .then(response => response.json())
    .then(renderAnimals)
}
getCharacters();
function renderAnimals(animals) {
    animals.forEach(renderCharacters)
}
const renderCharacters = (animal)=>{
    const spanEle = document.createElement('span')
    spanEle.innerHTML = animal.name;
    spanEle.style.cursor = 'pointer';
    character.appendChild(spanEle)
    spanEle.addEventListener('click', () => {
        currentAnimal = animal;
        showAnimal(animal);
});
}
const showAnimal = (animal)=>{
    animalName.innerHTML = animal.name;
    image.src = animal.image;
    animalVotes.innerHTML = animal.votes;
}