/*Task 1: Use map to convert an array of numbers into an array of their cubes.
Write a JavaScript function that takes an array of numbers as input and returns
a new array containing the cubes of each number.
*/

function cubeArray(numbers){
    return numbers.map(number => Math.pow(number,3));
}

const inputArray =[1,2,3,4,5];
const cubedArray=cubeArray(inputArray);
console.log(cubedArray); //Output= 1,8,27,64,125


/*Task 2: Use reduce to find the sum of all elements in an array.
Write a JavaScript function that takes an array of numbers as input
and returns the sum of all elements.
*/

function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const sum=sumArray(inputArray);
console.log(sum); //Output = 15


/*
Task 3: Use filter to find all prime numbers in an array.
Write a JavaScript function that takes an array of numbers 
as input and returns a new array containing only the prime numbers.
*/

function isPrime(number){
    if(number <= 1) return false;
    if(number <= 3) return true;
    if(number %2 ===0 || number %3 ===0) return false;
    for(let i=5; i * i <= number; i += 6){
        if (number % i ===0 ||number % (i+2) === 0) return false;
    }
    return true;
}

function filterPrimes(numbers){
    return numbers.filter(isPrime);
}

const inputArrayNew = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const primeNumbers = filterPrimes(inputArrayNew);
console.log(primeNumbers); //Output = 2,3,5,7,11,13


/*
Task 4: Use map, reduce, and filter to calculate the average of squared
odd numbers in an array. Write a JavaScript function that takes an array of
numbers as input and calculates the average of the squares of all odd
numbers in the array.
*/

function averageSquaredOdds(numbers) {
    const oddNumbers =  numbers.filter(number => number % 2 !== 0);

    const squaredOdds = oddNumbers.map(number => number * number);

    const sumOfSquaredOdds = squaredOdds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const average = squaredOdds.length > 0 ? sumOfSquaredOdds / squaredOdds.length : 0;

    return average;
}

const array = [1,2,3,4,5,6,7,8,9,10];
const average = averageSquaredOdds(array);
console.log(average);


/*
Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
Write a JavaScript function that takes an array of strings as input
and returns the longest string from the array.
*/

function findLongestString(strings) {
    const lengths = strings.map(str => str.length);

    const maxLength = lengths.reduce((max,length) => Math.max(max, length), 0);

    const longestStrings = strings.filter(str => str.length === maxLength);

    return longestStrings[0];

}

const inputStrings = ["apple", "banana", "cherry","date", "elderberry","fig","grape"];
const longestString= findLongestString(inputStrings);
console.log(longestString);


/*
Task 6: Use map to capitalize the first letter of each word in a sentence.
Write a JavaScript function that takes a sentence as input and returns the
sentence with the first letter of each word capitalized.
*/

function capitalizeFirstLetters(sentence){
    return sentence
    .split(' ')
    .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

const inputSentence = "hello world! This is a test sentence.";
const capitalizedSentence = capitalizeFirstLetters(inputSentence);
console.log(capitalizedSentence);


/*
Task 7: Use filter to find all students who passed the exam.
Write a JavaScript function that takes an array of student 
objects (with properties name and score) as input and returns
an array containing only the students who passed the exam (scored 60 or above).
*/

function findPassingStudents(students) {
    return students.filter(student => student.score >= 60);
}

const students = [
    { name: "Alice", score:85 },
    { name: "Bob", score:55 },
    { name: "Charlie", score:70 },
    { name: "David", score:45 },
    { name: "Eve", score:90 }
];

const passingStudents = findPassingStudents(students);
console.log(passingStudents);


/*
Task 8: Create a Private Counter for Multiple Instances
Write a closure-based function that creates multiple instances
of a private counter. Each instance should have its own count,
independent of the others. For example:

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
*/

function createInstanceCounter() {
    let count = 0;

    return function() {
        count +=1;
        return count;
    };
}

const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());


/*
Task 9: Create a Promise-Based Calculator
Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.
*/

function calculator(num1, num2, operation){
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' ||typeof num2 !== 'number') {
            reject(new Error("Invalid input : both arguments must be numbers"));
        }

        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject(new Error("Division by zero error"));
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(new Error("invalid operation"));
                break;
        }
    });
}

calculator(10,5,'add')
    .then(result => console.log(result))
    .catch(error => console.error(error));

    calculator(10,5,'subtract')
    .then(result => console.log(result))
    .catch(error => console.error(error));

    calculator(10,5,'multiply')
    .then(result => console.log(result))
    .catch(error => console.error(error));

    calculator(10,0,'divide')
    .then(result => console.log(result))
    .catch(error => console.error(error));

    calculator(10,5,'modulo')
    .then(result => console.log(result))
    .catch(error => console.error(error));


/*
Task 10: Calculate Total Score
Write a JavaScript function that takes an array of objects,
where each object contains a property score, and uses the 
forEach method to calculate the total score of all the objects in the array.
Return the total score as the output.
*/

function calculateTotalScore(objects) {
    let totalScore = 0;

    objects.forEach(obj => {
        if (typeof obj.score === 'number') {
            totalScore += obj.score;
        }
    });

    return totalScore;
}

const totalScore = calculateTotalScore(students);
console.log(totalScore);