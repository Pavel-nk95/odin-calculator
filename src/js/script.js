'use strict';

const inputField = document.querySelector('.field__input');
const inputHistory = document.querySelector('.field__history');
const buttonBoxNode = document.querySelector('.buttons');

const controlNodes = {
  decimalBtn: document.getElementById('decimal'),
  multiplyBtn: document.getElementById('multiply'),
  divideBtn: document.getElementById('divide'),
  plusBtn: document.getElementById('plus'),
  minusBtn: document.getElementById('minus'),
  powerBtn: document.getElementById('power'),
  equalBtn: document.getElementById('equal'),
  clearBtn: document.getElementById('clear'),
  backspaceBtn: document.getElementById('backspace'),
};

const state = {
  firstOperand: '',
  operator: '',
  secondOperand: '',
};

const {
  clearBtn,
  minusBtn,
  plusBtn,
  divideBtn,
  multiplyBtn,
  equalBtn,
  backspaceBtn,
  powerBtn,
  decimalBtn,
} = controlNodes;

const sum = (firstOperand, secondOperand) => {
  return Number(firstOperand) + Number(secondOperand);
};

const subtract = (firstOperand, secondOperand) => {
  return Number(firstOperand) - Number(secondOperand);
};

const multiply = (firstOperand, secondOperand) => {
  return Number(firstOperand) * Number(secondOperand);
};

const divide = (firstOperand, secondOperand) => {
  return Number(firstOperand) / Number(secondOperand);
};

const operate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return sum(firstOperand, secondOperand);
    case '-':
      return subtract(firstOperand, secondOperand);
    case '/':
      return divide(firstOperand, secondOperand);
    case '*':
      return multiply(firstOperand, secondOperand);
    default:
      return null;
  }
};

const runAction = (value) => {
  const { firstOperand, secondOperand, operator } = state;
  if (!secondOperand && firstOperand && !operator) {
    state.operator = value;
    state.secondOperand = firstOperand;
    state.firstOperand = '';
    inputHistory.textContent = `${state.secondOperand} ${state.operator} `;
  }
  if (secondOperand && firstOperand && operator) {
    state.operator = value;
    state.secondOperand = operate(secondOperand, firstOperand, operator);
    inputHistory.textContent = `${state.secondOperand} ${state.operator} `;
    state.firstOperand = '';
    inputField.textContent = '';
  }
};

backspaceBtn.addEventListener('click', () => {
  state.firstOperand = '';
  inputField.textContent = '0';
});

decimalBtn.addEventListener('click', () => {
  if (state.firstOperand.includes('.')) {
    return;
  }
  state.firstOperand += '.';
  inputField.textContent += '.';
});

powerBtn.addEventListener('click', () => {
  if (!state.secondOperand && !state.operator) {
    state.firstOperand = state.firstOperand ** 2;
    inputField.textContent = state.firstOperand;
  }
});

clearBtn.addEventListener('click', () => {
  state.firstOperand = '';
  state.secondOperand = '';
  state.operator = '';
  inputField.textContent = '0';
  inputHistory.textContent = '';
});

equalBtn.addEventListener('click', () => {
  const { firstOperand, secondOperand, operator } = state;
  if (firstOperand && secondOperand && operator) {
    state.firstOperand = operate(secondOperand, firstOperand, operator);
    inputField.textContent = state.firstOperand;
    inputHistory.textContent += `${firstOperand}`;
    state.secondOperand = '';
    state.operator = '';
    console.log(state);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code.startsWith('Digit')) {
    state.firstOperand += +event.code.slice(-1);
    inputField.textContent = state.firstOperand;
  }
});

buttonBoxNode.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn--num')) {
    state.firstOperand += target.textContent;
    inputField.textContent = state.firstOperand;
  } else {
    return;
  }
});

plusBtn.addEventListener('click', () => {
  runAction('+');
});

minusBtn.addEventListener('click', () => {
  runAction('-');
});

divideBtn.addEventListener('click', () => {
  runAction('/');
});

multiplyBtn.addEventListener('click', () => {
  runAction('*');
});

const startApp = () => {};
