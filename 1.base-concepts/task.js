"use strict"; 

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    // нет корней
    return arr;
  } else if (discriminant === 0) {
    // один корень
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    // два корня
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(rootOne, rootTwo);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  percent = percent / 100; // преобразовать проценты в десятичные
  
  let principal = amount - contribution; // основная сумма кредита
  let monthlyInterestRate = percent / 12;
  let numberOfPayments = countMonths;

  let monthlyPayment =
    principal * (monthlyInterestRate + monthlyInterestRate / 
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1));

  let totalPayment = monthlyPayment * numberOfPayments;

  return parseFloat(totalPayment.toFixed(2));
}