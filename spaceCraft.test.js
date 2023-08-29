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
});