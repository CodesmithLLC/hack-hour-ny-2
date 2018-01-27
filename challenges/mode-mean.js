/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const mode = getMode();
    const mean = Math.floor(getMean());

    return (mode === mean)

    function getMode() {
        const counter = {};
        counter.mostFreqKey = array[0];
        counter.highestCount = 1;
        for (let i = 0; i < array.length; i += 1) {
            if (!counter[array[i]]) counter[array[i]] = 1;
            else {
                counter[array[i]] = counter[array[i]] + 1;
                if(counter[array[i]] > counter.highestCount) {
                    counter.mostFreqKey = array[i];
                    counter.highestCount = counter[array[i]];
                } else if (counter[array[i]] === counter.highestCount) {
                    if (array[i] > counter.mostFreqKey) counter.mostFreqKey = array[i]
                }
            }
        }
        return counter.mostFreqKey;
    }

    function getMean() {
       let sum = 0;
        for (let i = 0; i < array.length; i += 1) {
            sum += array[i];
        }

        return sum/array.length;
    }

}

module.exports = modemean;
