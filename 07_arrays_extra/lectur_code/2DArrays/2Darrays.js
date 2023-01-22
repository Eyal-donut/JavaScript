// JavaScript does not provide the multidimensional array natively.
//  However, you can create a multidimensional array by defining an array of elements,
//  where each element is also another array.

// For this reason, we can say that a JavaScript multidimensional array is an array of arrays.
//  The easiest way to define a multidimensional array is to use the array literal notation.

// Before we talk about code, let's check what is a an array

let array = [4, -3, 7, 8];

// So when I choose the index 2, we'll get:

// console.log(array[2]); //7

// ! Using Square Brackets
// Now let's create a 2D array

// !EX 1-A

// let varName = [
//   [ elements ],
//   [ elements ],
//   [ elements ] ... ];

var chessBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];
console.log(chessBoard.join("\n"));

// !EX 1-B

let array2D = [
  [4, -3, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
];

// console.table(array2D);

// So when I choose the index 2, we'll get:

// console.log(array2D[1][2]); //3

// !EX 1-C

// Now let's create a 3D array

let array3D = [
  [
    [4, -3, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
  ],
  [
    [4, -3, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
  ],
  [
    [4, -3, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
  ],
];

// console.table(array3D);

// So when I choose the index 2, we'll get:

// console.log(array3D[1][2][3]); //9

// !Using Array constructor

let cols = 10;
let rows = 10;

let grid = new Array(cols);
console.log(grid);

for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(rows);
}

// console.log(grid);

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    grid[i][j] = i + j;
  }
}

// console.table(grid);

// !Using Array.from() function

// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

// const M = 3,
//   N = 4;
// var arr = Array.from(Array(M), () => new Array(N));
// console.log(arr);

// !Using Array.prototype.map() function

// const M = 3,
//   N = 4;
// var arr = Array(M)
//   .fill()
//   .map(() => Array(N));
// console.log(arr);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let colors = [];
let i = 0;
let j = 0;

function setup() {
  for (let i = 0; i < cols; i++) {
    colors[i] = [];
    console.log(colors);
    for (let j = 0; j < rows; j++) {
      // colors[i][j] = "000000";
      colors[i][j] = Math.floor(Math.random() * 16777215).toString(16);
      // toString(16) converts a number to a hexidecimal value, Base 16: Hexadecimal, 16 symbols: [0, 9] and [A, F]
      // The number 16,777,215 is the total possible combinations of RGB(255,255,255) which is 32 bit colour.
    }
  }
}

function drawGrid() {
  setup();
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      let x = i * 20;
      let y = j * 20;
      ctx.strokeRect(x, y, 20, 20);
      ctx.fillStyle = "#" + colors[i][j];
      ctx.fillRect(x, y, 20, 20);
    }
  }
}
drawGrid();
