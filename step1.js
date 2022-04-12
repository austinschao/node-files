"use strict";

const fsP = require("fs/promises");
const path = process.argv[2];


/** Read file with passed in path and print its content */
async function cat(path) {

  try {
    const content = await fsP.readFile(path, "utf-8");
    console.log(content)
  } catch (err) {
    console.log(`Error reading ${path}:`, err)
    process.exit(1);
  }
}

cat(path);