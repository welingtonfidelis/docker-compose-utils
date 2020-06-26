const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();

//Aceita dados do tipo json
app.use(express.json());

//permite acesso à api de qualquer dominio 
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || port, function () {
    console.log(`Server running in ${port}\n`);
});