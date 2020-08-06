// require("dotenv").config();

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 6900;

// let APIKey = process.env.APIKey

app.set("view engine", "ejs");
app.use(express.static("static"));

app.get("/", (req, res) => {
    let qs = {
        params: {
            s: "star wars",
            apiKey: "8de3572f"
        }
    };
    axios.get("http://www.omdbapi.com", qs)
        .then((response) => {
            console.log(response.data);
            let episodes = response.data.Search;
            res.render("home", {episodes});
        }).catch(err => {
            console.log(err);
    })
})

app.listen(PORT);