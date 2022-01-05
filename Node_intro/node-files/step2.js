const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(`Error reading: ${err}`);
            process.exit(1);
        }
        console.log(`File contents: ${data}`);
    });
    console.log('reading file... ');
}

// cat(process.argv[2]);


// async function webCat(url) {
//     fs.readFile(url, 'utf8', function(err, data) {
//         let res = axios.get(url).then(function(res) {
//             console.log(res.data.slice(0, 80), '...');
//         });
//         if (err) {
//             console.log(`Error reading: ${err}`);
//             process.exit(1);
//         }
//     });
// }
// webCat(process.argv[2]);

async function webCat(url) {
    try {
        const res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.log(`ERROR fetching: ${url}`);
        process.exit(1);
    }
}
// webCat(process.argv[2]);
let path = process.argv[2];
if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}