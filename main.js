//  Algo Gang is brought to you by Terence, Jamil, John, and Miguel


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
