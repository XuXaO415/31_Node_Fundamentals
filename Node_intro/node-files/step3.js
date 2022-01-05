const fs = require('fs');
const process = require('process');
const axios = require('axios');

function optionalOutput(out, text) {
    if (out) {
        fs.writeFile(text, out, 'utf8', function(err) {
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }

}

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(`Error reading: ${err}`);
            process.exit(1);
        } else {
            optionalOutput(data, out);
        }
        // console.log(`File contents: ${data}`);
    });
    console.log('reading file... ');
}

// cat(process.argv[2]);

async function webCat(url) {
    try {
        const res = await axios.get(url);
        // console.log(res.data);
        optionalOutput(res.dat, out);
    } catch (err) {
        console.log(`ERROR fetching: ${url}`);
        process.exit(1);
    }
}
// webCat(process.argv[2]);

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

// let path = process.argv[2];
if (path.slice(0, 4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out);
}