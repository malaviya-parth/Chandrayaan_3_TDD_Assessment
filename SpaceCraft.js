class SpaceCraft {
    constructor(x, y, z, direction) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
    }

    moveForward() {
        if(this.direction === 'N') {
            this.y += 1;
        }
        else if(this.direction === 'S') {
            this.y -= 1;
        }
        else if(this.direction === 'E') {
            this.x += 1;
        }
        else if(this.direction === 'W') {
            this.x -= 1;
        }
        else if(this.direction === 'U') {
            this.z += 1;
        }
        else if(this.direction === 'D') {
            this.z -= 1;
        }
    }

    moveBackward() {
        if(this.direction === 'N') {
            this.y -= 1;
        }
    }
    turnRight() {}
    turnLeft() {}
    turnUp() {}
    turnDown() {}
}

module.exports = SpaceCraft;