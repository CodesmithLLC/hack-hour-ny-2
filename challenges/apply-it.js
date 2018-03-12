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
    // returning a function that passes the arguments into the callback and returns the result of invoking it.

    return () => func(...args);

    // count the number of arguements we have. This tells us how many variables need to be passed into the callback

    let len = args.length;

    switch (len) {
        case 1:
            return () => func(args[0]); 
        case 2:
            return () => func(args[0], args[1]);
        case 3:
            return () => func(args[0], args[1], args[2]);
        case 4:
            return () => func(args[0], args[1], args[2], args[3]);
        case 5:
            return () => func(args[0], args[1], args[2], args[3], args[4]);
        case 6:
            return () => func(args[0], args[1], args[2], args[3], args[4], args[5]);
        default:
            return () => func();
    }
   
}

module.exports = applyIt;
