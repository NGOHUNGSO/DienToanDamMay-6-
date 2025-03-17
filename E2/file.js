const fs = require('fs');
fs.readFile('./docfile.txt', (err, data) => {
    if (err) {
        return console.log('Error occurred while reading file');
    }
    console.log(data.toString());
});
const path = './config.js';
// fs.access(path, fs.F_OK, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
// });
fs.open('./docfile.txt', 'w', (err, file) => {
    if (err) {
        throw err;
    }
    console.log('Saved!');
});
fs.writeFile('./docfile.txt', 'Hello Word!', (err) => {
    if (err) {
        throw err;
    }
    console.log('Saved!');
});
fs.appendFile('./docfile.txt', ' Hello World', (err) => {
    if (err) {
        throw err;
    }
    console.log('Updated!');
})
// fs.unlink('./docfile.txt', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('File deleted!');
// });
fs.rename('./docfile.txt', 'newfile.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File Renamed!');
});
fs.copyFile('./docfile.txt', 'copyfile.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File is copied!');
});