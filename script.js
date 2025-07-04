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
