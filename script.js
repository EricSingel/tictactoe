// let fields = [];
let player1 = '';
let player2 = '';
let whoIsNext = true; // true = P1 ist dran. false = P2 ist dran.

function init() {
  // Clear table
  for (let i = 1; i < 10; i++) {
    let field = document.getElementById(i);

    field.classList.remove('ring', 'cross');
  }
}

function fieldSelection(id) {
  let selectedField = document.getElementById(id);

  if (whoIsNext == true) {
    selectedField.classList.add('cross');
    // fields[id] = 'cross';
    selectedField.onclick = '';
    whoIsNext = false;
    document.getElementById('playerShown').innerHTML = `
    ${player2} ist dran!
  `;
  } else {
    selectedField.classList.add('ring');
    // fields[id] = 'ring';
    selectedField.onclick = '';
    whoIsNext = true;
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

  // Put onclick on the divs
  for (let i = 1; i < 10; i++) {
    let field = document.getElementById(i);
    field.onclick = function () {
      fieldSelection(i);
    };
  }
}

function checkForWin() {
  for (let i = 0; i < 3; i++) {
    if (
      //senkrecht
      verticalWin(i)
    ) {
      winnerIs(i);
    }

    if (
      //waagerecht
      horizontalWin(i)
    ) {
      winnerIs(i);
    }
  }
  if (
    //diagonal Linksoben nach rechtsunten
    lefttopToRightbottom()
  ) {
    winnerIs(0);
  }
  if (righttopToLeftbottom()) {
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

function lefttopToRightbottom() {
  return (
    document.getElementById(1).classList.item(0) != null &&
    document.getElementById(5).classList.item(0) != null &&
    document.getElementById(9).classList.item(0) != null &&
    document.getElementById(1).classList.item(0) ==
      document.getElementById(5).classList.item(0) &&
    document.getElementById(5).classList.item(0) ==
      document.getElementById(9).classList.item(0)
  );
}

function righttopToLeftbottom() {
  return (
    document.getElementById(3).classList.item(0) != null &&
    document.getElementById(5).classList.item(0) != null &&
    document.getElementById(7).classList.item(0) != null &&
    document.getElementById(3).classList.item(0) ==
      document.getElementById(5).classList.item(0) &&
    document.getElementById(5).classList.item(0) ==
      document.getElementById(7).classList.item(0)
  );
}

function horizontalWin(i) {
  return (
    document.getElementById(1 + i).classList.item(0) != null &&
    document.getElementById(2 + i).classList.item(0) != null &&
    document.getElementById(3 + i).classList.item(0) != null &&
    document.getElementById(1 + i).classList.item(0) ==
      document.getElementById(2 + i).classList.item(0) &&
    document.getElementById(2 + i).classList.item(0) ==
      document.getElementById(3 + i).classList.item(0)
  );
}

function verticalWin(i) {
  return (
    document.getElementById(1 + i).classList.item(0) != null &&
    document.getElementById(4 + i).classList.item(0) != null &&
    document.getElementById(7 + i).classList.item(0) != null &&
    document.getElementById(1 + i).classList.item(0) ==
      document.getElementById(4 + i).classList.item(0) &&
    document.getElementById(4 + i).classList.item(0) ==
      document.getElementById(7 + i).classList.item(0)
  );
}
