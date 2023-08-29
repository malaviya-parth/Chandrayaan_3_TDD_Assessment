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
    }
}

module.exports = SpaceCraft;