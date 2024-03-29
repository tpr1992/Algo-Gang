kkhkjbkjhkjhkj//  Algo Gang is brought to you by Terence, Jamil, John, and Miguel


//  String to lower case
//  https://leetcode.com/problems/to-lower-case/

toLowerCase = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)
    if (code >= 65 && code <= 90) {
      code += 32
    }
    newStr += String.fromCharCode(code)
  }
  return newStr
};


// ########################################################

//  Reverse String
//  https://leetcode.com/problems/reverse-string/

//  For an array of strings
reverseString1 = (str) => {
  return str.split('').reverse().join('')
}

//  For a single string
reverseString = (str) => {
  let reversed = '';
  for (var i = str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

// ########################################################

//  FizzBuzz
// https://leetcode.com/problems/fizz-buzz/
//  Description:
// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

fizzBuzz = (n) => {
  num = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      num.push('FizzBuzz')
    }
    else if (i % 3 === 0) {
      num.push('Fizz')
    }
    else if (i % 5 === 0) {
      num.push('Buzz')
    }
    else num.push(`${i}`)
  }
  return num
}

// ########################################################

//  Reverse Integer
//  https://leetcode.com/problems/reverse-integer/
//  Description:
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  const sign = (x > 0) - (x < 0) // get sign
  const val = sign * parseInt(
    (sign * x).toString().split('').reverse().join('')
  )
  return val < Math.pow(2, 31) && val >= -Math.pow(2, 31)
  ? val
  : 0
};

// ########################################################

// Array Chunking
// chunk([1,2,3,4,5,6,6,6,7,7,7], 3) -----> [[1,2,3], [4,5,6], [6,6,7], [7,7]]
// chunk([1,2,3,4], 2) ------> [[1,2], [3,4]]

//SOLUTION #1 iterating using a for of loop
//SOLUTION

// The for...of statement creates a loop iterating over
// iterable objects, including: built-in String, Array, Array-like objects
// (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined
// iterables. It invokes a custom iteration hook with statements to be executed
// for the value of each distinct property of the object.



function chunk(array, size) {
  const chunked = []; // set empty "chunk" array

  for (let element of array) {   // cleaner version of a for loop
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) { //if current "chunked" array is empty or equals chunk size... make new "chunk"
      chunked.push([element]);
    } else {
      last.push(element); // if current "chunked" array.length is not === size add new element to chunk
    }
  }

  return chunked // Don't forget to always return !!
}

// SOLUTION # 2 using a while loop

function chunkTwo(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size
  }
  return chunked
}




// ########################################################

// ########################################################

//  Valid Palindrome
//  https://leetcode.com/problems/valid-palindrome/
//  Description:
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false

isPalindrome = (str) => {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

//  For Loop

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}


// ########################################################
//  Collect Odd Values - Pure Recursion

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr,concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// collectOddValues([1, 2, 3, 4, 5])
// [1, 3, 5]


// ########################################################

//  PowerOf
//  Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of  Math.pow() - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) {
    return 1
  }
  else {
    return base * power(base, exponent - 1)
  }
}

// Shorter Version of the Above Power Methods
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

//  Factorial
//  Write a function called factorial which accepts a number and returns the factorial of that number. A&nbsp;factorial is the product of an integer and all the integers below it; e.g., factorial four (&nbsp; ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}

// Product of Array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// Recursive Range Solution
//  Write a function called  recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

//  Fibonocci Solution
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


// ########################################################

//  String Includes (letter match)
//  Return a boolean value depending on whether or not the specified wordd contains the specified letter
//  Manually checks each letter iteratively until it finds a match - very inefficient

const stringIncludes = (word, letter) => {
	let matches;
	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			matches = true
        } else {
			matches = false
        }}
		return !!matches
}

//  Less costly binary search letter match - with notes
//  The Big O time complexity for this would be log2n
// *********************
// Log base 2 of n just means, given a number, how many times would you have to press divided by two on a calculator to get down to 1. Notice that when the size gets really large, like over a million it still only takes us 20 guesses. Our other formula would cost us the size of n, or over a million.

// one by one
  function stringIncludes(string, letter){
    let matches;
    for(let i = 0; i < string.length; i++){
      if(string[i] === letter){
        matches = true
      }
    }
    return !!matches
  }

  function binarySearch(string, letter) {
    var startpoint = 0
    var endpoint = string.length - 1;
    var guessPosition = parseInt((endpoint - startpoint)/2)
    while (startpoint != endpoint) {
      console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
        if (string[guessPosition] < letter) {
          console.log('too low')
            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
        } else if(string[guessPosition] > letter) {
          console.log('too high')
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
        } else {
          console.log('just right')
            return true;
        }
    }
    if(string === letter){
      return true
    } else{
      console.log('sorry')
      return false;
    }
  }

  let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"


  //  CodeWars Credit Card Masking Algo
  // https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
  //  Description:
  // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
  //
  // Your task is to write a function maskify, which changes all but the last four characters into '#'.

  // First Attempt
  //  Passes 97 tests
  function maskify(cc) {
    let last4 = cc.substr(cc.length -4)
    let dontShow = cc.substr(0, cc.length -4)
    let maskednums = dontShow.replace(/./g, '#')
    return maskednums.concat(last4)
  }

  // ##########################################

  // Final Attempt
  //****************  Passes all 103 tests ******************
  // If statement is added to handle edge cases where the character count is less than 4
  function maskify(cc) {
    if (cc.length > 4) {
      let last4 = cc.substr(cc.length - 4)
      let dontShow = cc.substr(0, cc.length - 4)
      let maskedNums = dontShow.replace(/./g, '#')
      return maskedNums.concat(last4)

    } else {
      return cc
    }
  }


  // ##########################################

  // Mumbling
  // https://www.codewars.com/kata/mumbling/train/javascript
  // Description: This time no story, no theory. The examples below show you how to write function accum:
  //
  // Examples:
  //
  // accum("abcd") -> "A-Bb-Ccc-Dddd"
  // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt") -> "C-Ww-Aaa-Tttt"

  // Repeats character n times based on the index position, capitalizes first letter of each set


  function accum(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
      arr.push(format(s[i], i + 1))
    }
    return arr.join('-')
  }

  function format(s, num) {
    let letter = s.toUpperCase()

    while (letter.length !== num) {
      letter += s.toLowerCase()
    }
    return letter
  }

  // ##########################################

  // ##########################################

  // Get the Middle Character
  // https://www.codewars.com/kata/get-the-middle-character/train/javascript
  // You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
  //
  // #Examples:
  //
  // Kata.getMiddle("test") should return "es"
  //
  // Kata.getMiddle("testing") should return "t"
  //
  // Kata.getMiddle("middle") should return "dd"
  //
  // Kata.getMiddle("A") should return "A"


  function getMiddle(s) {
    let middle = s.length / 2
    if (s.length % 2 === 1) {
      return s.substr(middle, 1)
    } else {
      return s.substr(middle - 1, 2)
    }
  }


// Codewars 'Who Likes It?' - switch statement version


  function likes(names) {
  let response;
  switch (names.length) {
    case 0:
    response = 'no one likes this'
    break;
    case 1:
    response = `${names} likes this`
    break;
    case 2:
    response = `${names[0]} and ${names[1]} like this`
    break;
    case 3:
    response = `${names[0]}, ${names[1]} and ${names[2]} like this`
    break;
    default:
    response = `${names[0]}, ${names[1]} and ${names.length} others like this`
  }
}


// Standard Conditional Version

function likes(names) {
  let response;
  if (names.length === 0) {
    response = 'no one likes this'
  } else if (names.length === 1) {
    response = `${names} likes this`
  } else if (names.length === 2) {
    response = `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    response = `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    response = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  return response
}


// ##########################################

// Get the Middle Character
// https://www.codewars.com/kata/find-the-odd-int/train/javascript


const findOdd = (n) => {
 return  n.reduce((a, b) => {
    return a ^ b
  })
}

// ##########################################

// Validate Pin
// https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
// eg:
//
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


function validatePIN (pin) {
  //return true or false
    return /^(\d{4}|\d{6})$/.test(pin);
}

// ##########################################

// Delete Occurences of Element if it Occurs More than N times
// https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


function deleteNth (arr, n) {
  let newArr = [];
  let itemCounts = {};
  // itemCounts can also be an array
  for (let i = 0; i < arr.length; i++){
    let item = arr[i];
    let count = itemCounts[item] || 0;
    if (count < n) {
      newArr.push(item);
      itemCounts[item] = count + 1;
    }
  }
  return newArr;
}


// ##########################################

// Dynamically Formatting a String From an Array of Objects
// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  let newArr = [];
  names.forEach(item => {
    for (const prop in item) {
      newArr.push(item[prop])
    }
  })
  if (newArr.length === 0) {return ''}
  else if (newArr.length === 1) {return newArr.join('')}
  else if (newArr.length === 2) {return newArr.join(' & ')}
  else if (newArr.length === 3) {return `${newArr[0]}, ${newArr[1]} & ${newArr[2]}`}
  else {
    let lastTwo = []
    let final = newArr
    let last = ` & ${newArr[newArr.length - 1]}`
    newArr.pop()
    return newArr.join(', ').concat(last)
  }
}


// ##########################################

// Dynamically Formatting a String From an Array of Objects
// https://www.codewars.com/kata/detect-pangram/train/javascript
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(str){
	let letters = 'abcdefghijklmnopqrstuvwxyz'
	let arr = str.split('')
	for (let i = 0; i < arr.length; i++) {
    let elem = arr[i].toLowerCase()
    letters = letters.replace(elem, "")
  }
  if (letters.length === 0 ) {
    return true
  } else {
    return false
  }
}


// ##########################################
// Generate Pascals Triangle given a single input, also generate all lines up to input

// generate all prior rows and format as integers with spaces and line breaks for each row (no break after last row)
function pascalTriangle(j) {
  let arr = []
  if (j === 0) arr.push(1)
  for (let i = 0; i < j; i++) {
    // check to prevent line break after last row
    i === j - 1 ? arr.push(`${pascalGenerate(i)}`) : arr.push(`${pascalGenerate(i)} \n`);
  }
  return arr.join('').replace(/,/g, ' ')
}

function pascalGenerate(n) {
  if (n <= 0) return 1;
  return generateNextRow(pascalGenerate(n - 1))
}

function generateNextRow(lastRow) {
  let nextRow = []
  nextRow.push(1)
  for (let i = 0; i < lastRow.length - 1; i++) {
    nextRow.push(lastRow[i] + lastRow[i + 1])
  }
  nextRow.push(1)
  return nextRow
}
console.log(pascalTriangle(4))


// ######################################################################################

// Checking for Diagonal Matrix - return boolean

function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0)
              return false;
        }
    }
    return true;
}

// ######################################################################################

// Dijkstra's Algorithm Using a Weighted Graph


const problem = {
  start: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, finish: 3},
  D: {finish: 1},
  finish: {}
};

const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph) => {
  // track lowest cost to reach each node
  const costs = Object.assign({finish: Infinity}, graph.start);
  // track paths
  const parents = {finish: null};
  for (let child in graph.start) {
    parents[child] = 'start';
  }
  // track nodes that have already been processed
  const processed = [];
  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }
  let optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();
  const results = {
    distance: costs.finish,
    path: optimalPath
  };
  return results;
};

console.log(dijkstra(problem));

// ########################################################################################

// Linked List Practice, initial creation + basic functions like search and indexOf


function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
      this.tail = newNode;
  }
  this.head = newNode;
}

var ll = new LinkedList();

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(val) {
  let currentIndex = 0;
  let indexes = [];
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === val) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}

var ll = new LinkedList();

ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);
console.log(ll.indexOf(5));

// #####################################################################################

// --------------------------------------------------------

// Greatest Common Divisor

function greatestCommonDivisor(a, b){
  var divisor = 2,
  greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
  return 1;

  while(a >= divisor && b >= divisor){
    if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

// Alt
function greatestCommonDivisor(a, b){
  if(b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a%b);
  }
}


// ####################################################################################

// Remove duplicate character

function removeDuplicateChar(str){
  var len = str.length,
      char,
      charCount = {},
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

// ####################################################################################

//  Find missing number

function missingNumber(arr){
  var n = arr.length+1,
  sum = 0,
  expectedSum = n* (n+1)/2;

  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }

  return expectedSum - sum;
}

// > missingNumber([5, 2, 6, 1, 3]);
//   = 4

// ####################################################################################

// Valid Anagram

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

// #######################################################################################
// Sum zero
function sumZero(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5])

// #######################################################################################
// Unique Values

function countUniqueValues(arr){
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99])


// ####################################################################################
// Max Sum

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// Refactored

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


// ####################################################################################
// Collect Odd Values - Recursive

function collectOddValues(arr){
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])


// ####################################################################################
// Linear Search

function linearSearch(arr, val){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)


// ####################################################################################
// Binary Search

// Original Solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)


// ####################################################################################
// Bubble Sort

// Naive Solution
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// Alt Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7])


// #######################################################################################
// Optimized Bubble Sort w/ noSwaps

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);



// #######################################################################################
// Selection Sort

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// Alt Version
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(arr, i, lowest)
  }
  return arr
}

selectionSort([0,2,34,22,10,19,17]);


// #######################################################################################

// Regex Phone Number Validation
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

// #######################################################################################

// Chunking
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }

// #######################################################################################

// Queue
// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;

// #######################################################################################
// Linked List

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

// #######################################################################################
// Stack

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;

// #######################################################################################
// Spiral Matrix

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;

// #######################################################################################
// Pyramid, similar to pascal

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
