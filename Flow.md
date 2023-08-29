### Apart From the commits which will Obviously give the flow of the project, This file is added which helps to give brief description of the thought process and flow of the project.
### First Commit  
Initialised the project as decided to use jest added test script in package.json
### Second Commit
Installed jest library and run test which gave output  
```
> chandrayaan_3_tdd_assessment@1.0.0 test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In D:\Incubyte\Chandrayaan_3_TDD_Assessment
  2 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 2 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```
### Third Commit
Added Flow.md file
### Fourth Commit
Check whether object is created with the given input
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    × SpaceCraft initialises with x, y, z and direction (8 ms)                                                                                                  
                                                                                                                                                                
  ● spaceCraft › SpaceCraft initialises with x, y, z and direction
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: undefined

       6 |    test ('SpaceCraft initialises with x, y, z and direction', () => {
       7 |          const spaceCraft = new SpaceCraft(0, 0, 0, 'N');
    >  8 |          expect(spaceCraft.x).toBe(0);
         |                               ^
       9 |          expect(spaceCraft.y).toBe(0);
      10 |          expect(spaceCraft.z).toBe(0);
      11 |          expect(spaceCraft.direction).toBe('N');

      at Object.toBe (spaceCraft.test.js:8:31)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       1 failed, 1 total                                                                                                                                  
Snapshots:   0 total
Time:        0.598 s, estimated 1 s
Ran all test suites.
```