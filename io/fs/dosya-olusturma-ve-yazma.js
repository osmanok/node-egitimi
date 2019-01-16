/*
* fs.appendFile()
* fs.writeFile()
* */

const fs = require('fs');

fs.writeFile('demo.txt', 'hello world', (err) => {
    if (err)
        throw err;

    console.log('dosyaya ekleme yapıldı');
});