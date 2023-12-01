const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");
let total = 0;
input
    .split("\n")
    .map((val) =>
        val
            .split("")
            .map((curr, ind) => {
                const word = val.slice(ind);
                if (word.startsWith("one")) return 1;
                if (word.startsWith("two")) return 2;
                if (word.startsWith("three")) return 3;
                if (word.startsWith("four")) return 4;
                if (word.startsWith("five")) return 5;
                if (word.startsWith("six")) return 6;
                if (word.startsWith("seven")) return 7;
                if (word.startsWith("eight")) return 8;
                if (word.startsWith("nine")) return 9;
                return parseInt(curr);
            })
            .filter((letter) => !isNaN(letter))
    )
    .map((c) => c + "") // Who loves my hacky convert to string solution????
    .forEach((val) => (total += parseInt(val[0] + val[val.length - 1])));
console.log(total);