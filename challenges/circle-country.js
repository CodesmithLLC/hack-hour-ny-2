/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  //it's actually pretty easy w/o this obj
  const obj = {};
  for (let i = 0; i < x.length; i++) {
    obj[i] = [x[i], y[i], r[i]];
  }
  // const distanceToTravelX = end_x - start_x;
  // const distanceToTravelY = end_y - start_y;
  let count = 0;
  for (let j = 0; j < x.length; j++) {
    let max_x = obj[j][0] + obj[j][2];
    let min_x = obj[j][0] - obj[j][2];
    let max_y = obj[j][1] + obj[j][2];
    let min_y = obj[j][1] - obj[j][2];
    if (start_x > min_x && start_x < max_x && start_y > min_y && start_y < max_y) count++;
    if (end_x > min_x && end_x < max_x && end_y > min_y && end_y < max_y) count++;
  }
  return count;
}

// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   const distanceToTravelX = end_x - start_x;
//   const distanceToTravelY = end_y - start_y;
//   const slope = distanceToTravelY / distanceToTravelX;
//   let x = start_x;
//   let y = start_y;

//   while (x !== end_x && y !== end_y) {
     

//     x += 1;
//     y += slope;
//   }

// }

module.exports = circleCountry;
