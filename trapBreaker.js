class trapBreaker extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
        chooseCell(character) {
            this.getNewCoordinates()
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
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if (newCell && this.multiplay >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            var newtrapBreaker= new trapBreaker(newX, newY);
            trapBreakerArr.push(newtrapBreaker);
            this.multiplay = 0;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(6)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in TrapArr) {
                if (newX == TrapArr[i].x && newY == TrapArr[i].y) {
                    TrapArr.splice(i, 1)
                    break
                }
            }
        }
        else {
            this.move()
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in trapBreakerArr) {
            if (this.x == trapBreakerArr[i].x && this.y == trapBreakerArr[i].y) {
                trapBreakerArr.splice(i, 1);
                break;
            }
        }
    }

    }
     
