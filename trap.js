// class Trap {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.multiplay = 0
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ]
//     }

//     chooseCell(character) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }

//             }

//         }
//         return found;
//     }

//     mul() {
//         this.multiplay++;
//         var emptyCells = this.chooseCell(6);
//         var newCell = random(emptyCells);
//         if (newCell && this.multiplay >= 8) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 6;

//             var newTrap = new Trap(newX, newY);
//             TrapArr.push(newTrap);
//             this.multiply = 0;
//         }
//     }

// }
