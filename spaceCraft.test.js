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