socket = io();


let side = 20;
function setup() {

    frameRate(5);
    createCanvas(15 * side, 15 * side);
    background('#acacac');

    weath = "summer"

    socket.on("send weather", function (data){
        weath = data;
    })
}
function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (weath == "summer") {
                    fill("green");
                }
                else if (weath == "autumn") {
                    fill("#333300");
                }
                else if (weath == "winter") {
                    fill("white");
                }
                else if (weath == "spring") {
                    fill("#4dffa61");
                }
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
            else if (matrix[y][x] == 6) {
                fill("#429bf5");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("#4103fc");
                rect(x * side, y * side, side, side);
            }


        }
    }
}



socket.on("send matrix", nkarel)







