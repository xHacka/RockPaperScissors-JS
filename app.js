const actions_btn = {
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissors: document.getElementById('scissors'),
}

const score = {
    player: document.getElementById('player'),
    comp: document.getElementById('comp')
}

const text = {
    happening: document.querySelector('.actions-text p'),
    hint: document.querySelector('.hint p'),
}

function comp() {
    const actions = {1: 'Rock', 2: 'Paper', 3: 'Scissors'}
    return actions[Math.floor(Math.random() * 3 + 1)]
}

function updateBoard(pl, cp, winner) {
    text.happening.textContent = `Computer: ${cp}\n  Player: ${pl}\n  Winner: ${winner}`
}

function whoWon(pl, cp) {
    let winner;

    switch (pl) {
        case 'Rock':
            switch (cp){
                case 'Rock': winner = 'Tie!'; break
                case 'Paper': winner = 'Computer'; break
                case 'Scissors': winner = 'Player'; break
            } break;
        case 'Paper':
            switch (cp){
                case 'Paper': winner = 'Tie!'; break
                case 'Rock': winner = 'Player'; break
                case 'Scissors': winner = 'Computer'; break
            } break;
        case 'Scissors':
            switch (cp) {
                case 'Scissors': winner = 'Tie!'; break
                case 'Paper': winner = 'Player'; break
                case 'Rock': winner = 'Computer'; break
            } break;
    }
    return winner
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

for (let action in actions_btn) {
    actions_btn[action].onclick = (e) => {
        const pl = capitalize(action)
        const cp = comp()
        const winner = whoWon(pl, cp)
        if (winner === 'Player') {
            score.player.textContent = (parseInt(score.player.textContent) + 1).toString()
        } else if (winner === 'Computer') {
            score.comp.textContent = (parseInt(score.comp.textContent) + 1).toString()
        }
        updateBoard(pl, cp, winner)
        text.hint.textContent = "Make Your Move"
    }
    actions_btn[action].onmouseover = () => {
        let actionHighlight = Array.from(document.querySelectorAll('header h1 span'))
            .find(el => el.textContent === action.toUpperCase())
        actionHighlight.classList.add('highlighted-action')
    }
    actions_btn[action].onmouseout = () => {
        let actionHighlight = Array.from(document.querySelectorAll('header h1 span'))
            .find(el => el.textContent === action.toUpperCase())
        actionHighlight.classList.remove('highlighted-action')
    }
}
