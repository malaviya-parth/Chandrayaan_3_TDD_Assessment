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
        else if(this.direction === 'S') {
            this.y += 1;
        }
        else if(this.direction === 'E') {
            this.x -= 1;
        }
        else if(this.direction === 'W') {
            this.x += 1;
        }
        else if(this.direction === 'U') {
            this.z -= 1;
        }
        else if(this.direction === 'D') {
            this.z += 1;
        }
    }
    turnRight() {
        if(this.direction === 'N') {
            this.direction = 'E';
        }
        else if(this.direction === 'S') {
            this.direction = 'W';
        }
        else if(this.direction === 'E') {
            this.direction = 'S';
        }
        else if(this.direction === 'W') {
            this.direction = 'N';
        }
        else if(this.direction === 'U') {
            this.direction = this.direction;
        }
        else if(this.direction === 'D') {
            this.direction = this.direction;
        }
    }
    turnLeft() {
        if(this.direction === 'N') {
            this.direction = 'W';
        }
        else if(this.direction === 'S') {
            this.direction = 'E';
        }
        else if(this.direction === 'E') {
            this.direction = 'N';
        }
        else if(this.direction === 'W') {
            this.direction = 'S';
        }
        else if(this.direction === 'U') {
            this.direction = this.direction;
        }
        else if(this.direction === 'D') {
            this.direction = this.direction;
        }
    }
    turnUp() {
        this.direction = 'U';
    }
    turnDown() {
        this.direction = 'D';
    }

    executeCommand(command) {
        for(let i = 0; i < command.length; i++) {
            this.executeSingleCommand(command[i]);
        }
    }
    
    executeSingleCommand(command) {
        if(command === 'f') {
            this.moveForward();
        }
        if(command === 'r') {
            this.turnRight();
        }
        if(command === 'u'){
            this.turnUp();
        }
        if(command === 'b'){
            this.moveBackward();
        }
        if(command === 'l'){
            this.turnLeft();
        }
    }
    
}

module.exports = SpaceCraft;