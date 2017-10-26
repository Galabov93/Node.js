var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        throw err;
    }

    for (var file in list) {
        myFile = list[file];
        myExtension = myFile.split('.')[1];

        if (myExtension == process.argv[3]) {
            console.log(myFile);
        }
    }
});