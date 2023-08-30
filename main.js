const readline = require("readline");
const SpaceCraft = require("./SpaceCraft.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(
    "Specify the initial direction (e.g. N): ",
    (initialDirection) => {
        rl.question(
            "Enter the Command to be executed (e.g. frubl): ",
            (input) => {
                const spaceCraft = new SpaceCraft(0, 0, 0, initialDirection);

                spaceCraft.executeCommand(input);

                console.log(
                    `Final Position: (${spaceCraft.x}, ${spaceCraft.y}, ${spaceCraft.z})`
                );
                console.log(`Final Direction: ${spaceCraft.direction}`);

                rl.close();
            }
        );
    }
);