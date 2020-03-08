const columns = document.querySelectorAll('.col-xs');
const turnSpan = document.querySelector('.turn');
var turn = 'x';

turnSpan.innerHTML = turn;

for (let i=0;i<columns.length;i++) {
    columns[i].addEventListener('click', () => handleBoxClick(i));
}

function allSelected() {
    var allSelected = true;
    for (let col of columns) {
        if (!col.classList.contains('selected-x') && !col.classList.contains('selected-o')) {
            allSelected = false;
            break;
        }
    }
    return allSelected;
}

function checkForWinner() {
    var cols = [];
    var winner = false; 

    for (let col of columns) {
        cols.push(col.classList.contains(`selected-${turn}`));
    }

    if (cols[0] && cols[1] && cols[2]) {
        winner = true;
    } else if (cols[0] && cols[3] && cols[6]) {
        winner = true;
    } else if (cols[0] && cols[4] && cols[8]) {
        winner = true;
    } else if (cols[2] && cols[5] && cols[8]) {
        winner = true;
    } else if (cols[2] && cols[4] && cols[6]) {
        winner = true;
    } else if (cols[1] && cols[4] && cols[7]) {
        winner = true;
    } else if (cols[3] && cols[4] && cols[5]) {
        winner = true;
    } else if (cols[6] && cols[7] && cols[8]) {
        winner = true;
    } else {
        winner = false;
    }

    console.log(cols);
    return winner;
}

function clearAll() {
    for (let col of columns) {
        col.classList.remove('selected-x');
        col.classList.remove('selected-o');
    }
}

function handleBoxClick(i) {
    if (!allSelected() && !columns[i].classList.contains('selected-x') && !columns[i].classList.contains('selected-o')) {
        columns[i].classList.add(`selected-${turn}`);
        
        if (checkForWinner()) {
            setTimeout(() => {
                alert (`${turn} wins!`);
                clearAll();
            }, 200);
        } else {
            if (turn == 'x') {
                turn = 'o';
            }  else {
                turn = 'x';
            }
            turnSpan.innerHTML = turn;


            setTimeout(() => {
                if (allSelected()) {
                    alert('Draw!');
                    clearAll();
                }
            }, 500);
        }
    }
}

console.log(columns);