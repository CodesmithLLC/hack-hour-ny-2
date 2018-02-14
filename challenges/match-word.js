// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
function matchWord(str) {
    let stack = [];
    let input = str;

    for (let i = 0; i < input.length; i += 1) {
        //find first alphnumeric
        if (alphanum(input[i])) {
            //concat alphanumeric word
            let word = [];
            while (alphanum(input[i])) {
                if (i > input.length - 1) return false;
                word.push(input[i].toLowerCase());
                i++;
            }

            //when I hit a nonalphanumeric 
            let closing = stack.indexOf(word.reverse().join(""))
            //check if its reverse if already in the stack
            if (closing !== -1) {
                //if it is at the last index pop the last index
                if (closing === stack.length - 1) stack.pop();
                //if it is not at the last index return false
                else return false;
            } else {
                // if the reverse is not in the stack push it to the stack
                stack.push(word.reverse().join(""));
            }
        }
    }
    //if the stack is empty after going through the whole str return true
    if (stack.length === 0) return true;
    return false;
}

function alphanum(input) {
    if (!input) return false;
    return input.match(/^[a-z0-9]+$/i) !== null;
}

module.exports = matchWord;
