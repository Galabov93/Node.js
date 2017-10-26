var fs = require('fs');

fs.mkdir('TestFolder', (err) => {
    if (err) console.log("Passs this shit")
    console.log("Dir created")

    fs.writeFile('TestFolder/test.txt', 'Some text for the file', (err) => {
        if (err) {
            console.log("We coudn't create the file")
        }
    })
})

fs.rmdir('TestFolder', (err) => {
    if (err) console.log('ne moga da q removena')

    console.log("Dir removed")
})