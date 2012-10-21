#!/usr/bin/env node
var Twit = require("twit");
var config = require("./config");

var T = new Twit(config.twitter);

var finishDate = config.finishDate;

var days = Math.floor((new Date(finishDate.year, finishDate.month-1, finishDate.day) - new Date()) / (1000 * 60 * 60 * 24));
// 5: Big Muslim Feast
// 4: mo5atat ra7at
// 6: actual delivery on 25th
var serviceDays = days - (5 + 4 + 6 + Math.floor(days/7));

var status = "- " + days + " days to finish\n- " + serviceDays + " service days left\n #MilitaryService #AUTOMATED";

if (process.argv[2] !== "-e") {
    T.post("statuses/update", { status: status },
        function(err, reply) {
            if (err)
                console.log("Failed !!!\n" + err);
    });
}

console.log(status);
