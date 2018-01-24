// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    const res = [];


    if (num > 0) {
        for (let i = 1; i <= Math.abs(num); i++) {
            let value = i;
            if (divisbleby(value, 3) && divisbleby(value, 5)) {
                value = "fizzbuzz";
            } else if (divisbleby(value, 3)) {
                value = "fizz";
            } else if (divisbleby(value, 5)) {
                value = "buzz";
            }

            res.push(value);
        }
    } else if (num <= 0) {
        for (let i = 1; i >= num; i--) {
            let value = i;
            if (divisbleby(value, 3) && divisbleby(value, 5)) {
                value = "fizzbuzz";
            } else if (divisbleby(value, 3)) {
                value = "fizz";
            } else if (divisbleby(value, 5)) {
                value = "buzz";
            }
            res.push(value);
        }
    }

    return res;

    function divisbleby(value, factor) {
        return (Math.abs(value) % factor === 0);
    }
}

module.exports = fizzbuzz;
