/** Command-line tool to generate Markov text. */
const fs = require("fs");
const markov = require("./markov");
const process = require("process");
const axios = require("axios");

function generateText(text) {
    let mm = new markov.MarkovMachine();
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if (err) {
            console.error(`Error reading: ${path} ${err}`);
            process.exit(1);
        } else {
            generateText(data);
            console.log(data);
        }
    });
}

async function makeURL(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
    generateText(res.data);
}

// let path;
// let method;

// if (process.argv[2] === "method") {
//     method = process.argv[3];
//     path = process.argv[4];
// } else {
//     path = process.argv[2];
// }
// if (path.slice(0, 4) === "http") {
//     makeURL(path, method);
// } else {
//     makeText(path, method);
// }


let [method, path] = process.argv.slice(2);

if (method === "file") {
    makeText(path);
} else if (method === "url") {
    makeURL(path);
} else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}