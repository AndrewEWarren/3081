var express = require('express');
var request = require('request');
var app = express();
app.use(express.json())

let calories = 0.0;
let transactions=[];

app.get('/calCount/getCurrentCalories', function (req, res) {
    console.log(req.body);
    res.json({calories:calories});
});

app.get('/calCount/getChanges', function (req, res) {
    res.json(transactions);
});

app.post('/calCount/caloriesGained', function (req, res) {
    if (transact(req.body, true)) {
        res.json({calories:calories});
    }
    else {
        res.json({error: "Please provide a name and an amount of calories"});
    }
});

app.post('/calCount/caloriesBurned', function (req, res) {
    if (transact(req.body, false)) {
        res.json({calories:calories});
    }
    else {
        res.json({error: "Please provide a name and an amount of calories"});
    }
});

function transact(trans, deposit) {
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
        transactions.push(trans);
        return true;
    }
    else {
        return false
    }
}

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});