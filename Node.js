const fs = require('fs');
const path = require('path')
const pathFile = path.join(__dirname, 'Files');
const fileName = `${pathFile}/new.txt`

// fs.writeFileSync(fileName, 'This is my New File For Learning')
// fs.readFile(fileName,'utf8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(fileName, ' I Append new text this file', (err)=>{
//     if(!err) console.log('this file Updated');
// })

// fs.rename(fileName, `${pathFile}/AA.txt`, (err)=>{
//     if(!err) console.log('update file');
// })

fs.unlinkSync(`${pathFile}/AA.txt`)