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