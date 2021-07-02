class Buys {
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

    mul() {
        this.multiplay++;
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);

        console.log(emptyCells);
        if (newCell && this.multiplay >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newBuys = new Buys(newX, newY);
            BuysArr.push(newBuys);
            this.multiply = 0;
        }
    }

}