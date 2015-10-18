// Blackjack Project

// A basic implementation of this project should probably include:
// A way to keep track of the current player bankroll ( a player should be able to play multiple hands and the bankroll should reflect wins and losses)
// A way for players to make a bet
// A way for players to get more cards, or declare themselves happy with their current hand
// A way for players to bust
// A way for players to win or tie

////////////////////////////
//////Global Variables//////
////////////////////////////


var dealerCards = [];
var playerCards = [];

// For now, the bankroll starts at a default of 10 to get the MVP working
var bankroll =  10;

// The amount at the start of each deal, which is defaulting at 1 for the MVP
var initialBet = 0;

// The amount the player is betting
var betAmount = 0;

// The deck array is kept empty so as to push in the cardTypes and the 4 suits (from the suitArray) together.
var deck = [];

// The 13 different card types in a deck with 2 key/value pairs, before the suit is added on.
var cardTypes = [
	cardTwo = {
	name : "Two",	
	value : 2,
	},				
	cardThree = {
	name : "Three",	
	value : 3,
	},
	cardFour = {
	name : "Four",	
	value : 4,
	},		
	cardFive = {
	name : "Five",
	value : 5,
	},
	cardSix = {
	name : "Six",
	value : 6,
	},
	cardSeven = {
	name : "Seven",
	value : 7,
	},	
	cardEight = {
	name : "Eight",	
	value : 8,
	},		
	cardNine = {
	name : "Nine",	
	value : 9,
	},
	cardTen = {
	name : "Ten",
	value : 10,
	},
	cardJack = {
	name : "Jack",	
	value : 10,
	},	
	cardQueen = {
	name : "Queen",	
	value : 10,
	},
	cardKing = {
	name : "King",
	value : 10,
	},
	cardAce = {
	name: "Ace",
	value : 11,
	}	
];

// The array of suits to be added to the cardTypes and put into the (currently) empty "deck" array.
var suitsArray = ["Hearts", "Diamonds", "Clubs", "Spades"];



////////////////////////////
///////More Functions///////
////////////////////////////

// A function called immediately that generates a deck combining the cardTypes with the suits.
// It requires multiple for loops and my first use of JSON (JavaScript Object Notation).
var generateDeck = function() {
	for(var s in suitsArray) {
		var suit = suitsArray[s];
		for(var t in cardTypes) {
			var card = cardTypes[t];
			card = JSON.parse(JSON.stringify(card));
			card.suit = suit;
			deck.push(card);
		}
	}
}

var assignSuitPlayer = function() {
	for(var x = 0; x < playerCards.length; x++) {
		var randomSuit = randomFunction(4);
		player[x].suit = suitsArray[randomSuit];
	}
}

var dealerCards = [];
var playerCards = [];

// This is the function that attaches the created/shuffled cards to the DOM and displays their keys/values.
// It also is responsible for one of the dealer's cards being hidden.
var renderCards = function() {
    var card;
	var html = '<ul>';
	for(var c in playerCards) {
		card = playerCards[c];
		html += '<li>'+card.name+' of '+card.suit+'<sup>'+card.value+'</sup>'+'</li>';
	}
	html += '</ul>';
	
	document.getElementById('player').innerHtml = html;

	html = '<ul>';
	for(c in dealerCards) {
		card = dealerCards[c];
		if(card.visible) {
			html += '<li>'+card.name+' of '+card.suit+'<sup>'+card.value+'</sup>'+'</li>';
			continue;
		}

		html += '<li>?</li>';
	}
	html += '</ul>';
	
	document.getElementById('dealer').innerHtml = html;
}

// This function is used to show the hidden card in the dealer's hand after the player hits "stand".
var showOneDealerCard = function() {
	for(var c in dealerCards) {
		var card = dealerCards[c];
		if(card.visible) {
			continue;
		}

		card.visible = true;
		dealerCards[c] = card;
		break;
	}

	renderCards();
}



// The function that shuffles the order of cards that are in in the deck
// Requires the "deck" to be put in as the argument, while "cards" is written as a filler for the parameter
var shuffle = function(cards) {
    for(var i = 0; i < deck.length - 1; i++) {
        var randomIndex = Math.floor(Math.random() * (deck.length - i) + i);
        
        // swap this index with a random index, between this and 51
        var temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
    }
};

// The function to start of the game 
var start = function() {
    generateDeck();
    shuffle();

    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());
    
    showOneDealerCard();
}

// The hitMeButton will take another card from the deck array and use previously declared functions
// to display that extra card on the screen.
var hitMe = function() {
	shuffle(deck);
	playerCards.push(deck.pop());
	renderCards();
}

// This button activates the showOneDealerCard function and causes the player's turn to end.
var stand = function() {
	showOneDealerCard();
}


// The function that allows the player to place his bet. Currently the display is just aesthetic and doesn't affect the game itself.
var placeBet = function() {
/*	makeBet.onclick = function() {
		// console.log("Placing bet!");
		bankrollDisplay.innerHTML = "Bankroll: " + "$" +  (bankroll -= 1);
		betAmountDisplay.innerHTML = "Bet amount: " + "$" +  (betAmount += 1);
	}*/
}
placeBet();



////////////////////////////
//////////Buttons///////////
////////////////////////////

// Bind functions to button click events.
document.getElementById('start').onclick = start;
document.getElementById('shuffle').onclick = shuffle;
document.getElementById('hit-me').onclick = hitMe;
document.getElementById('stand').onclick = stand;
document.getElementById('place-bet').onclick = placeBet;








// // The computers automated move that occurs after the player's
// var computerMove = function() {

// }

// // This is invoked when each round ends, before the next shuffle
// var endRound = function() {

// }

// // The function that is invoked at the end of the game
// var endGame = function() {

// }






///////////////////////////////////////////////
/////////Graveyard of Failed Attempts//////////
///////////////////////////////////////////////


// // The initial deal for the computer 
// var initialComputerDeal = function() {
// }
// // The initial deal for the player 
// var initialPlayerDeal = function() {
// }
// // The player's move/choices at each turn
// var playerMove = function() {
// }

 // for (i = 0; i < deck.length; i++) {
	// 	var card = deck[i].name.value;
	// };

// The function to make an actual playable deck
// var makeDeck = function() {
// 	var ranks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9",
//                   			"10", "Jack", "Queen", "King");
// 	var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
// 	var allCards = ranks.length * suits.length;
// 	// console.log(allCards);
// 	deck.push(allCards);
// 	// console.log(newDeck);
// }
// makeDeck();


// The shuffle function
// var shuffleFunction = function() {
// 	makeShuffle.onclick = function() {
// 		// console.log("Shuffling!");


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

