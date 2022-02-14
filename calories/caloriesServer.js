var express = require('express');
var request = require('request');
var app = express();
app.use(express.json())

let balance = 0.0;
let transactions=[];

app.get('/calories/getCurrentCalories', function (req, res) {
    console.log(req.body);
    res.json({balance:balance});
});

app.get('/calories/getChanges', function (req, res) {
    res.json(transactions);
});

app.post('/calories/caloriesGained', function (req, res) {
    if (transact(req.body, true)) {
        res.json({balance:balance});
    }
    else {
        res.json({error: "Please provide a name and an amount of calories"});
    }
});

app.post('/calories/caloriesBurned', function (req, res) {
    if (transact(req.body, false)) {
        res.json({balance:balance});
    }
    else {
        res.json({error: "Please provide a name and an amount"});
    }
});

function transact(trans, deposit) {
    if ("name" in trans && "amount" in trans && typeof trans.amount === 'number') {
        trans.time=Date.now();
        if (deposit) {
            trans.type="deposit";
            balance += trans.amount;
        }
        else {
            trans.type="withdraw";
            balance -= trans.amount;
        }
        transactions.push(trans);
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
