let score = 0;

function getRandomPosition() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    return { x, y };
}

function createPest() {
    const pest = document.createElement('div');
    pest.className = 'pest';
    const position = getRandomPosition();
    pest.style.left = `${position.x}px`;
    pest.style.top = `${position.y}px`;
    document.body.appendChild(pest);

    pest.addEventListener('click', () => {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        pest.remove();
        createPest();
    });

    setTimeout(() => {
        pest.remove();
        createPest();
    }, 2000);
}

window.onload = function() {
    const scoreElement = document.createElement('div');
    scoreElement.id = 'score';
    scoreElement.textContent = 'Score: 0';
    document.body.appendChild(scoreElement);

    for (let i = 0; i < 5; i++) {
        createPest();
    }
}
