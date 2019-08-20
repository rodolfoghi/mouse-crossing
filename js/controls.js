let isGameLive = true;

const rightButton = document.getElementById('btn-right')

rightButton.ontouchstart = (event) => {
    if (isGameLive) {
        player.speed = +player.maxSpeed;
    }
}

rightButton.ontouchend = (event) => {
    if (isGameLive) {
        player.speed = 0;
    }
}

const leftButton = document.getElementById('btn-left')

leftButton.ontouchstart = (event) => {
    if (isGameLive) {
        player.speed = -player.maxSpeed;
    }
}

leftButton.ontouchend = (event) => {
    if (isGameLive) {
        player.speed = 0;
    }
}

window.onkeydown = (event) => {
    let pressedKey = event.key;
    if (pressedKey === "ArrowRight") {
        player.speed = player.maxSpeed;
    } else if (pressedKey === "ArrowLeft") {
        player.speed = -player.maxSpeed;
    }
};


window.onkeyup = function(event) {
    player.speed = 0;
}