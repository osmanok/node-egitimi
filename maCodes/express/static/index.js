const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/users/:id/:postID?', (req, res) => {
   res.send(req.params);
});

app.get('/contact', (req, res) => {
   res.send('contact page');
});

app.post("/contact", (req, res) => {
    res.send("contact page post method");
});

app.all("/contact", (req, res) => {
    res.send("selam burasi app.all");
});

app.listen(3000, () => {
    console.log("server build");
});