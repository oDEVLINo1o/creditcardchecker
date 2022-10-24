
let button = document.getElementById('button');
let answer = document.getElementById('answer');




/*// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];*/

// An array of all the arrays above
//const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// code for the Luhn Algorithm which tells us if cards a valid or invalid

// takes strings of numbers as inputs

const validateCred = cred => {
  num = [];
  for (let i = 0; i < cred.length; i++) {
    num[i] = Number(cred[i]);
  }
  num.map(Number);
  num.reverse();
  console.log(num)
  let loop1 = 0;
  let loop2 = 0;
    for (let i = 0; i < num.length; i += 2) {
      loop1 += num[i];
    }
    for (let i = 1; i < num.length; i += 2) {
      let temp = num[i] * 2;
      if (temp > 9) {
        temp -= 9;
      }
      loop2 += temp;
    }
  if ((loop1 + loop2) % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
};

// takes arrays of numbers as inputs

/*const validateCred = num => {
    num.reverse();
    let loop1 = 0;
    let loop2 = 0;
      for (let i = 0; i < num.length; i += 2) {
        loop1 += num[i];
        console.log(loop1)
      }
      for (let i = 1; i < num.length; i += 2) {
        let temp = num[i] * 2;
        if (temp > 9) {
          temp -= 9;
        }
        loop2 += temp;
      }
    if ((loop1 + loop2) % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  };*/

// array to store invalid cards
let invalidCards = [];

// function to collect only invalid cards and pass them to the invalidCards array 
const findInvalidCards = nest => {
    
    for (let i = 0; i < nest.length; i++) {
        if (validateCred(nest[i]) === false) {
          nest[i].reverse();
          invalidCards.push(batch[i]);
        }
    }
}

// array to hold names of companies who have issued invalid cards
let companyArr = [];
// function to list the companies of each invalid card
/*First Digit 	Company
3 	Amex (American Express)
4 	Visa
5 	Mastercard
6 	Discover   */


const idInvalidCardCompanies = arr => {
    console.log(arr.length)
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 3 && !arr.includes('Amex')) {
          companyArr.push('Amex');
        }
        else if (arr[i][0] === 4 && !arr.includes('Visa')) {
          companyArr.push('Visa');
        }
        else if (arr[i][0] === 5 && !arr.includes('Mastercard')) {
          companyArr.push('Mastercard');
        }
        else if (arr[i][0] === 6 && !arr.includes('Discover')) {
            companyArr.push('Discover');
        }
      }
  
  }

/*console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(invalidCards));
console.log(companyArr)*/


function valid () {
  if (document.getElementById('num').value) {
    let testNum = document.getElementById('num').value;

    if (testNum.length > 12 && testNum.length < 17) {
      if (validateCred(testNum) === true) {
        answer.innerHTML = 'Your Card is Valid!';
      }
      else {
        answer.innerHTML = 'Credit Card is not Valid please contact your Credit Card company!';
      }
    }
    else {
      answer.innerHTML = 'Please check the card number and try again';
    }
  }
  else {
    answer.innerHTML = 'Please enter a card number!'
  }
  
}

button.addEventListener('click', valid);
