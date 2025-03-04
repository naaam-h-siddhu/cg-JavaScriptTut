
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let low = 1, high = 100;

console.log("Think of a number between 1 and 100...");

function guess() {
    if (low > high) {
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    rl.question("Is it " + mid + "? (yes/no): ", function (ans) {
        if (ans.toLowerCase() === "yes") {
            console.log("Magic number: " + mid);
            rl.close();
            return;
        }

        rl.question("Is it greater than " + mid + "? (yes/no): ", function (greater) {
            if (greater.toLowerCase() === "yes") {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
            guess();
        });
    });
}

guess();
