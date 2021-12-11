# tic-tac-toe

## Tech Used
* HTML
* CSS
* Javascript

## Pseudocode
Set up in HTML and CSS:
* Create a 9x9 grid in HTML and CSS
* Create a button and label it "Reset"

Gameplay functionality in Javascript:
* Place O or X in a box upon clicking
* Prevent the same box from being played twice
* Switch players after every turn
* Set all 16 victory conditions - 3 rows, 3 columns, 2 diagonals for each of the 2 players
* Set 1 draw condition
	The minimum turns needed to win a game are 5. The maximum number of turns to win a game is 8. If the game has still not been won by turn 8 then it is      automatically a draw. Need to keep track of the number of turns for this purpose.
* Ask the user to play again after win/draw
* Clicking on the Reset button should reset the game

## Unsolved Problems
* The game prompts the user if they would like to play again after win/draw. It should continue to prompt the user if the input is invalid.
* The game does not declare a draw until the last move of the game. At turn 8, the game should check if victory is still feasible, and declare a draw if it isn't. A further improvement would be to enhance the predictive capabilities of the game, declaring the outcome of the game as early as possible.

## Possible improvements
The following features would be good to include in the game. These are in addition to the ideas suggested in the bonus section of the assignment:
* The game should display who the current player is
* For users that want to study their moves after the game is won/drawn, there should be a feature that shoud allow the player to go through their previous moves.
* I have used location.reset in order to reset the game. This a relatively simple page so reloading it is instantaneous. But for pages with more content, it could lead to a lag that would impact on gameplay. Also, using location.reset is not ideal if the game is embedded into a page as an applet and only want the game to reset and not the entire page.
