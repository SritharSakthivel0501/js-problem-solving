// write a function print 1 to 100, divisible by 3=>"fizz",divisible by 5=>"buzz",divisible by 3 and 5=>"fizzbuzz"
function fizzBuzz(){
    for(let i =1; i<= 100; i++){
      if(i%3 ===0 && i%5 == 0){
         console.log("fizzbuzz")
      }
      else if(i%3 === 0){
        console.log("fizz")
      }
       else if(i%5 === 0){
        console.log("buzz")
      }
      else{
        console.log(i)
      }
    }
  }
  
  
  fizzBuzz()

// 1.write a function named "even_or_add" which takes the input as numbers and returns "even" for even numbers or "odd" for odd numbers.
function even_or_odd(number){
    for(let i=0;i< number;i++){
      if(i % 2 == 0){
        console.log("even")
      }
      else if(i % 5 ==0){
        console.log("odd")
      }
      else{
        console.log(i)
      }
    }
  }
  even_or_odd(100)

// 2. write a function named "array_sum" which takes array as input and returns sum of the elements in the array.
function array_sum(array) {
    let sum = 0;
    for (let a of array)
      sum += a;
    return sum;
  };
  console.log(array_sum([13,43,23,47,43]))

// 3. write a function named "remove_first_last" which takes string as input and returns the string with first and last character being removed.
function remove_first_last(name){
    let result = name.slice(1,name.length-1)
    console.log(result)
  }
  remove_first_last("Srithar") 

// 4. write a function named "smallest_number" which takes array as input and returns the smallest number in the array.
  let s =[10, 5, 9, 13, 2, 6]
  let small=s[0]
  for(let i=0;i<s.length;i++){
    if(s[i]<small){
      small=s[i]
    }
  }
  console.log(small)

// 5.Write a function named "double_array" which takes array as input and returns the doubled values of the elements in array 
function double_array(number){
    for(let i=0;i< number.length;i++){
      console.log(number[i] *2)
    }
  }
  (double_array([12,15,51,53,6,62]))

  //Write a function named "rock_paper_scissor" which takes two string as input and returns string of  which player won the game.
  function rock_paper_scissor(inputA,inputB){
    if(inputA =="scissors" && inputB =="paper"){
        console.log("Player1 won!")
    }
    else if (inputA =="scissors" && inputB =="rock"){
        console.log("player2 won!")
    }
    else if (inputA =="paper" && inputB =="paper"){
        console.log("Draw")
    }
}
rock_paper_scissor("scissors","paper")

// -----------task 2-------------//
// 1.Write a function named calculator which takes two numbers & one operator(+,-,/,) as input  and returns the results of using the operator on two numbers
const calculator = (a, b, number) => {
  if (number === '+') 
    return a + b;
  if (number === '-') 
    return a - b;
  if (number === '*') 
    return a * b;
  if (number === '/') 
    return b === 0 ? "Can't divide by 0!" : a / b;
}

console.log(calculator(10, 3, "-"));

// 2.Write a function named reverse_string which takes string as input  and returns the reversed value of the string
let name = "hello";
let name1 = name.split("")
let name2 = name1.reverse()
let name3 = name2.join("")
console.log(name3)

let reverse_string ="good";
let reverse_string1 = reverse_string.split("")
let reverse_string2 = reverse_string1.reverse()
let reverse_string3 = reverse_string2.join("")
console.log(reverse_string3)

// 3.Write a function named count_vowels which takes string as input  and returns the count of number of vowels(a,e,i,o,u) in that string
function count_vowels(name){
  let x = name
  let y = /[a,e,i,o,u]/gi;
  result = x.match(y)
  console.log(result)
  }
  count_vowels("srithar")

//4Write a function named check_if_both_divisible which takes three numbers as input and returns true  if it is divisible by both the numbers
function check_if_both_divisible (x, y, z) {
  if (x == y && y == z) {
    return  "true";
  }

  if (x == y || y == z || z == x) {
    return "true";
  }

  return  "false";
}
console.log(check_if_both_divisible (8, 8, 8));
console.log(check_if_both_divisible(8, 8, 18));
console.log(check_if_both_divisible(8, 7, 18));

//5Write a function named seek_and_destroy which takes three values (array, input1, input2) as input and return the array with input1 and input2 being removed

function positiveSum(array) {
   let sum = 0;
   for(i=0;i<array.length;i++){
    if(array[i]>0){
        sum = sum + array[i]
    }
  } 
  return sum
}

console.log(positiveSum([10,-4,20]))



function repeatStr (n, s) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStr(3,"i");

function repeatStr (n, s) {
  let repeatWord = s.repeat(n);
  return repeatWord
}

repeatStr(6,"I")



let name4 = "world";
let name5 = name4.split("")
let name6 = name5.reverse()



let names = name2.join("")
console.log(names)



function solution(str){
  let = str()
  let name1 = name.split("")
let name2 = name1.reverse()
let name3 = name2.join("")
console.log(name3)
}
solution(srithar)



let needTacos = true;
 
if (needTacos) {
    console.log("Finding tacos");
} else {
    console.log("Keep on keeping on!");
}