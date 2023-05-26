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
  acc: '',
};

const { clearBtn, minusBtn, plusBtn, divideBtn, multiplyBtn, equalBtn } = controlNodes;

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

const runAction = (value) => {
  const { currentNum, acc, operator } = state;
  if (!acc && currentNum && !operator) {
    state.operator = value;
    state.acc = currentNum;
    state.currentNum = '';
    inputHistory.textContent = `${state.acc} ${state.operator} `;
  }
};

clearBtn.addEventListener('click', () => {
  state.currentNum = '';
  state.acc = '';
  state.operator = '';
  inputField.textContent = '0';
  inputHistory.textContent = '';
});

equalBtn.addEventListener('click', () => {
  const { currentNum, acc, operator } = state;
  if (currentNum && acc && operator) {
    state.currentNum = operate(acc, currentNum, operator);
    inputField.textContent = state.currentNum;
    inputHistory.textContent += `${currentNum} =`;
    state.acc = '';
    state.operator = '';
    console.log(state);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code.startsWith('Digit')) {
    state.currentNum += +event.code.slice(-1);
    inputField.textContent = state.currentNum;
  }
});

buttonBoxNode.addEventListener('click', ({ target }) => {
  if (target.classList.contains('btn--num')) {
    state.currentNum += target.textContent;
    inputField.textContent = state.currentNum;
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
