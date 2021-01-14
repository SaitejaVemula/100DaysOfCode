const board = document.querySelector('.board');
const clearBoard = document.querySelector('button');

board.addEventListener('click', e => {
    e.target.classList.toggle('selected');
});

clearBoard.addEventListener('click', () => {
    let elements = Array.from(board.children);
    elements.forEach(i => i.classList.remove('selected'));
});