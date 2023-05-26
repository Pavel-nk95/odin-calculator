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
};

const state = {
  currentNum: '',
  operator: '',
  result: '',
};

const { clearBtn, minusBtn, plusBtn, divideBtn, multiplyBtn } = controlNodes;

const sum = (firstOperand, secondOperand) => {
  return firstOperand + secondOperand;
};

const subtract = (firstOperand, secondOperand) => {
  return firstOperand - secondOperand;
};

const multiply = (firstOperand, secondOperand) => {
  return firstOperand * secondOperand;
};

const divide = (firstOperand, secondOperand) => {
  return firstOperand / secondOperand;
};

const power = () => {};

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

clearBtn.addEventListener('click', () => {
  state.currentNum = '';
  state.firstOperand = '';
  state.secondOperand = '';
  state.operator = '';
  inputField.textContent = '0';
  inputHistory.textContent = '';
});

plusBtn.addEventListener('click', () => {});

document.addEventListener('keydown', (event) => {
  if (event.code.startsWith('Digit')) {
    state.currentNum += +event.code.slice(-1);
    inputField.textContent = state.currentNum;
    console.log(state.currentNum);
  }
});

buttonBoxNode.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn--num')) {
    state.currentNum += +target.textContent;
    inputField.textContent = state.currentNum;
    console.log(state.currentNum);
  } else {
    return;
  }
});

const startApp = () => {};
