const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');

// Initialize empty arrays for items and workItems
const items = [];
const workItems = [];

// Get the current year using the getYear() function from the date module
const currentYear = date.getYear();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handler for the root route ("/")
app.get("/", function (req, res) {
    // Get the current date and format it
    const today = date.getDate();
    // Render the 'list' view with the current date, items array, and currentYear
    res.render('list', {
        listTitle: today,
        newListItems: items,
        currentYear: currentYear // Provide the currentYear to the template
    });
});

// Handler for the POST request on the root route ("/")
app.post("/", function (req, res) {
    // Get the new item from the request body
    const item = req.body.newItem;

    // Check if the list is the 'Work' list
    if (req.body.list === "Work" || req.body.list === "work") {
        // Add the item to the workItems array
        workItems.push(item);

        // Redirect to the '/work' page
        res.redirect("/work");
    } else {
        // Add the item to the items array
        items.push(item);

        // Redirect to the root page
        res.redirect("/");
    }
});

// Handler for the "/work" route
app.get("/work", function (req, res) {
    // Render the 'list' view with the title 'Work List', workItems array, and currentYear
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems,
        currentYear: currentYear // Provide the currentYear to the template
    });
});

// Handler for the POST request on the "/work" route
app.post("/work", function (req, res) {
    // Get the new item from the request body
    const item = req.body.newItem;

    // Add the item to the workItems array
    workItems.push(item);

    // Redirect to the '/work' page
    res.redirect("/work");
});

// Handler for the "/about" route
app.get("/about", function (req, res) {
    // Render the "about" view with currentYear
    res.render("about", {
        currentYear: currentYear // Provide the currentYear to the template
    });
});

// Start the server on port 3000
app.listen(3000, function () {
    console.log("Server started on port 3000");
});