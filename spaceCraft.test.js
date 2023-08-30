const SpaceCraft = require('./SpaceCraft');


const checkOutput = (spaceCraft,x,y,z,direction) => {
    expect(spaceCraft.x).toBe(x);
    expect(spaceCraft.y).toBe(y);
    expect(spaceCraft.z).toBe(z);
    expect(spaceCraft.direction).toBe(direction);
}

const createAndRun = (x,y,z,direction,command) => {
    const spaceCraft = new SpaceCraft(x,y,z,direction);
    spaceCraft.executeCommand(command);
    return spaceCraft;
}

// Create a test suite for the spaceCraft object
describe('spaceCraft', () => {
   test ('SpaceCraft initialises with x, y, z and direction', () => {
         const spaceCraft = createAndRun(0,0,0,'N','');
         checkOutput(spaceCraft,0,0,0,'N');
    });
});

describe('moveForward', () => {
    test('SpaceCraft moves forward in N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','f');
        checkOutput(spaceCraft,0,1,0,'N');
    });

    test('SpaceCraft moves forward in S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','f');
        checkOutput(spaceCraft,0,-1,0,'S');
    });

    test('SpaceCraft moves forward in E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','f');
        checkOutput(spaceCraft,1,0,0,'E');
    });

    test('SpaceCraft moves forward in W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','f');
        checkOutput(spaceCraft,-1,0,0,'W');
    });

    test('SpaceCraft moves forward in U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','f');
        checkOutput(spaceCraft,0,0,1,'U');
    });

    test('SpaceCraft moves forward in D direction', () => {
        const spaceCraft = createAndRun(0,0,0,'D','f');
        checkOutput(spaceCraft,0,0,-1,'D');
    });
});

describe('moveBackward', () => {
    test('SpaceCraft moves backward in N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','b');
        checkOutput(spaceCraft,0,-1,0,'N');
    });

    test('SpaceCraft moves backward in S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','b');
        checkOutput(spaceCraft,0,1,0,'S');
    });

    test('SpaceCraft moves backward in E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','b');
        checkOutput(spaceCraft,-1,0,0,'E');
    });

    test('SpaceCraft moves backward in W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','b');
        checkOutput(spaceCraft,1,0,0,'W');
    });

    test('SpaceCraft moves backward in U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','b');
        checkOutput(spaceCraft,0,0,-1,'U');
    });

    test('SpaceCraft moves backward in D direction', () => {
        const spaceCraft = createAndRun(0,0,0,'D','b');
        checkOutput(spaceCraft,0,0,1,'D');
    });
});

describe('turnRight', () => {
    test('SpaceCraft turns right from N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','r');
        checkOutput(spaceCraft,0,0,0,'E');
    });

    test('SpaceCraft turns right from S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','r');
        checkOutput(spaceCraft,0,0,0,'W');
    });

    test('SpaceCraft turns right from E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','r');
        checkOutput(spaceCraft,0,0,0,'S');
    });

    test('SpaceCraft turns right from W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','r');
        checkOutput(spaceCraft,0,0,0,'N');
    });

    test('SpaceCraft turns right from U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','r');
        checkOutput(spaceCraft,0,0,0,'S');
    });

    test('SpaceCraft turns right from D direction', () => {
        const spaceCraft = createAndRun(0,0,0,'D','r');
        checkOutput(spaceCraft,0,0,0,'N');
    });
});

describe('turnLeft', () => {
    test('SpaceCraft turns left from N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','l');
        checkOutput(spaceCraft,0,0,0,'W');
    });

    test('SpaceCraft turns left from S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','l');
        checkOutput(spaceCraft,0,0,0,'E');
    });

    test('SpaceCraft turns left from E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','l');
        checkOutput(spaceCraft,0,0,0,'N');
    });

    test('SpaceCraft turns left from W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','l');
        checkOutput(spaceCraft,0,0,0,'S');
    });

    test('SpaceCraft turns left from U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','l');
        checkOutput(spaceCraft,0,0,0,'N');
    });

    test('SpaceCraft turns left from D direction', () => {
        const spaceCraft = createAndRun(0,0,0,'D','l');
        checkOutput(spaceCraft,0,0,0,'S');
    });
});

describe('turnUp', () => {
    test('SpaceCraft turns up from N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });

    test('SpaceCraft turns up from S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });

    test('SpaceCraft turns up from E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });

    test('SpaceCraft turns up from W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });

    test('SpaceCraft turns up from U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });

    test('SpaceCraft turns up from D direction', () => {
        const spaceCraft =  createAndRun(0,0,0,'D','u');
        checkOutput(spaceCraft,0,0,0,'U');
    });
});

describe('turnDown', () => {
    test('SpaceCraft turns down from N direction', () => {
        const spaceCraft = createAndRun(0,0,0,'N','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });

    test('SpaceCraft turns down from S direction', () => {
        const spaceCraft = createAndRun(0,0,0,'S','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });

    test('SpaceCraft turns down from E direction', () => {
        const spaceCraft = createAndRun(0,0,0,'E','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });

    test('SpaceCraft turns down from W direction', () => {
        const spaceCraft = createAndRun(0,0,0,'W','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });

    test('SpaceCraft turns down from U direction', () => {
        const spaceCraft = createAndRun(0,0,0,'U','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });

    test('SpaceCraft turns down from D direction', () => {
        const spaceCraft = createAndRun(0,0,0,'D','d');
        checkOutput(spaceCraft,0,0,0,'D');
    });
});

describe('Command Execution', () => {
    test('SpaceCraft executes command', () => {
        const spaceCraft = createAndRun(0,0,0,'N','frubl');
        checkOutput(spaceCraft,0,1,-1,'N');

    });
});