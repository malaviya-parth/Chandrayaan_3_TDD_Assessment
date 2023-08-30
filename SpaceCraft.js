class SpaceCraft {
    constructor(x, y, z, direction) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.direction = direction;
    }

    moveForward() {
        switch(this.direction) {
            case 'N':
                this.y += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'W':
                this.x -= 1;
                break;
            case 'U':
                this.z += 1;
                break;
            case 'D':
                this.z -= 1;
                break;
        }
    }

    moveBackward() {
        switch(this.direction) {
            case 'N':
                this.y -= 1;
                break;
            case 'S':
                this.y += 1;
                break;
            case 'E':
                this.x -= 1;
                break;
            case 'W':
                this.x += 1;
                break;
            case 'U':
                this.z -= 1;
                break;
            case 'D':
                this.z += 1;
                break;
        }
    }
    turnRight() {

        switch(this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'W':
                this.direction = 'N';
                break;
            case 'U':
                this.direction = 'S';
                break;
            case 'D':
                this.direction = 'N';
                break;
        }
    }
    turnLeft() {

        switch(this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'U':
                this.direction = 'N';
                break;
            case 'D':
                this.direction = 'S';
                break;
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

        switch(command) {
            case 'f':
                this.moveForward();
                break;
            case 'r':
                this.turnRight();
                break;
            case 'u':
                this.turnUp();
                break;
            case 'b':
                this.moveBackward();
                break;
            case 'l':
                this.turnLeft();
                break;
            case 'd':
                this.turnDown();
                break;
        }
    }
    
}

module.exports = SpaceCraft;