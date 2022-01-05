const fs = require('fs');
const process = require('process');


// function cat() {
//     fs.readFile('one.txt', 'utf8', function(err, data) {
//         if (err) {
//             console.log("ERROR", err);
//             process.exit(1);
//         }
//         console.log(`File contents: ${data}`);
//     });
//     console.log('reading file...')
// }
// cat(process.argv[1]);

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

cat(process.argv[2]);