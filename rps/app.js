/**
* LOGIC
*/

var score = 0;
var playerChoice;

var readable = {
  '0': 'Slim Body',
  '1': 'Calorie Food',
  '2': 'Exercise'
};

var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
  },
  store: '',
  text: ''
};

var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu) {
  if(order[player] === order[cpu]) {
    return 'The game is tied. Try again?';
  }
  if(order[player] === order[cpu + 1]) {
    score++;
    return "You won!";
  } else {
    score--;
    return 'You lost :(';
  }
}

/**
* UI
*/

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos) {
  // assign a click listener
  tag.addEventListener('click', function() {
    // set the players choice
    playerChoice = pos;
    // give feedback to the cpu cpuChoice
    cpuChoice.init();
    paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
    // determine a winner
    // display the winner and the current score
    paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
    paragraph.innerText += '\n' + 'SCORE: ' + score;
  });
}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
