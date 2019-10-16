// //  This section is for misc interview prep/general js questions
//
// // // What is a promise?
// //
// // A promise must follow a specific set of rules,
// //
// // A promise is an object that supplies a standard-compliant .then() method
// // A pending promise may transition into either fulfilled or rejected state
// // A fulfilled or rejected promise is settled and it must not transition into any other state.
// // Once a promise is settled, the value must not change.
//
//
// // ###################################################################################

// Currying
//
// Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. This technique can be useful for making code written in a functional style easier to read and compose. It's important to note that for a function to be curried, it needs to start out as one function, then broken out into a sequence of functions that each accepts one parameter.
//
// function curry(fn) {
//   if (fn.length === 0) {
//     return fn;
//   }
//
//   function _curried(depth, args) {
//     return function(newArgument) {
//       if (depth - 1 === 0) {
//         return fn(...args, newArgument);
//       }
//       return _curried(depth - 1, [...args, newArgument]);
//     };
//   }
//
//   return _curried(fn.length, []);
// }
//
// function add(a, b) {
//   return a + b;
// }
//
// var curriedAdd = curry(add);
// var addFive = curriedAdd(5);
//
// var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
