const express = require('express');
const path = require('path');

const app= express();
const pathFile = path.join(__dirname, 'Files');

// app.get('', (req, rep)=>{
//     rep.send(`Welcome, ${req.query.name} My Home Page `);
// })

// app.get('/next', (req, rep)=>{
//     rep.send("Welcome MY next Page"+ req.query.id+10);
// })

// app.get('/about', (req, rep)=>{
//     rep.send("THis Is about Page")
// })

app.use(express.static(pathFile));
app.listen(4500);