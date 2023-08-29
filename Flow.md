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
### Fifth Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       1 passed, 1 total                                                                                                                                  
Snapshots:   0 total
Time:        0.394 s, estimated 1 s
Ran all test suites.
```
### Sixth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (8 ms)                                                                                                  
  moveForward                                                                                                                                                   
    × SpaceCraft moves forward in N direction (2 ms)                                                                                                            
                                                                                                                                                                
  ● moveForward › SpaceCraft moves forward in N direction
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      17 |         spaceCraft.moveForward();
      18 |         expect(spaceCraft.x).toBe(0);
    > 19 |         expect(spaceCraft.y).toBe(1);
         |                              ^
      20 |         expect(spaceCraft.z).toBe(0);
      21 |         expect(spaceCraft.direction).toBe('N');
      22 |     });

      at Object.toBe (spaceCraft.test.js:19:30)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       1 failed, 1 passed, 2 total                                                                                                                        
Snapshots:   0 total
Time:        0.593 s, estimated 1 s
Ran all test suites.
```
### Seventh Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction                                                                                                                   
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       2 passed, 2 total                                                                                                                                  
Snapshots:   0 total
Time:        0.555 s, estimated 1 s
Ran all test suites.
```
### Eighth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction (1 ms)                                                                                                            
    × SpaceCraft moves forward in S direction (3 ms)                                                                                                            
    × SpaceCraft moves forward in E direction                                                                                                                   
    × SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    × SpaceCraft moves forward in U direction (1 ms)                                                                                                            
    × SpaceCraft moves forward in D direction (1 ms)                                                                                                            
                                                                                                                                                                
  ● moveForward › SpaceCraft moves forward in S direction                                                                                                       
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      26 |         spaceCraft.moveForward();
      27 |         expect(spaceCraft.x).toBe(0);
    > 28 |         expect(spaceCraft.y).toBe(-1);
         |                              ^
      29 |         expect(spaceCraft.z).toBe(0);
      30 |         expect(spaceCraft.direction).toBe('S');
      31 |     });

      at Object.toBe (spaceCraft.test.js:28:30)

  ● moveForward › SpaceCraft moves forward in E direction

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      34 |         const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
      35 |         spaceCraft.moveForward();
    > 36 |         expect(spaceCraft.x).toBe(1);
         |                              ^
      37 |         expect(spaceCraft.y).toBe(0);
      38 |         expect(spaceCraft.z).toBe(0);
      39 |         expect(spaceCraft.direction).toBe('E');

      at Object.toBe (spaceCraft.test.js:36:30)

  ● moveForward › SpaceCraft moves forward in W direction

    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      43 |         const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
      44 |         spaceCraft.moveForward();
    > 45 |         expect(spaceCraft.x).toBe(-1);
         |                              ^
      46 |         expect(spaceCraft.y).toBe(0);
      47 |         expect(spaceCraft.z).toBe(0);
      48 |         expect(spaceCraft.direction).toBe('W');

      at Object.toBe (spaceCraft.test.js:45:30)

  ● moveForward › SpaceCraft moves forward in U direction

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      54 |         expect(spaceCraft.x).toBe(0);
      55 |         expect(spaceCraft.y).toBe(0);
    > 56 |         expect(spaceCraft.z).toBe(1);
         |                              ^
      57 |         expect(spaceCraft.direction).toBe('U');
      58 |     });
      59 |

      at Object.toBe (spaceCraft.test.js:56:30)

  ● moveForward › SpaceCraft moves forward in D direction

    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      63 |         expect(spaceCraft.x).toBe(0);
      64 |         expect(spaceCraft.y).toBe(0);
    > 65 |         expect(spaceCraft.z).toBe(-1);
         |                              ^
      66 |         expect(spaceCraft.direction).toBe('D');
      67 |     });
      68 | });

      at Object.toBe (spaceCraft.test.js:65:30)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       5 failed, 2 passed, 7 total                                                                                                                        
Snapshots:   0 total
Time:        0.631 s, estimated 1 s
Ran all test suites.
```
### Ninth Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction                                                                                                                   
    √ SpaceCraft moves forward in S direction                                                                                                                   
    √ SpaceCraft moves forward in E direction                                                                                                                   
    √ SpaceCraft moves forward in W direction                                                                                                                   
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction (2 ms)                                                                                                            
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       7 passed, 7 total                                                                                                                                  
Snapshots:   0 total
Time:        0.651 s, estimated 1 s
Ran all test suites.
```
### Tenth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (2 ms)
  moveForward
    √ SpaceCraft moves forward in N direction
    √ SpaceCraft moves forward in S direction (1 ms)
    √ SpaceCraft moves forward in E direction
    √ SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in U direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in D direction (1 ms)                                                                                                            
  moveBackward                                                                                                                                                  
    × SpaceCraft moves backward in N direction (2 ms)                                                                                                           
                                                                                                                                                                
  ● moveBackward › SpaceCraft moves backward in N direction                                                                                                     
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      73 |         spaceCraft.moveBackward();
      74 |         expect(spaceCraft.x).toBe(0);
    > 75 |         expect(spaceCraft.y).toBe(-1);
         |                              ^
      76 |         expect(spaceCraft.z).toBe(0);
      77 |         expect(spaceCraft.direction).toBe('N');
      78 |     });

      at Object.toBe (spaceCraft.test.js:75:30)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       1 failed, 7 passed, 8 total                                                                                                                        
Snapshots:   0 total
Time:        0.653 s, estimated 1 s
Ran all test suites.
```
### Eleventh Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in S direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in E direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction                                                                                                                   
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (1 ms)                                                                                                           
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       8 passed, 8 total                                                                                                                                  
Snapshots:   0 total
Time:        0.605 s, estimated 1 s
Ran all test suites.
```
### Twelveth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction                                                                                                                   
    √ SpaceCraft moves forward in S direction                                                                                                                   
    √ SpaceCraft moves forward in E direction                                                                                                                   
    √ SpaceCraft moves forward in W direction                                                                                                                   
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction (1 ms)                                                                                                            
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (1 ms)                                                                                                           
    × SpaceCraft moves backward in S direction (2 ms)                                                                                                           
    × SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    × SpaceCraft moves backward in W direction                                                                                                                  
    × SpaceCraft moves backward in U direction (1 ms)                                                                                                           
    × SpaceCraft moves backward in D direction (1 ms)                                                                                                           
                                                                                                                                                                
  ● moveBackward › SpaceCraft moves backward in S direction                                                                                                     
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      82 |         spaceCraft.moveBackward();
      83 |         expect(spaceCraft.x).toBe(0);
    > 84 |         expect(spaceCraft.y).toBe(1);
         |                              ^
      85 |         expect(spaceCraft.z).toBe(0);
      86 |         expect(spaceCraft.direction).toBe('S');
      87 |     });

      at Object.toBe (spaceCraft.test.js:84:30)

  ● moveBackward › SpaceCraft moves backward in E direction

    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      90 |         const spaceCraft = new SpaceCraft(0, 0, 0, 'E');
      91 |         spaceCraft.moveBackward();
    > 92 |         expect(spaceCraft.x).toBe(-1);
         |                              ^
      93 |         expect(spaceCraft.y).toBe(0);
      94 |         expect(spaceCraft.z).toBe(0);
      95 |         expect(spaceCraft.direction).toBe('E');

      at Object.toBe (spaceCraft.test.js:92:30)

  ● moveBackward › SpaceCraft moves backward in W direction

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

       99 |         const spaceCraft = new SpaceCraft(0, 0, 0, 'W');
      100 |         spaceCraft.moveBackward();
    > 101 |         expect(spaceCraft.x).toBe(1);
          |                              ^
      102 |         expect(spaceCraft.y).toBe(0);
      103 |         expect(spaceCraft.z).toBe(0);
      104 |         expect(spaceCraft.direction).toBe('W');

      at Object.toBe (spaceCraft.test.js:101:30)

  ● moveBackward › SpaceCraft moves backward in U direction

    expect(received).toBe(expected) // Object.is equality

    Expected: -1
    Received: 0

      110 |         expect(spaceCraft.x).toBe(0);
      111 |         expect(spaceCraft.y).toBe(0);
    > 112 |         expect(spaceCraft.z).toBe(-1);
          |                              ^
      113 |         expect(spaceCraft.direction).toBe('U');
      114 |     });
      115 |

      at Object.toBe (spaceCraft.test.js:112:30)

  ● moveBackward › SpaceCraft moves backward in D direction

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      119 |         expect(spaceCraft.x).toBe(0);
      120 |         expect(spaceCraft.y).toBe(0);
    > 121 |         expect(spaceCraft.z).toBe(1);
          |                              ^
      122 |         expect(spaceCraft.direction).toBe('D');
      123 |     });
      124 | });

      at Object.toBe (spaceCraft.test.js:121:30)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 8 passed, 13 total
Snapshots:   0 total
Time:        0.711 s, estimated 1 s
Ran all test suites.
```
### Thirteenth Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction                                                                                                                   
    √ SpaceCraft moves forward in S direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in E direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction                                                                                                                   
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in S direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in W direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in U direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in D direction (1 ms)                                                                                                           
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       13 passed, 13 total                                                                                                                                
Snapshots:   0 total
Time:        0.601 s, estimated 1 s
Ran all test suites.
```
### Forteenth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (2 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in S direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in E direction                                                                                                                   
    √ SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in U direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in D direction (1 ms)                                                                                                            
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in S direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in W direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in U direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in D direction (5 ms)                                                                                                           
  turnRight                                                                                                                                                     
    × SpaceCraft turns right from N direction (3 ms)                                                                                                            
                                                                                                                                                                
  ● turnRight › SpaceCraft turns right from N direction                                                                                                         
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: "E"
    Received: "N"

      131 |         expect(spaceCraft.y).toBe(0);
      132 |         expect(spaceCraft.z).toBe(0);
    > 133 |         expect(spaceCraft.direction).toBe('E');
          |                                      ^
      134 |     });
      135 | });

      at Object.toBe (spaceCraft.test.js:133:38)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       1 failed, 13 passed, 14 total                                                                                                                      
Snapshots:   0 total
Time:        0.685 s, estimated 1 s
Ran all test suites.
```
### Fifteenth Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in S direction                                                                                                                   
    √ SpaceCraft moves forward in E direction                                                                                                                   
    √ SpaceCraft moves forward in W direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction                                                                                                                   
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (2 ms)                                                                                                           
    √ SpaceCraft moves backward in S direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in W direction
    √ SpaceCraft moves backward in U direction
    √ SpaceCraft moves backward in D direction (1 ms)
  turnRight
    √ SpaceCraft turns right from N direction

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        0.629 s, estimated 1 s
Ran all test suites.
```
### Sixteenth Commit
```
 FAIL  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)
  moveForward
    √ SpaceCraft moves forward in N direction                                                                                                                   
    √ SpaceCraft moves forward in S direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in E direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in W direction                                                                                                                   
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction (1 ms)                                                                                                            
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (6 ms)                                                                                                           
    √ SpaceCraft moves backward in S direction                                                                                                                  
    √ SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in W direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in U direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in D direction                                                                                                                  
  turnRight                                                                                                                                                     
    √ SpaceCraft turns right from N direction                                                                                                                   
    × SpaceCraft turns right from S direction (3 ms)                                                                                                            
    × SpaceCraft turns right from E direction (1 ms)                                                                                                            
    × SpaceCraft turns right from W direction (1 ms)                                                                                                            
    × SpaceCraft turns right from U direction                                                                                                                   
    × SpaceCraft turns right from D direction (1 ms)                                                                                                            
                                                                                                                                                                
  ● turnRight › SpaceCraft turns right from S direction                                                                                                         
                                                                                                                                                                
    expect(received).toBe(expected) // Object.is equality

    Expected: "W"
    Received: "E"

      140 |         expect(spaceCraft.y).toBe(0);
      141 |         expect(spaceCraft.z).toBe(0);
    > 142 |         expect(spaceCraft.direction).toBe('W');
          |                                      ^
      143 |     });
      144 |
      145 |     test('SpaceCraft turns right from E direction', () => {

      at Object.toBe (spaceCraft.test.js:142:38)

  ● turnRight › SpaceCraft turns right from E direction

    expect(received).toBe(expected) // Object.is equality

    Expected: "S"
    Received: "E"

      149 |         expect(spaceCraft.y).toBe(0);
      150 |         expect(spaceCraft.z).toBe(0);
    > 151 |         expect(spaceCraft.direction).toBe('S');
          |                                      ^
      152 |     });
      153 |
      154 |     test('SpaceCraft turns right from W direction', () => {

      at Object.toBe (spaceCraft.test.js:151:38)

  ● turnRight › SpaceCraft turns right from W direction

    expect(received).toBe(expected) // Object.is equality

    Expected: "N"
    Received: "E"

      158 |         expect(spaceCraft.y).toBe(0);
      159 |         expect(spaceCraft.z).toBe(0);
    > 160 |         expect(spaceCraft.direction).toBe('N');
          |                                      ^
      161 |     });
      162 |
      163 |     test('SpaceCraft turns right from U direction', () => {

      at Object.toBe (spaceCraft.test.js:160:38)

  ● turnRight › SpaceCraft turns right from U direction

    expect(received).toBe(expected) // Object.is equality

    Expected: "U"
    Received: "E"

      167 |         expect(spaceCraft.y).toBe(0);
      168 |         expect(spaceCraft.z).toBe(0);
    > 169 |         expect(spaceCraft.direction).toBe('U');
          |                                      ^
      170 |     });
      171 |
      172 |     test('SpaceCraft turns right from D direction', () => {

      at Object.toBe (spaceCraft.test.js:169:38)

  ● turnRight › SpaceCraft turns right from D direction

    expect(received).toBe(expected) // Object.is equality

    Expected: "D"
    Received: "E"

      176 |         expect(spaceCraft.y).toBe(0);
      177 |         expect(spaceCraft.z).toBe(0);
    > 178 |         expect(spaceCraft.direction).toBe('D');
          |                                      ^
      179 |     });
      180 |
      181 | });

      at Object.toBe (spaceCraft.test.js:178:38)

Test Suites: 1 failed, 1 total                                                                                                                                  
Tests:       5 failed, 14 passed, 19 total                                                                                                                      
Snapshots:   0 total
Time:        0.704 s, estimated 1 s
Ran all test suites.
```
### Seventeenth Commit
```
 PASS  ./spaceCraft.test.js
  spaceCraft
    √ SpaceCraft initialises with x, y, z and direction (3 ms)                                                                                                  
  moveForward                                                                                                                                                   
    √ SpaceCraft moves forward in N direction (1 ms)                                                                                                            
    √ SpaceCraft moves forward in S direction                                                                                                                   
    √ SpaceCraft moves forward in E direction                                                                                                                   
    √ SpaceCraft moves forward in W direction                                                                                                                   
    √ SpaceCraft moves forward in U direction                                                                                                                   
    √ SpaceCraft moves forward in D direction                                                                                                                   
  moveBackward                                                                                                                                                  
    √ SpaceCraft moves backward in N direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in S direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in E direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in W direction                                                                                                                  
    √ SpaceCraft moves backward in U direction (1 ms)                                                                                                           
    √ SpaceCraft moves backward in D direction                                                                                                                  
  turnRight                                                                                                                                                     
    √ SpaceCraft turns right from N direction                                                                                                                   
    √ SpaceCraft turns right from S direction (1 ms)                                                                                                            
    √ SpaceCraft turns right from E direction (1 ms)                                                                                                            
    √ SpaceCraft turns right from W direction                                                                                                                   
    √ SpaceCraft turns right from U direction                                                                                                                   
    √ SpaceCraft turns right from D direction (1 ms)                                                                                                            
                                                                                                                                                                
Test Suites: 1 passed, 1 total                                                                                                                                  
Tests:       19 passed, 19 total                                                                                                                                
Snapshots:   0 total
Time:        0.651 s, estimated 1 s
Ran all test suites.
```