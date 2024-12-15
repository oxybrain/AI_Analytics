const express = require('express');
const cors = require('cors');

const app = express()
const db = require('./db/db');



// en cas de pb d'auth
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

app.use(express.json())
app.use(cors())

// Routers
app.use(require('./routers/dept'));
app.use(require('./routers/pract'));
app.use(require('./routers/emp'));

// écoute les connexions
app.listen(8800, ()=>{
    console.log("Connected to backend !!");
})

// sur le home -> affichage du message
app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
})