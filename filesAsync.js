"use strict";

const fs = require("fs/promises");

async function main() {
    let fileArray = ["a.txt", "b.txt", "b1.txt", "c.txt", "d.txt"];
    let fileData = "";

    for (const file of fileArray) {
        try {
            fileData += await fs.readFile(file) + "\n";
        } catch {
            fileData += file + " neperskaitytas" + "\n";
        }
    }
    fileData = fileData.trimEnd();
    console.log(fileData);
}

main();