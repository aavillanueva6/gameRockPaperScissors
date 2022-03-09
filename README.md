# Rock Paper Scissors Game

## Purpose and Functionality

This site was built to practice html, css, and js. The site provides the user with buttons to select either rock, paper, or scissors (there is also hidden cheat button). When the user clicks on a button, the site runs a script to randomly select a choice (either rock, paper, or scissors) and then it displays both the user choice and computer choice, and analyzes to determine the winner. It then displays the results.

The cheat button is hidden in the very bottom left of the page. It first calculates the computer choice then determines what the user choice needs to be in order to win, then makes that choice for the user.

Upon clicking an option, a fourth button to reset the game is displayed. This button is used to hide the previous round's selections and result. This functionality is also incorporated into the selection buttons, so that even if the user doesn't select the reset, the game is still initialized properly.

After stats have been generated, a clear stats button appears. Clicking that button will reset all stats to 0 and reset the game.

## Key Learnings

- structure to link a separate javascript file using the \<script> element
- adding functionality to buttons via event listeners in JS
- pushing values from JS to html using .innerHTML method.
- html table formatting
- custom animation using CSS, html, and JS.
  - defining an animation class in the CSS, including keyframes and building the actual animation
  - pushing and removing classes to html elements using JS.
- use of setTimeout to delay the execution of an inner function.

## Deployed Site

The deployed site is hosted on github pages at the following link:

https://aavillanueva6.github.io/gameRockPaperScissors/

## Known Bugs

- none

## Unimplemented Features still wanted

- add asterisk to wins column if cheat button is used - I added a cheat message that is sticky the asterisk would follow the same logic, but with an additional \<span> elemene
- finish styling in CSS
