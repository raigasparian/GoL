function generator(matLen, gr, grEat, pr, By, ByE, 
    // Trp
) {
    let matrix = [];
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
    // for (let i = 0; i < Trp; i++) {
    //     let x = Math.floor(Math.random() * matLen);
    //     let y = Math.floor(Math.random() * matLen);
    //     if (matrix[x][y] == 0) {
    //         matrix[x][y] = 6;
    //     }
    // }
    return matrix;
}


let side = 20;

let matrix = generator(15, 20, 5, 5, 5, 15, );
var grassArr = []
var grassEaterArr = []
var PredaterArr = []
var BuysArr = []
var BuysEaterArr = []
// var TrapArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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
            // else if (matrix[y][x] == 6) {
            //     var Trp = new Trap(x, y)
            //     TrapArr.push(Trp)
            // }
            else if (matrix[y][x] == 8) {

            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            // else if (matrix[y][x] == 6) {
            //     fill("brown");
            //     rect(x * side, y * side, side, side);
            // }


        }
    }

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
    // for (var i in TrapArr) {
    //    TrapArr[i].mul();
    // }
    }


