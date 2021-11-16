// let fields = [];
let player1 = '';
let player2 = '';
let whoIsNext = true; // true = P1 ist dran. false = P2 ist dran.

function init() {
  // Clear table
  for (let i = 1; i < 10; i++) {
    let field = document.getElementById(i);

    field.classList.remove('ring', 'cross');
    field.onclick = function () {
      fieldSelection(i);
    };
  }
}

function fieldSelection(id) {
  let selectedField = document.getElementById(id);

  if (whoIsNext == true) {
    selectedField.classList.add('cross');
    // fields[id] = 'cross';
    selectedField.onclick = '';
    whoIsNext = false;
    console.log(document.getElementById(id).classList.item(0));
    document.getElementById('playerShown').innerHTML = `
    ${player2} ist dran!
  `;
  } else {
    selectedField.classList.add('ring');
    // fields[id] = 'ring';
    selectedField.onclick = '';
    whoIsNext = true;
    console.log(document.getElementById(id).classList.item(0));
    document.getElementById('playerShown').innerHTML = `
    ${player1} ist dran!
  `;
  }
  checkForWin();
}

function startGame() {
  player1 = document.getElementById('player1').value;
  player2 = document.getElementById('player2').value;
  document.getElementById('playerShown').innerHTML = `
    ${player1} ist dran!
  `;
}

function checkForWin() {
  for (let i = 0; i < 3; i++) {
    if (
      //senkrecht
      document.getElementById(1 + i).classList.item(0) != null &&
      document.getElementById(4 + i).classList.item(0) != null &&
      document.getElementById(7 + i).classList.item(0) != null &&
      document.getElementById(1 + i).classList.item(0) ==
        document.getElementById(4 + i).classList.item(0) &&
      document.getElementById(4 + i).classList.item(0) ==
        document.getElementById(7 + i).classList.item(0)
    ) {
      winnerIs(i);
    }

    if (
      //waagerecht
      document.getElementById(1 + i).classList.item(0) != null &&
      document.getElementById(2 + i).classList.item(0) != null &&
      document.getElementById(3 + i).classList.item(0) != null &&
      document.getElementById(1 + i).classList.item(0) ==
        document.getElementById(2 + i).classList.item(0) &&
      document.getElementById(2 + i).classList.item(0) ==
        document.getElementById(3 + i).classList.item(0)
    ) {
      winnerIs(i);
    }
  }
  if (
    document.getElementById(1).classList.item(0) != null &&
    document.getElementById(5).classList.item(0) != null &&
    document.getElementById(9).classList.item(0) != null &&
    document.getElementById(1).classList.item(0) ==
      document.getElementById(5).classList.item(0) &&
    document.getElementById(5).classList.item(0) ==
      document.getElementById(9).classList.item(0)
  ) {
    winnerIs(0);
  }
  if (
    document.getElementById(3).classList.item(0) != null &&
    document.getElementById(5).classList.item(0) != null &&
    document.getElementById(7).classList.item(0) != null &&
    document.getElementById(3).classList.item(0) ==
      document.getElementById(5).classList.item(0) &&
    document.getElementById(5).classList.item(0) ==
      document.getElementById(7).classList.item(0)
  ) {
    winnerIs(3);
  }
}

function winnerIs(i) {
  if (document.getElementById(1 + i).classList.item(0) == 'cross') {
    document.getElementById(
      'playerShown'
    ).innerHTML = `${player1} hat gewonnen!`;
  } else {
    document.getElementById(
      'playerShown'
    ).innerHTML = `${player2} hat gewonnen!`;
  }
  disableOnclick();
}

function disableOnclick() {
  for (let i = 1; i < 10; i++) {
    document.getElementById(i).onclick = '';
  }
}
