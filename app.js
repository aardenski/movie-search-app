var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
})

app.get("/results", (req, res) => {
    var query = req.query.search; //getting the query from the search form
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data}    );
            // res.send(results.Search[0].Title);
        }
    })
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Movie App has started on 3000");
})