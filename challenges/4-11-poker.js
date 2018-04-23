/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  const [rank1, max1] = checkRank(hand1);
  const [rank2, max2] = checkRank(hand2);
  const result = compare(rank1, max1, rank2, max2);
  if (result === 0) return 'Draw';
  if (result === 1) return 'Player 1 wins';
  if (result === 2) return 'Player 2 wins';
}

function checkRank(hand) {  //return [rank, max]
  hand.sort((a, b) => b - a);
  let rank;
  let max;
  let mostCount = 1, secondCount = 1;
  const count = {};
  hand.forEach((card) => {
    if (count[card]) count[card]++;
    else count[card] = 1;
  })
  const keys = Object.keys(count);
  const n = keys.length;
  if (n === 2) {
    let card1 = Number(keys[0]);
    let card2 = Number(keys[1]);
    if (count[card1] === 4) return [1, [card1]];
    if (count[card1] === 1) return [1, [card2]];
    if (count[card1] === 3) return [2, [card1]];
    if (count[card1] === 2) return [2, [card2]];
  }
  if (n === 3) {
    max = [1, 1, 1];
    let card1 = Number(keys[0]);
    let card2 = Number(keys[1]);
    let card3 = Number(keys[2]);
    if (count[card1] === 3) return [4, [card1]];
    if (count[card2] === 3) return [4, [card2]];
    if (count[card3] === 3) return [4, [card3]];
    if (count[card1] === 2 && count[card2] === 2) {
      max[0] = card1 > card2 ? card1 : card2;
      max[1] = card1 > card2 ? card2 : card1;
      max[2] = card3;
    }
    if (count[card1] === 2 && count[card3] === 2) {
      max[0] = card1 > card3 ? card1 : card3;
      max[1] = card1 > card3 ? card3 : card1;
      max[2] = card2;
    }
    if (count[card2] === 2 && count[card3] === 2) {
      max[0] = card2 > card3 ? card2 : card3;
      max[1] = card2 > card3 ? card3 : card2;
      max[2] = card1;
    }
    return [5, max];
  }
  if (n === 4) {
    max = [1, 1, 1, 1];
    let temp = [];
    for (let card in count) {
      if (count[card] === 2) max[0] = Number(card);
      if (count[card] === 1) {
        temp.push(Number(card));
      }
    }
    temp.sort((a, b) => b - a);
    max[1] = temp[0];
    max[2] = temp[1];
    max[3] = temp[2];
    return [6, max];
  }
  if (n === 5) {
    max = hand[0];
    for (let i = 1; i < 5; i++) {
      if (max - hand[i] !== i) return [7, [max]];
    }
    return [3, [max]];
  }
  return;
}

function compare(rank1, max1, rank2, max2) {
  if (rank1 < rank2) return 1;
  if (rank1 > rank2) return 2;
  for (let i = 0; i < max1.length; i++) {
    if (max1[i] > max2[i]) return 1;
    if (max1[i] < max2[i]) return 2;
  }
  return 0;
}

module.exports = poker;
