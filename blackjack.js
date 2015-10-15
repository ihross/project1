console.log('Works!');


////////////////////////////
//////Global Variables//////
////////////////////////////

// Dealer array starts blank
var dealerArray = [];
// Player starts blank
var playerArray = [];

// For now, the bankroll starts at a default of 5 to get the MVP working
var bankroll =  10;

// The amount at the start of each deal, which is defaulting at 1 for the MVP
var initialBet = 0;

// The amount the player is betting
var betAmount = 0;

// An empty array for a new deck
var newDeck = [];



////////////////////////////
//////////Buttons///////////
////////////////////////////

// The variable 'getStart' accesses the start-button ID
var getStart = document.getElementById('start-button');
var makeStart = document.createElement('button');
getStart.appendChild(makeStart);
makeStart.innerHTML="Start Game";
// console.log(getStart);

// The button that shuffles the deck
var shuffleButton = document.getElementById('shuffle');
var makeShuffle = document.createElement('button');
shuffleButton.appendChild(makeShuffle);
makeShuffle.innerHTML = "Shuffle";

// The button where the player asks "Hit Me!"
var hitMeButton = document.getElementById('hit-me');
var makeHitMe = document.createElement('button');
hitMeButton.appendChild(makeHitMe);
makeHitMe.innerHTML = "Hit Me!"; 

// The button that causes the player to stand
var standButton = document.getElementById('stand');
var makeStand = document.createElement('button');
standButton.appendChild(makeStand);
makeStand.innerHTML = "Stand"; 

// The button that places the intial bet
var betButton = document.getElementById('place-bet');
var makeBet = document.createElement('button');
betButton.appendChild(makeBet);
makeBet.innerHTML = "Place Bet"; 


////////////////////////////
//////Appending Areas///////
////////////////////////////


// Appending the dealerArray to the document
var getDealer = document.getElementById('dealer');
var dealerArea = document.createElement('p');
getDealer.appendChild(dealerArea);
dealerArea.innerHTML = dealerArray;

// Appending the playerArray to the document
var getPlayer = document.getElementById('player');
var playerArea = document.createElement('p');
getPlayer.appendChild(playerArea);
playerArea.innerHTML = playerArray;

// Appending the bankroll to the document
var getBankroll = document.getElementById('bankroll');
var bankrollDisplay= document.createElement('p');
getBankroll.appendChild(bankrollDisplay);
bankrollDisplay.innerHTML = "Bankroll: " + "$" + bankroll;

// Appending the betAmount to the document
var getBetAmount = document.getElementById('bet-amount');
var betAmountDisplay= document.createElement('p');
getBetAmount.appendChild(betAmountDisplay);



////////////////////////////
/////////Functions//////////
////////////////////////////


// Random number generator function
var randomFunction = function(max) {
	var randomNumber = Math.floor(Math.random() * max);
	//console.log(randomNumber);
	return randomNumber;
}


// var makeDeck = function(decks) {
//   var ranks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9",
//                         "10", "Jack", "Queen", "King");
//   var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
//   var i; 
//   var x; 
//   var y;
//   var fullCards;

//   fullCards = ranks.length * suits.length;

//   // Set array of the actual cards' values
//   this.cards = new Array(decks * fullCards);

//   // Fill the array with the pack of cards
//   for (i = 0; i < decks; i++) {
//     for (x = 0; x < suits.length; x++) {
//       for (y = 0; y < ranks.length; y++) {
//         this.cards[i * fullCards + x * ranks.length + y] = new Card(ranks[y], suits[x]);
//       }
//     }
//   }
// }
// makeDeck();


// The function start of the game 
var startOfGame = function() {
	makeStart.onclick = function() {
		// console.log("Game starts!");
	}
}
startOfGame();

var makeDeck = function() {
	var ranks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9",
                  			"10", "Jack", "Queen", "King");
	var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");

	var allCards = ranks.length * suits.length;
}


// The shuffle function
var shuffleFunction = function() {
	makeShuffle.onclick = function() {
		// console.log("Shuffling!");

	}
}

// The function that allows the player to place his bet
var placeBet = function() {
	makeBet.onclick = function() {
		// console.log("Placing bet!");
		bankrollDisplay.innerHTML = "Bankroll: " + "$" +  (bankroll -= 1);
		betAmountDisplay.innerHTML = "Bet amount: " + "$" +  (betAmount += 1);
	}
}
placeBet();


// The initial deal for the computer 
var initialComputerDeal = function() {

}

// The initial deal for the player 
var initialPlayerDeal = function() {

}

// The player's move/choices at each turn
var playerMove = function() {

}

// The computers automated move that occurs after the player's
var computerMove = function() {

}

// This is invoked when each round ends, before the next shuffle
var endRound = function() {

}

// The function that is invoked at the end of the game
var endGame = function() {

}






///////////////////////////////////////////////
///////Graveyard of Failed Attempts////////////
///////////////////////////////////////////////


// var getScore = function() {
//   var i; 
//   var total = 0;
//   // Total card values counting Aces as one.
  // for (i = 0; i < this.cards.length; i++)
  //   if (this.cards[i].rank == "A")
  //     total++;
  //   else {
  //     if (this.cards[i].rank == "J" || this.cards[i].rank == "Q" ||
  //         this.cards[i].rank == "K")
  //       total += 10;
  //     else
  //       total += parseInt(this.cards[i].rank, 10);
  //   }
  // Change as many ace values to 11 as possible.
//   for (i = 0; i < this.cards.length; i++)
//     if (this.cards[i].rank == "A" && total <= 11)
//       total += 10;
//   return total;
// }
// console.log(getScore());


// var shuffle = function(deck) {
//     for (var i = 0; i < 52; i++)    
//         newDeck[i] = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
//     return newDeck;
// }    
//  shuffle(deck)


// for (var i = 0; i < 52; i++) {    
//     newDeck[i] = makeDeck.splice(Math.floor(Math.random() * makeDeck.length), 1)[0];
//   }


// function Stack() {
//   // Create an empty array of cards.
//   this.cards = new Array();
//   this.makeDeck  = stackMakeDeck;
//   this.shuffle   = stackShuffle;
//   this.deal      = stackDeal;
//   this.cardCount = stackCardCount;
// }


// var Card = function(rank, suit) {
//   this.rank = rank;
//   this.suit = suit;
//   this.createNode = cardCreateNode;
// }


// var deck = [
// // Diamonds
// 	{"diamonds" : 2},
// 	{"diamonds" : 3},
// 	{"diamonds" : 4},
// 	{"diamonds" : 5},
// 	{"diamonds" : 6},
// 	{"diamonds" : 7},
// 	{"diamonds" : 8},
// 	{"diamonds" : 9},
// 	{"diamonds" : 10},
// 	{"diamondsJack" : 10},
// 	{"diamondsQueen" : 10},
// 	{"diamondsKing" : 10},	
// 	{"diamondsAce" : 11},
// // Clubs
// 	{"clubs" : 2},
// 	{"clubs" : 3},
// 	{"clubs" : 4},
// 	{"clubs" : 5},
// 	{"clubs" : 6},
// 	{"clubs" : 7},
// 	{"clubs" : 8},
// 	{"clubs" : 9},
// 	{"clubs" : 10},
// 	{"clubsJack" : 10},
// 	{"clubsQueen" : 10},
// 	{"clubsKing" : 10},	
// 	{"clubsAce" : 11},
// // Spades
// 	{"spades" : 2},
// 	{"spades" : 3},
// 	{"spades" : 4},
// 	{"spades" : 5},
// 	{"spades" : 6},
// 	{"spades" : 7},
// 	{"spades" : 8},
// 	{"spades" : 9},
// 	{"spades" : 10},
// 	{"spadesJack" : 10},
// 	{"spadesQueen" : 10},
// 	{"spadesKing" : 10},	
// 	{"spadesAce" : 11},
// // Hearts
// 	{"hearts" : 2},
// 	{"hearts" : 3},
// 	{"hearts" : 4},
// 	{"hearts" : 5},
// 	{"hearts" : 6},
// 	{"hearts" : 7},
// 	{"hearts" : 8},
// 	{"hearts" : 9},
// 	{"hearts" : 10},
// 	{"heartsJack" : 10},
// 	{"heartsQueen" : 10},
// 	{"heartsKing" : 10},	
// 	{"heartsAce" : 11}, ,
// ]
// console.log(deck);

