#!/usr/bin/env node
var Twit = require("twit");

var T = new Twit(require("./config"));

var days = Math.floor((new Date(2012, 10, 25) - new Date()) / (1000 * 60 * 60 * 24));
var serviceDays = days - (5 + Math.floor(days/7) + 4);

var status = "- " + days + " days to finish\n- " + serviceDays + " service days left\n #MilitaryService #AUTOMATED";

T.post("statuses/update", { status: status },
    function(err, reply) {
        if (err)
            console.log("Failed !!!\n" + err);
});

console.log(status);
