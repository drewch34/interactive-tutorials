// script.js

let bodySegmentCount = 1;
let bodySegmentMaxLimit = 8;
let bodySegmentMinLimit = 1;
const minusButton = document.getElementById('minus-button')
const plusButton = document.getElementById('plus-button')
const caterpillar = document.getElementById('showcase-section')


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

plusButton.addEventListener('click', onPlusClick);
minusButton.addEventListener('click', onMinusClick);




