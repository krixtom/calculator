const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen')
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');

let currentValue = '';
let previousValue = '';
let operator = '';


numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if(operator === '' && currentValue.length < 6) {
      currentValue += e.target.textContent
      screen.textContent = currentValue;
    } else if(operator !== '' && previousValue.length < 6) {
      previousValue += e.target.textContent;
      screen.textContent = `${currentValue} ${operator} ${previousValue}`
    }
  })
})

clear.addEventListener('click' ,() => {
  currentValue = '';
  previousValue = '';
  operator = '';
  screen.textContent = '';
})


operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    if(operator === '') {
      operator = e.target.textContent;
      screen.textContent = `${currentValue} ${operator}`
    }
  })
})

equals.addEventListener('click', () => {
  let num1 = Number(currentValue);
  let num2 = Number(previousValue);
  let result = 0

  if(operator === '+') {
    result =  num1 + num2
    screen.textContent = Math.trunc(result /  0.01 ) * 0.01;

  } else if(operator === '-') {
    result = num1 - num2
    screen.textContent = Math.trunc(result /  0.01 ) * 0.01;


  } else if(operator === 'x') {
    result = num1 * num2
    screen.textContent = Math.trunc(result /  0.01 ) * 0.01;


  } else if(operator === '/' ) {
    if(num2 === 0) {
      screen.textContent = 'Cannot divide by 0!'
    } else {

      result = num1 / num2
      screen.textContent = Math.trunc(result /  0.01 ) * 0.01;
    }

  }


  currentValue = screen.textContent;
  previousValue = '';
  operator = '';


})


decimal.addEventListener('click', () => {
  if(operator === '' && !currentValue.includes('.')) {
    currentValue += '.'
    screen.textContent = currentValue

  } else if(operator !== '' && !previousValue.includes('.')) {
    previousValue += '.'
    screen.textContent = `${currentValue} ${operator} ${previousValue}`
  }
} )