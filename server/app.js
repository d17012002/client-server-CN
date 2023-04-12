const express = require("express");
const bodyParser = require("body-parser");
const{ DateTime } = require('luxon');

const app  = express();
app.use(bodyParser.urlencoded({ extended: true }));

//*********** Middleware **************************/
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.route("/")
   .get((req, res) => {
        let d = DateTime.local();

        let date = d.toLocaleString(DateTime.DATE_FULL);
        let time =  d.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET);

        const obj = {
            DATE : date,
            TIME : time
        }
        res.send(obj);
   });

app.listen(process.env.PORT || 5000, function () {
    console.log("Server running at 🚀: http://localhost:3000/");
});
