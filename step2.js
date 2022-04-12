"use strict";


const axios = require("axios");
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


/** Read content of URL and print its content */
async function webCat(path) {
  try {
    const response = await axios.get(path);
    console.log(response.data)
  } catch (err) {
    console.log(`Error reading ${path}`, err)
    process.exit(1);
  }
}

if (path.includes(".txt")) {
  cat(path)
} else if (path.includes("http")) {
  webCat(path);
} else {
  console.log("Path not supported")
}
