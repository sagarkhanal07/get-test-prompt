#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the current directory
const currentDirectory = process.cwd();

// Traverse the directory tree recursively
function traverseDirectory(directoryPath, level, log, fileContents) {
    const items = fs.readdirSync(directoryPath);
    for (const item of items) {
        const itemPath = path.join(directoryPath, item);
        const isDirectory = fs.statSync(itemPath).isDirectory();
        const prefix = `${' '.repeat(level * 2)}`;
        log.push(`${prefix}${isDirectory ? item + '/' : item}`);
        if (isDirectory) {
            traverseDirectory(itemPath, level + 1, log, fileContents);
        } else {
            const fileContent = fs.readFileSync(itemPath, 'utf8');
            log.push(`${prefix}  ${item}`);
            fileContents.push(`${item}\n${' '.repeat(level * 2)}- ${fileContent}`);
        }
    }
}

// Create the log and fileContents arrays
const log = [];
const fileContents = [];

// Traverse the directory tree and populate the log and fileContents arrays
traverseDirectory(currentDirectory, 0, log, fileContents);

// Output the results to the console
console.log('In the given directory:');
console.log(log.join('\n'));
console.log("\n\n");
console.log("Write me component level testing in index.test.js using @testing-library/react.\n\n")
console.log('Contents of each file:');
console.log(fileContents.join('\n\n'));
