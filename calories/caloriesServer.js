var express = require('express');
var request = require('request');
var app = express();
app.use(express.json())

let calories = 0.0;
let tracked=[];

app.get('/calories/getCurrentCalories', function (req, res) {
    console.log(req.body);
    res.json({calories:calories});
});

app.get('/calories/getChanges', function (req, res) {
    res.json(tracked);
});

app.post('/calories/caloriesGained', function (req, res) {
    if (track(req.body, true)) {
        res.json({calories:calories});
    }
    else {
        res.json({error: "Please provide a name and an amount of calories"});
    }
});

app.post('/calories/caloriesBurned', function (req, res) {
    if (track(req.body, false)) {
        res.json({calories:calories});
    }
    else {
        res.json({error: "Please provide a name and an amount"});
    }
});

app.post('/calories/caloriesCleared', function (req, res) {
    calories = 0.0;
    tracked=[];
    res.json({calories:calories});
    res.json(tracked);
});

function track(trans, deposit) {
    if ("name" in trans && "amount" in trans && typeof trans.amount === 'number') {
        trans.time=Date.now();
        if (deposit) {
            trans.type="caloriesGained";
            calories += trans.amount;
        }
        else {
            trans.type="caloriesBurned";
            calories -= trans.amount;
        }
        tracked.push(trans);
        return true;
    }
    else {
        return false
    }
}

var server = app.listen(8092, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
