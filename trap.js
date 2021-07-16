let LivingCreature = require("./livingcreature.js") 

module.exports = class Trap {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiplay = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }

  

    eat() {
        var emptyCells = this.chooseCell(0)
        var emptyCells = this.chooseCell(1)
        var emptyCells = this.chooseCell(2)
        var emptyCells = this.chooseCell(3)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }
            for (var i in BuysEaterArr) {
                if (newX == BuysEaterArr[i].x && newY == BuysEaterArr[i].y) {
                    BuysEaterArr.splice(i, 1)
                    break
                }
            }
            for (var i in PredaterArr) {
                if (newX == PredaterArr[i].x && newY == PredaterArr[i].y) {
                    PredaterArr.splice(i, 1)
                    break
                }
            }
            for (var i in PredaterArr) {
                if (newX == PredaterArr[i].x && newY == PredaterArr[i].y) {
                    PredaterArr.splice(i, 1)
                    break
                }
            }

        }
    }
}
