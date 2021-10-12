const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://mongodb:27017/db-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));

const userSchema = mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("users", userSchema);

app.get("/", function (req, res) {
    res.send("Hello");
})

app.post("/user", function (req, res) {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
    });

    user.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
    });

    res.send("User created");
})

app.get("/users", function (req, res) {
    User.find({}, function (err, users) {
        if (err) return console.error(err);
        res.send(users);
    });
})


app.listen(5000, function () {
    console.log("Server started on port 5000");
});