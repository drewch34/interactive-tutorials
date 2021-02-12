// script.js

let bodySegmentCount = 1;
let bodySegmentMaxLimit = 8;
let bodySegmentMinLimit = 1;
const minusButton = document.getElementById('minus-button');
const plusButton = document.getElementById('plus-button');
const caterpillar = document.getElementById('showcase-section');
const blueButton = document.getElementById('blue-button');
const orangeButton = document.getElementById('orange-button');
const pinkButton = document.getElementById('pink-button');
const bounceButton = document.getElementById('bounce-button');


function addBodySegments(){
  const bodySegment = document.createElement('div');
  if(bodySegmentCount < bodySegmentMaxLimit){
    bodySegmentCount++;
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = '';
    caterpillar.appendChild(bodySegment);
    bodySegment.classList.add('body-segment');
  } else if (bodySegmentCount >= bodySegmentMaxLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'Only 8 will fit!';
    return;
  }
};

function subtractBodySegments(){
  if(bodySegmentCount > bodySegmentMinLimit){
    bodySegmentCount--;
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = '';
    let bodySegmentToRemove = document.querySelector(".body-segment:last-of-type")
    caterpillar.removeChild(bodySegmentToRemove);
    
  } else if (bodySegmentCount <= bodySegmentMinLimit) {
    document.getElementById('body-segment-count').innerHTML = bodySegmentCount;
    document.getElementById('min-max-message').innerHTML = 'You have to have at least 1!'
    return;
  }
};

function onPlusClick() {
    addBodySegments();
};

function onMinusClick() {
  subtractBodySegments();
}


function makeColorSegments(color) {
const addedDivs = document.querySelectorAll('.body-segment');
let running = 0;
  if (running > 0) return;
for (let i = 0; i < addedDivs.length; i++) {
  running++;
  setTimeout(function() {
    addedDivs[i].style.backgroundColor = color;
    running--;
  }, 300*i);
  
}
};

let bouncing = false;
function bounceSegments(){
  const addedDivs = document.getElementsByClassName('body-segment');
  if (!bouncing) {
    bounceButton.innerText = 'make them stop!'
    bouncing = true;
    for (let i = 0; i < addedDivs.length; i++) {
      setTimeout(function() {
      addedDivs[i].classList.add('bounce');
      }, 300*i);
      
    }
  } else {
    bounceButton.innerText= 'make them bounce!'
    for (let i = 0; i < addedDivs.length; i++) {
      setTimeout(function() {
        addedDivs[i].classList.remove('bounce');
      }, 300*i);
    }
    bouncing = false;
      
    }
    

};


blueButton.addEventListener('click', () => makeColorSegments('#05D1E2'));
orangeButton.addEventListener('click', () => makeColorSegments('#ff8900'));
pinkButton.addEventListener('click', () => makeColorSegments('#FD47B3'));
bounceButton.addEventListener('click', () => bounceSegments());
plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);
