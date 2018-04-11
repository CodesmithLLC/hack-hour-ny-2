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
  const hands = ['high-card', '2-pair', '3-of-a-kind', 'straight', 'full-house', '4-of-a-kind'];
  let player1 = checkHand(hand1);
  let player2 = checkHand(hand2);
  if (hands.indexOf(player1[0]) > hands.indexOf(player2[0])) return 'Player 1 wins';
  if (hands.indexOf(player1[0]) < hands.indexOf(player2[0])) return 'Player 2 wins';
  if (hands.indexOf(player1[0]) === hands.indexOf(player2[0])) {
    let p1Sum = 0;
    let p2Sum = 0;
    for (let i = 1; i < player1.length; i++) {
      p1Sum += player1[i];
      p2Sum += player2[i]
    }
    if (p1Sum > p2Sum) return 'Player 1 wins';
    if (p1Sum < p2Sum) return 'Player 2 wins';
    return 'Draw';
  }

}

function checkHand(hand) {
  const handSorted = hand.sort((a, b) => a - b);
  const obj = {};
  let fourOfAKind = false;
  let threeOfAKind = false;
  let twoPair = false;
  let straight = true;
  let cardNum = 0;
  let cardNumTwo = 0;
  for (let i = 0; i < handSorted.length; i++) {
    if(!obj[handSorted[i]]) obj[handSorted[i]] = 1;
    else obj[handSorted[i]]++;
  }
  for (let card in obj) {
    if (obj[card] == 4) {
      fourOfAKind = true;
      cardNum = card;
      return ['fourOfAKind', cardNum]
    }
    if (obj[card] == 3) {
      threeOfAKind = true;
      cardNum = card;
      break;
    }
    if (obj[card] == 2) {
      twoPair = true;
      cardNumTwo = card;
    }
  }

  for (let i = 1; i < handSorted.length; i++) {
    let next = parseInt(handSorted[i]);
    let prev = parseInt(handSorted[i - 1]);
    if (next !== prev + 1) straight = false;
  } 
  
  if (threeOfAKind && twoPair) return ['full-house', cardNum, cardNumTwo];
  if (straight) return ['straight', handSorted[handSorted.length - 1]]
  if (threeOfAKind) return ['3-of-a-kind', cardNum];
  if (twoPair) return ['2-pair', cardNumTwo];
  return ['high-card', handSorted[handSorted.length - 1]];
}

module.exports = poker;
