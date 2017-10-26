var filter = require('./filter_files_by_extension.js');

// console.log(typeof filter);
filter(process.argv[2], process.argv[3], function(err, list) {
    for (var file in list) {
        console.log(file)
        myFile = list[file];
        myExtension = myFile.split('.')[1];

        if (myExtension == process.argv[3]) {
            console.log(myFile);
        }
    }
});


// filterFilesByExtension(process.argv[2], process.argv[3]);