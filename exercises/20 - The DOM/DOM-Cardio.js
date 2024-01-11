// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two, three" in them
const list = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>`;

// put that list into the above wrapper
div.innerHTML = list;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = "http://gettyimages.com"

// set the width to 250
img.width = "250";

// add a class of cute
img.classList.add = ('cute');

// add an alt of Cute Puppy
img.alt = "cute puppy"

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const div2 = `
    <div class="myDiv">
        <p>First</p>
        <p>Second</p>
    </div>`
;

// put this div before the unordered list from above
const ul = document.querySelector('ul');
ul.insertAdjacentHTML('beforebegin', div2);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
const secondParagraph = myDiv.firstElementChild.classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
    // <div class="playerCard">
    //   <h2>NAME — AGE</h2>
    //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    // </div>
function generatePlayerCard(name, age, height) {
    const div = document.createElement('div');
    div.classList.add('playerCard')
    const h2 = document.createElement('h2');
    h2.innerText = `${name} - ${age}`;
    const p = document.createElement('p');
    p.innerText = `They are ${height}cm and ${age} years old. In dog years this person would be ${age*7}. That would be a tall dog!`
    div.appendChild(h2);
    div.appendChild(p);
    return div;
}

// make a new div with a class of cards
// append those cards to the div
const cards = document.createElement('div');
cards.classList.add('cards')

// make 4 player cards using generatePlayerCard
for (let i = 0; i < 4; i++) {
    const card = generatePlayerCard('taís', 26, 167);
    cards.appendChild(card);
}

const names = ['Taís', 'Michael', 'Zé', 'Cubo'];
names.forEach((name) => {
    const randomAge = Math.floor(Math.random() * 101);
    const randomHeight = Math.floor(Math.random() * 1000);
    const card = generatePlayerCard(name, randomAge, randomHeight)
    cards.appendChild(card)
})

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
function addButton() {
    const cards = document.querySelectorAll('.playerCard')
    for (const card of cards) {
        const btnDiv = document.createElement('div')
        btnDiv.classList.add('btn')
        const button = document.createElement('button')
        button.innerText = 'Apagar'
        btnDiv.appendChild(button)
        card.appendChild(btnDiv)
    }
    return cards
}

addButton()

// select all the buttons!
const buttons = document.querySelectorAll('button')

// make out delete function
function deleteCard(event) {
    const selectedBtn = event.currentTarget;
    selectedBtn.parentElement.parentElement.remove();
}

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard))

