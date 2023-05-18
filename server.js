const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set("/","html");
app.use(express.static(path.join(__dirname,"/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req, res) => {
 res.render('index');
});

app.listen(port, () => {
 console.log("Server is running on port no: " + port);
});
