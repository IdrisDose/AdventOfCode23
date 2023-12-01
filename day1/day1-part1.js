const fs = require("fs");
let total = 0;
fs.readFileSync("input.txt", "utf8")
    .split("\n")
    .map((val) => val.split("").filter((letter) => !isNaN(parseInt(letter))))
    .forEach(
        (val) =>
            (total += parseInt(
                val.length > 1 ? val[0] + val[val.length - 1] : val[0] + val[0]
            ))
    );
console.log(total);
