const board = document.querySelector('.board');

board.addEventListener('click', e => {
    e.target.classList.toggle('selected');
});