# project1
WDI First Project - Blackjack
http://ihross.github.io/project1/

##PROCESS##

My first task in tackling this project was to try and setup a good skeleton in the HTML, and then to
loosely style it with CSS to give it a rough shape. However, as the project progressed I went through a bunch of 
drastic changes (based on experimentation and lots of research) going all the way back to the basic HTML. Initially
I was generating just about everything dynamically in the JavaScript file. When I realized I didn't have to do that
I went back to the drawing board and actually added in the buttons and an input for the bet amount.

After the second day, the CSS wasn't really altered at all, and stayed consistent throughout my various drafts with
JavaScript.

There is, at the bottom of the blackjack.js file, a "Graveyard of Failed Attempts." In reality these are only a
handful of the discarded steps that I was able to save, since they were the ones I just threw out to then start
over, instead of altering bit by bit.

The most important part of getting my code to work was really understanding the arrays and the cards/deck. Once I was
able to get beyond those nagging issues the rest of the process (very slowly) started to open up for me. 

Then, of course, the most prominent part of the code is how I was able to display the card values inside the DOM. This 
took a LOT of additional research and tinkering, as I found it easiest to create HTML tags directly within the 
JavaScript file, giving me more control when applying them to the designated Divs in the actual HTML file.

Lastly, I worked hard with a combination of online resources and some guessing as to how the Win/Lose conditions 
should work. I didn't quite nail them down perfectly, but there's the distinct outline of an MVP, which was really 
my ultimate goal.

##Struggles##

I struggled and faced problems at almost every step of the way, and there were a few I was not able to overcome in 
the allotted time for this assignment. The two most glaring holes in my MVP is the fact that the betting system was 
never really put into place, and is right now about half finished. The other is the unfortunate lack of any real 
Dealer AI, i.e. continuing to draw cards if the value of his hand (after the player Stands) is below 17. I'd like to 
think that with additional time I might've been able to get that to work, but with all the obstacles I encountered 
I ended up just trying to embrace a sliver of pride for what I did get completed.

At least 50% of the issues I got really stuck on were probably either A. Syntactical issues in JavaScript, or B. 
Problems with scope. While I know these will always arise, I'd like to think with time and experience I will 
encounter fewer of these -- or at least not spend so long scratching my head in confusion over them.

##Conclusion##

Overall this was a much more challenging exercise than I originally anticipated, but I feel I learned a lot, with 
far more still to learn about just making this game alone. I truly feel one could spend many weeks just polishing 
this game and adding on logic/features. While I'm not satisfied with my lack of full-game logic and operation, I 
am relieved I was able to get as much done on my own as I did. This was not an easy process.
