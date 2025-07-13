// DOM Reference and manipulation script
const boxesContainer = document.getElementById('boxesContainer');

// ===== Heading =====
const title = document.createElement('h1');
title.textContent = 'JavaScript (DOM) Practice.';
boxesContainer.appendChild(title);


// ===== Description =====
const description = document.createElement('p');
description.innerHTML =
  `HTML document is structured as a JavaScript Object. Every HTML element has different properties which can help to manipulate it.
   It is possible to get, create, append, or remove HTML elements using JavaScript.<br>
   Designed for learners and developers following the <strong style="color: #ff6464;">"30 Days of JavaScript"</strong> challenge,
   this project shows how JavaScript dynamically interacts with the DOM to create responsive, real-time web experiences.`;
boxesContainer.appendChild(description);


// ===== Input + Buttons =====
const inputContainer = document.createElement('div');
inputContainer.id = 'container';
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center';
inputContainer.style.gap = '30px';
inputContainer.style.marginTop = '20px';
inputContainer.style.flexWrap = 'wrap';
 
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.id = 'inputText';
inputText.placeholder = 'Enter something...';

const addBtn = document.createElement('button');
addBtn.id = 'addBtn';
addBtn.textContent = 'Add Box';

const clearBtn = document.createElement('button');
clearBtn.id = 'clearBtn';
clearBtn.textContent = 'Clear All';
clearBtn.style.backgroundColor = '#ff6464';
clearBtn.style.color = '#fff';

inputContainer.appendChild(inputText);
inputContainer.appendChild(addBtn);
inputContainer.appendChild(clearBtn);
boxesContainer.appendChild(inputContainer);


// ===== Manipulating DOM Header + Paragraph =====
const header = document.createElement('h1');
header.textContent = 'Manipulating DOM Object.';
boxesContainer.appendChild(header);

const paragraph = document.createElement('p');
paragraph.innerHTML = `Manipulating the DOM (Document Object Model) allows developers to dynamically interact with and update the structure,
content, and style of a webpage in real-time using JavaScript.<br>
It enables everything from simple text changes to complex UI updates without reloading the page.`;
boxesContainer.appendChild(paragraph);


// ===== Event Listeners Header + Paragraph =====
const eventHeader = document.createElement('h1');
eventHeader.textContent = 'Event Listeners.';
boxesContainer.appendChild(eventHeader);

const eventParagraph = document.createElement('p');
eventParagraph.innerHTML = `Event listeners are a powerful feature in JavaScript that allow developers to make web pages interactive and dynamic.<br>
You can respond to user actions such as clicks, typing, mouse movement, and more by attaching listeners to DOM elements.`;
boxesContainer.appendChild(eventParagraph);


// ===== Keyboard Interaction Input =====
const eventContainer = document.createElement('div');
eventContainer.id = 'eventcontainer';
eventContainer.style.display = 'flex';
eventContainer.style.justifyContent = 'center';
eventContainer.style.gap = '30px';
eventContainer.style.marginTop = '40px';

const keyInput = document.createElement('input');
keyInput.type = 'text';
keyInput.id = 'keyinput';
keyInput.placeholder = 'Type something...';

const clickMeBtn = document.createElement('button');
clickMeBtn.id = 'clickMeBtn';
clickMeBtn.textContent = 'Click Me';
clickMeBtn.style.backgroundColor = '#ff6464';
clickMeBtn.style.color = '#fff';

eventContainer.appendChild(keyInput);
eventContainer.appendChild(clickMeBtn);
boxesContainer.appendChild(eventContainer);


// ===== Box Creator =====
function createBox(value) {
  const newBox = document.createElement('div');
  newBox.className = 'box';
  newBox.textContent = value;

  newBox.style.opacity = '0';
  newBox.style.transition = 'opacity 0.5s ease-in';
  boxesContainer.appendChild(newBox);
  requestAnimationFrame(() => {
    newBox.style.opacity = '1';
  });

  newBox.addEventListener('click', () => {
    boxesContainer.removeChild(newBox);
    saveBoxes();
  });

  newBox.addEventListener('mouseenter', () => {
    newBox.style.backgroundColor = '#222';
    newBox.style.color = '#fff';
  });

  newBox.addEventListener('mouseleave', () => {
    newBox.style.backgroundColor = '#ff8888';
    newBox.style.color = '#fff';
  });
}


// ===== Save & Load Boxes =====
function saveBoxes() {
  const allBoxes = [...document.querySelectorAll('.box')].map(box => box.textContent);
  localStorage.setItem('boxes', JSON.stringify(allBoxes));
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('boxes')) || [];
  saved.forEach(value => createBox(value));
});


// ===== Event Bindings =====
addBtn.addEventListener('click', () => {
  const value = inputText.value.trim();
  if (value) {
    createBox(value);
    inputText.value = '';
    saveBoxes();
  } else {
    alert('Please enter something before adding a box.');
  }
});

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.box').forEach(box => box.remove());
  localStorage.removeItem('boxes');
});

inputText.addEventListener('keypress', e => {
  if (e.key === 'Enter') addBtn.click();
});

keyInput.addEventListener('input', e => {
  console.log('Typing:', e.target.value);
});

clickMeBtn.addEventListener('click', () => {
  alert('Button clicked!');
});


// ===== Dark Mode Toggle =====
const darkToggle = document.createElement('button');
darkToggle.textContent = '🌙 Dark Mode';
darkToggle.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
`;
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


// ===== Inject Dark Mode Styles =====
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  .dark-mode {
    background-color: #111;
    color: #fff;
  }
  .dark-mode .box {
    background-color: #444;
  }
  .box {
    padding: 12px 18px;
    background-color: #ff8888;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin: 8px;
  }
  .box:hover {
    background-color: #ff5a5a;
  }
`;
document.head.appendChild(darkStyle);

// ===== Solar System Weight Calculator =====
const solarCalcTitle = document.createElement('h1');
solarCalcTitle.innerText = 'Mini Project Solar System';
solarCalcTitle.style.textAlign = 'center';
solarCalcTitle.style.marginTop = '40px';
boxesContainer.appendChild(solarCalcTitle);

// === Calculator container ===
const solarCalcContainer = document.createElement('div');
solarCalcContainer.className = 'solar-calc-container';
boxesContainer.appendChild(solarCalcContainer);

// Input field
const weightInput = document.createElement('input');
weightInput.type = 'number';
weightInput.placeholder = 'Enter mass (kg)';
weightInput.className = 'solar-input';
solarCalcContainer.appendChild(weightInput);

// Dropdown
const planetSelect = document.createElement('select');
planetSelect.className = 'solar-select';

const planets = [
  { name: 'MERCURY', gravity: 3.7, image: 'mercury.jpg' },
  { name: 'VENUS', gravity: 8.87, image: 'venus.jpg' },
  { name: 'EARTH', gravity: 9.81, image: 'earth.jpg' },
  { name: 'MOON', gravity: 1.62, image: 'moon.jpg' },
  { name: 'MARS', gravity: 3.71, image: 'mars.jpg' },
  { name: 'JUPITER', gravity: 24.79, image: 'jupiter.jpg' },
  { name: 'SATURN', gravity: 10.44, image: 'saturn.jpg' },
  { name: 'URANUS', gravity: 8.69, image: 'uranus.jpg' },
  { name: 'NEPTUNE', gravity: 11.15, image: 'neptune.jpg' },
  { name: 'PLUTO', gravity: 0.62, image: 'pluto.jpg' }
];

planets.forEach(p => {
  const option = document.createElement('option');
  option.value = p.name;
  option.textContent = p.name;
  planetSelect.appendChild(option);
});
solarCalcContainer.appendChild(planetSelect);

// Button
const calcBtn = document.createElement('button');
calcBtn.textContent = 'Calculate weight';
calcBtn.className = 'solar-btn';
solarCalcContainer.appendChild(calcBtn);

// Result area
const resultContainer = document.createElement('div');
resultContainer.className = 'result-container';
boxesContainer.appendChild(resultContainer);

// Calculate Logic
calcBtn.addEventListener('click', () => {
  const mass = parseFloat(weightInput.value);
  const planetName = planetSelect.value;
  const selectedPlanet = planets.find(p => p.name === planetName);

  if (!mass || isNaN(mass)) {
    alert('Please enter a valid mass!');
    return;
  }

  const weight = (mass * selectedPlanet.gravity).toFixed(2);

  resultContainer.innerHTML = `
    <div class="planet-image-box">
      <img src="images/${selectedPlanet.image}" class="planet-image" alt="${planetName}">
    </div>
    <div class="weight-box">
      <p>The weight of the object on <strong>${planetName}</strong></p>
      <div class="weight-result">${weight} N</div>
    </div>
  `;
});

const solarCalcStyle = document.createElement('style');
solarCalcStyle.textContent = `
  .solar-calc-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .solar-input, .solar-select, .solar-btn {
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .solar-btn {
    background-color: #ff8888;
    color: white;
    cursor: pointer;
  }
  .result-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    padding: 20px;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    text-align: center;
    color: #fff;
  }

  .planet-image-box {
    flex-basis: 300px;
  }

  .planet-image {
    width: 100%;
    max-width: 280px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255,255,255,0.2);
  }

  .weight-box {
    font-size: 18px;
    flex-basis: 300px;
  }

  .weight-result {
    font-size: 32px;
    margin-top: 10px;
    font-weight: bold;
    color: #00ffcc;
  }

  body {
    background-image: url('images/stars-bg.jpg');
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
  }
`;
document.head.appendChild(solarCalcStyle);
