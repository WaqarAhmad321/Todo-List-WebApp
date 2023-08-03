// Import the express, body-parser, and date modules.
const express = require('express');
const bodyParser = require('body-parser');
const { getDate } = require('./date');

const app = express();

// Set the view engine to ejs.
app.set("view-engine", "ejs");

// Use the body-parser middleware to parse the request body.
app.use(bodyParser.urlencoded({ extended: true }));

// Use the express.static middleware to serve static files from the public directory.
app.use(express.static("public"));

const port = 3000;

// Define an array of items.
const items = ["Buy Food", "Cook Food", "Eat Food"];

// Define a route to get the list of items.
app.get('/', (req, res) => {
    let day = getDate();
    // Render the list.ejs template with the current day and the list of items.
    res.render('list.ejs', { kindOfDay: day, newListItems: items });
});

// Define a route to post a new item.
app.post('/', (req, res) => {
    // Get the new item from the request body.
    let item = req.body.newItem;

    // Add the new item to the list of items.
    items.push(item);

    // Redirect to the root route.
    res.redirect('/');
});


app.listen(port, () => {
    console.log(`Server listening on ${port}.`);
});

