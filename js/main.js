// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood;
favoriteFood = 'pie';
alert(favoriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myString;
myString = 'This is a string of words.';
alert(myString[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideThenMultiply(numOne, numTwo, numThree) {
    alert((numOne / numTwo) * numThree);
}

divideThenMultiply(10, 20, 30);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeMyNumber(numOnly) {
    console.log(numOnly ^ 3);
}

cubeMyNumber(4);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkSummer(monthName) {
    monthName = monthName.toLowerCase()
    if (monthName === 'june'
        || monthName === 'july'
        || monthName === 'august'
    ) {
        alert('Yay');
    }
    else {
        alert('Boo');
    }
}

checkSummer('July');
checkSummer('October');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipTheFives(numOnly) {
    for (let i = 0; i <= numOnly; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}

skipTheFives(37);