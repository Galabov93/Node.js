var fs = require('fs');
file = process.argv[2];

buffer = fs.readFileSync(file);

arrayOfLines = buffer.toString().split('\n');

console.log(arrayOfLines.length - 1);