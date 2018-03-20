/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
    // console.log(args);
    // return () => func(...args)
    // if (args.length === 0) {
    //   return function() {
    //     return func;
    //   }
    // }
    // if (args.length === 1) {
    //   return function() {
    //     return func(args[0]);
    //   }
    // }
    // if (args.length === 2) {
    //   return function() {
    //     return func(args[0], args[1]);
    //   }
    // }
    // if (args.length === 3) {
    //   return function () {
    //     return func(args[0], args[1], args[2]);
    //   }
    // }
  }
module.exports = applyIt;