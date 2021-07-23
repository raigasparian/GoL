var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs")


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


matrix = [];
function generator(matLen, gr, grEat, pr, By, ByE, Trp, TrpBK) {

    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < By; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < ByE; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < Trp; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < TrpBK; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }

    io.sockets.emit('send matrix', matrix)
    return matrix;
}


Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predater = require("./Predater")
Buys = require("./Buys")
BuysEater = require("./BuysEater")
Trap = require("./trap")
trapBreaker = require("./trapBreaker")


generator(15, 20, 5, 5, 5, 15, 10, 10);

weath = "summer"

setInterval(function () {
    console.log(weath);

    if (weath == "summer") weath = "autumn"
    else if (weath == "autumn") weath = "winter"
    else if (weath == "winter") weath = "spring"
    else if (weath == "spring") weath = "summer"

    io.sockets.emit("send weather", weath)
}, 3000)



grassArr = []
grassEaterArr = []
PredaterArr = []
BuysArr = []
BuysEaterArr = []
TrapArr = []
trapBreakerArr = []


function createobject(matrix) {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                var pr = new Predater(x, y)
                PredaterArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                var By = new Buys(x, y)
                BuysArr.push(By)
            }
            else if (matrix[y][x] == 5) {
                var ByE = new BuysEater(x, y)
                BuysEaterArr.push(ByE)
            }
            else if (matrix[y][x] == 6) {
                var Trp = new Trap(x, y)
                TrapArr.push(Trp)

            }
            else if (matrix[y][x] == 7) {
                var TrpBK = new trapBreaker(x, y)
                trapBreakerArr.push(TrpBK)

            }
            else if (matrix[y][x] == 8) {

            }
        }
    }
    io.sockets.emit("send matrix", matrix)
}

function game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat()
    }
    for (var i in PredaterArr) {
        PredaterArr[i].mul();
        PredaterArr[i].eat();
    }
    for (var i in BuysArr) {
        BuysArr[i].mul();
    }
    for (var i in BuysEaterArr) {
        BuysEaterArr[i].mul();
        BuysEaterArr[i].eat();
    }
    for (var i in TrapArr) {
        TrapArr[i].eat();
    }
    for (var i in trapBreakerArr) {
        trapBreakerArr[i].move();
        trapBreakerArr[i].mul();
        trapBreakerArr[i].eat();
        trapBreakerArr[i].die();

    }

    io.sockets.emit("send matrix", matrix);
}


setInterval(game, 1000)


var statistics = {};

setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.GrassEater = grassEaterArr.length;
    statistics.Predater = PredaterArr.length;
    statistics.Buys = BuysArr.length;
    statistics.BuysEater = BuysEaterArr.length;
    statistics.Trap = TrapArr.length;
    statistics.trapBreaker = trapBreakerArr.length;

    fs.writeFileSync("statistics.json",
        JSON.stringify(statistics))

}, 1000)

let flag = true


io.on('connection', function (socket) {

    if (flag) {
        createobject(matrix)
        flag = false
    }

    socket.on("Add Grass", function  addgrass(){

        console.log("es avelacnum em xot")
        /**/ 
        /* io.sockets.emit('send matrix', matrix)*/

    })

});


