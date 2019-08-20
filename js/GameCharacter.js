class GameCharacter {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.maxSpeed = 4;
    }

    moveVertically() {
        if ((this.y > screenHeight - this.height - 10) || (this.y < 10)) {
            this.speed = -this.speed;
        }
        this.y += this.speed;
    }

    moveHorizontally() {
        if (this.x > 0 || this.speed > 0) {
            this.x += this.speed;
        }
    }
}