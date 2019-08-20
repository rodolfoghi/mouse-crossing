let canvas = document.getElementById('palco');
let ctx = canvas.getContext('2d');
let screenWidth = canvas.width;
let screenHeight = canvas.height;

canvas.ondblclick = (event) => {
    console.log('duplo clique');
    event.preventDefault();
}

let enemies = [
    new GameCharacter(150, 100, 50, 50, 2),
    new GameCharacter(340, 100, 50, 50, 3),
    new GameCharacter(screenWidth - 120, 100, 50, 50, 5),
];

let player = new GameCharacter(20, (screenHeight - 50) / 2, 30, 30, 0);
let goal = new GameCharacter(screenWidth - 50, (screenHeight - 50) / 2, 30, 30, 0);

let checkCollisions = function(rect1, rect2) {
    let xOverlap = Math.abs(rect1.x - rect2.x) + 10 <= Math.min(rect1.width, rect2.width);
    let yOverlap = Math.abs(rect1.y - rect2.y) <= Math.min(rect1.height, rect2.height);

    return xOverlap && yOverlap;
}

let endGameLogic = function(text) {
    isGameLive = false;
    alert(text);
    window.location = '';
}

let sprites = {};
let loadSprites = function() {
    sprites.player = new Image();
    sprites.player.src = 'images/player.png';

    sprites.background = new Image();
    sprites.background.src = 'images/background.png';

    sprites.enemy = new Image();
    sprites.enemy.src = 'images/enemy.png';

    sprites.goal = new Image();
    sprites.goal.src = 'images/goal.png';
}

let draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    ctx.drawImage(sprites.background, 0, 0, screenWidth, screenHeight);
    ctx.drawImage(sprites.player, player.x, player.y, player.width, player.height);

    ctx.drawImage(sprites.goal, goal.x, goal.y, goal.width, goal.height);

    enemies.forEach((enemy) => {
        ctx.drawImage(sprites.enemy, enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

let update = function() {
    if (checkCollisions(player, goal)) {
        endGameLogic('Você ganhou! :) Pressione Ok para jogar novamente.');
    }

    player.moveHorizontally();
    enemies.forEach((enemy) => {
        if (checkCollisions(player, enemy)) {
            endGameLogic('GAME OVER! :( Pressione Ok para jogar novamente.');
        }
        enemy.moveVertically()
    });
}

let step = function() {
    update();
    draw();
    if (isGameLive) {
        window.requestAnimationFrame(step);
    }
}

loadSprites();
step();