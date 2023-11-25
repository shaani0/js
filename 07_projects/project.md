<!-- DOM PROJECT -->

project link : []( https://stackblitz.com/edit/dom-project-chaiaurcode-grzwbu?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)


#SOLUTION CODE 

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

<!-- PROJECT 2 solution -->
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
