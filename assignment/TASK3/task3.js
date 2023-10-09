
function squaredNumbers(input){
const squaredNumbers = input.map((num) => num * num);  

const sumOfSquaredEvenNumbers = squaredNumbers.reduce((acc, num) => {
  if (num % 2 === 0) {  
    return acc + num;  
  }
  return acc;  
}, 0);

console.log("Sum of squared even numbers:", sumOfSquaredEvenNumbers);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers1 =  [11, 12, 13, 14, 15, 16]
 
squaredNumbers(numbers)
squaredNumbers(numbers1)