<!-- DOM PROJECT -->

project link : []( https://stackblitz.com/edit/dom-project-chaiaurcode-grzwbu?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)


## PROJECT 1 SOLUTION CODE

```javascript
console.log(khan);

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( function (button){
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
    body.style.backgroundColor = e.target.id;
    }
  })
});
```

## PROJECT 2 SOLUTION CODE 


```javascript
const form = document.querySelector('form');

// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
 
  if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
  }
else{
 const bmi =  (weight / (height*height/10000)).toFixed(2);
//  show the results
results.innerHTML = `<span>${bmi}</span>`;
if(bmi < 18.6){
  results.innerHTML = `<span>under weight: ${bmi} </span>`
}
else if(bmi >18.6 && bmi < 24.9){
  results.innerHTML = `<span>Normal range: ${bmi} </span>`
}
else{
results.textContent =`over weight: ${bmi} `
}
}
}); 
```


## PORJECT 3 SOLUTION  CODE

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// you can use both (query.selector) & (getElementbyid)
// their result will be same .

setInterval(function (){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## PROJECT 4 SOLUTION CODE 

```javascript

let randomNumber =parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess);
     validateGuess(guess);
   
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a number more than 1')
  }
  else if(guess > 100){
    alert('please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over. random number was ${randomNumber}`)
      endGame()
    }
    else{
    displayGuess(guess)
    checkGuess(guess)
    };
  };
};

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed it right`)
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage(`Number is TOOO Low`)
  }
  else if (guess > randomNumber){
    displayMessage(`Number is TOOO High`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} | `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
startover.appendChild(p);
playGame = false
newGame();
}

function newGame (){
 const newgamebutton =  document.querySelector('#newGame');
 newgamebutton.addEventListener('click', function(e){
randomNumber =parseInt(Math.random() * 100 + 1);
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
remaining.innerHTML = `${11 - numGuess}`;
userInput.removeAttribute('disabled')
startover.removeChild(p);

playGame =true;
 });
}


```


## PROJECT 5 SOLUTION CODE

``` JAVASCRIPT

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});



```


## PROJECT 6 SOLUTION CODE

``` JAVASCRIPT

const  randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#'
  for(let i = 0; i< 6; i++){
color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

// console.log(randomColor());

let intervalId
const StartChangingColor = function(){
if(!intervalId){
  intervalId  = setInterval(changebgColor, 1000)

}
  function changebgColor(){
  document.body.style.backgroundColor = randomColor();
 
  }
};
const StopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
};


document.querySelector("#start").addEventListener('click',StartChangingColor);

document.querySelector("#stop").addEventListener('click',StopChangingColor);
```