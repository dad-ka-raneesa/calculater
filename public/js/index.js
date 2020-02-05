'use strict';

const main = () => {
  const numberOne = document.querySelector('#numOne').value;
  const numberTwo = document.querySelector('#numTwo').value;
  const result = document.querySelector('#result');
  result.value = +numberOne + +numberTwo;
};

main();
