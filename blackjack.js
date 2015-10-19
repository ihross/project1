// Blackjack Project

// A basic implementation of this project should probably include:
// A way to keep track of the current player bankroll ( a player should be able to play multiple hands and the bankroll should reflect wins and losses)
// A way for players to make a bet
// A way for players to get more cards, or declare themselves happy with their current hand
// A way for players to bust
// A way for players to win or tie

console.log("works!");

////////////////////////////
//////Global Variables//////
////////////////////////////

// Initialize card arrays.
var dealerCards = [];
var playerCards = [];

// The deck array is kept empty so as to push in the cardTypes and the 4 suits (from the suitArray) together.
var deck = [];

// For now, the bankroll starts at a default of 10 to get the MVP working
var bankroll =  10;

// The amount at the start of each deal, which is defaulting at 1 for the MVP
var bet = 1;

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
/////////Functions//////////
////////////////////////////

// A function called immediately that generates a deck combining the cardTypes with the suits.
// It requires multiple for loops and my first use of JSON (JavaScript Object Notation), which it then turns into a string.
var generateDeck = function() {
	for(var s in suitsArray) { // iterate through suits
		for(var t in cardTypes) { // iterate through types
		
            // create new card object and set attributes
			var card = {};
			card.suit = suitsArray[s];
			card.name = cardTypes[t].name;
			card.value = cardTypes[t].value;
			
			deck.push(card); // push one of each card into the deck
		}
	}
};

// This is the function that attaches the created/shuffled cards to the DOM and displays their keys/values.
// It also is responsible for one of the dealer's cards being hidden.
var renderCards = function(dealerCardIsHidden) {
    var i;
    var html;
    
    // Display all the dealer's cards and score.
    // If dealerCardIsHidden == true
    // then hide a card and don't include it in the total score.
    html = '<ul>';
    if(dealerCardIsHidden) { // hide a card
        // only show the first card
        html += '<li>' + dealerCards[0].name + ' of ' + dealerCards[0].suit + '</li>';
        html += '<li>?</li>';
        document.getElementById('dealerScore').innerHTML = dealerCards[0].value;
    }
    else {
        for(i in dealerCards) { // show all cards
            html += '<li>' + dealerCards[i].name + ' of ' + dealerCards[i].suit + '</li>';
        }
        document.getElementById("dealerScore").innerHTML = getHandValue(dealerCards);
    }
	html += '</ul>';
	document.getElementById('dealer').innerHTML = html;
    
    // Display all the player's cards and score.
	html = '<ul>';
	for(i in playerCards) {
		html += '<li>' + playerCards[i].name + ' of ' + playerCards[i].suit + '</li>';
	}
	html += '</ul>';
	document.getElementById('player').innerHTML = html;
    document.getElementById('playerScore').innerHTML = getHandValue(playerCards);
};

// Fisher–Yates card shuffle
var shuffle = function() {
    for(var i = 0; i < deck.length - 1; i++) { // loop through all cards
        // get a random index >= this index
        var randomIndex = Math.floor(Math.random() * (deck.length - i) + i);
        
        // swap this index with the random index
        var temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
    }
};

// Function to initialize a round.
var newRound = function() {
    // Clear the hands.
    dealerCards = [];
    playerCards = [];
    
    // Clear alerts.
    document.getElementById('alert-info').innerHTML = "";
    
    // Display the new bankroll.
    document.getElementById('bankroll').innerHTML = bankroll;
    
    shuffle();

    // Deal beginning cards.
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());

    roundInProgress(); // Set button enable/disable states.
};

// Function to initialize the very beginning of the game (not a new round).
var start = function() {
    bankroll = 10;
    generateDeck();
    newRound();
};

// The hitMeButton will take another card from the deck array and use previously declared functions
// to display that extra card on the screen.
var hitMe = function() {
	playerCards.push(deck.pop()); // get a new card
	
	// Did you bust?
    if(getHandValue(playerCards) > 21) {
        bankroll -= bet; // You lost money.
        document.getElementById('alert-info').innerHTML = "Bust!";
        roundOver(); // Set button enable/disable states.
    }
    else {
        roundInProgress(); // Set button enable/disable states.
    }
};

// Set button enable/disable states for when a round has ended.
var roundOver = function() {
    document.getElementById('hit-me').disabled = true;
    document.getElementById('stand').disabled = true;
    document.getElementById('place-bet').disabled = false;
    renderCards(false);
};

// Set button enable/disable states for while the game is in progress.
var roundInProgress = function() {
    document.getElementById('hit-me').disabled = false;
    document.getElementById('stand').disabled = false;
    document.getElementById('place-bet').disabled = true;
    renderCards(true);
};

// This button activates the showOneDealerCard function and causes the player's turn to end.
var stand = function() {
    roundOver();
	
	if(getHandValue(dealerCards) > 21) {
        document.getElementById('alert-info').innerHTML = "Dealer busts!";
    } else if(getHandValue(playerCards) > getHandValue(dealerCards)) {
        bankroll += bet;
        document.getElementById('alert-info').innerHTML = "You win!";
    } else {
        bankroll -= bet;
        document.getElementById('alert-info').innerHTML = "You lose!";
    }
};


// The function that allows the player to place his bet. Currently the display is just aesthetic and doesn't affect the game itself.
var placeBet = function() {
    newRound();
};

var getHandValue = function(cards) {
    var total = 0;
    for(var i in cards)
        total += cards[i].value;
        
    return total;
};


////////////////////////////
//////////Buttons///////////
////////////////////////////

// Bind functions to button click events.
document.getElementById('start').onclick = start;
document.getElementById('shuffle').onclick = shuffle;
document.getElementById('hit-me').onclick = hitMe;
document.getElementById('stand').onclick = stand;
document.getElementById('place-bet').onclick = placeBet;













///////////////////////////////////////////////
/////////Graveyard of Failed Attempts//////////
///////////////////////////////////////////////

// // The computers automated move that occurs after the player's
// var computerMove = function() {
// }
// // This is invoked when each round ends, before the next shuffle
// var endRound = function() {
// }
// // The function that is invoked at the end of the game
// var endGame = function() {
// }

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

