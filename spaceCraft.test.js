const SpaceCraft = require('./SpaceCraft');

// Create a test suite for the spaceCraft object
describe('spaceCraft', () => {
   test ('SpaceCraft initialises with x, y, z and direction', () => {
         const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
         expect(spaceCraft.x).toBe(0);
         expect(spaceCraft.y).toBe(0);
         expect(spaceCraft.z).toBe(0);
         expect(spaceCraft.direction).toBe('N');
    });
});

describe('moveForward', () => {
    test('SpaceCraft moves forward in N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(1);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('N');
    });

    test('SpaceCraft moves forward in S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(-1);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('S');
    });

    test('SpaceCraft moves forward in E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(1);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('E');
    });

    test('SpaceCraft moves forward in W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(-1);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('W');
    });

    test('SpaceCraft moves forward in U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(1);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft moves forward in D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.moveForward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(-1);
        expect(spaceCraft.direction).toBe('D');
    });
});

describe('moveBackward', () => {
    test('SpaceCraft moves backward in N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(-1);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('N');
    });

    test('SpaceCraft moves backward in S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(1);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('S');
    });

    test('SpaceCraft moves backward in E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(-1);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('E');
    });

    test('SpaceCraft moves backward in W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(1);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('W');
    });

    test('SpaceCraft moves backward in U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(-1);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft moves backward in D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.moveBackward();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(1);
        expect(spaceCraft.direction).toBe('D');
    });
});

describe('turnRight', () => {
    test('SpaceCraft turns right from N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('E');
    });

    test('SpaceCraft turns right from S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('W');
    });

    test('SpaceCraft turns right from E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('S');
    });

    test('SpaceCraft turns right from W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('N');
    });

    test('SpaceCraft turns right from U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns right from D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.turnRight();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });
});

describe('turnLeft', () => {
    test('SpaceCraft turns left from N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('W');
    });

    test('SpaceCraft turns left from S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('E');
    });

    test('SpaceCraft turns left from E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('N');
    });

    test('SpaceCraft turns left from W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('S');
    });

    test('SpaceCraft turns left from U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns left from D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.turnLeft();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });
});

describe('turnUp', () => {
    test('SpaceCraft turns up from N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns up from S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns up from E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns up from W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns up from U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });

    test('SpaceCraft turns up from D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.turnUp();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('U');
    });
});

describe('turnDown', () => {
    test('SpaceCraft turns down from N direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });

    test('SpaceCraft turns down from S direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'S');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });

    test('SpaceCraft turns down from E direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });

    test('SpaceCraft turns down from W direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });

    test('SpaceCraft turns down from U direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'U');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });

    test('SpaceCraft turns down from D direction', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'D');
        spaceCraft.turnDown();
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(0);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('D');
    });
});

describe('Command Execution', () => {
    test('SpaceCraft executes command', () => {
        const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
        spaceCraft.executeCommand('fr');
        expect(spaceCraft.x).toBe(0);
        expect(spaceCraft.y).toBe(1);
        expect(spaceCraft.z).toBe(0);
        expect(spaceCraft.direction).toBe('E');
    });

});