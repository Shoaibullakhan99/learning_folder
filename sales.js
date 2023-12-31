// function sales(arr) {
//   let n = arr.length;
//   let totalSales = 0;

//   for (let i = 0; i < n; i++) {
//     totalSales += arr[i];
//   }
//   return `total revenue generated in $ is : ${totalSales}`;
// }
// console.log(sales(array));

// const array = [10, 20, 15, 30, 25, 13, 14];

// const array = [
//   52, 12, 34, 87, 23, 9, 56, 78, 90, 43, 67, 31, 72, 45, 14, 83, 64, 19, 38, 51,
//   95, 61, 29, 5, 76, 49, 26, 81, 36, 68, 92, 17, 70, 93, 40, 98, 10, 55, 30, 84,
//   7, 50, 85, 13, 37, 89, 25, 60, 88, 2, 65, 96, 22, 59, 32, 47, 75, 41, 80, 97,
//   20, 74, 44, 79, 6, 63, 21, 46, 91, 18, 69, 33, 77, 4, 86, 57, 94, 11, 82, 15,
//   39, 99, 66, 16, 54, 42, 73, 8, 35, 100, 27, 62, 48, 3, 71, 58, 24, 53, 28, 1,
// ];

const array = [
  493, 286, 167, 41, 390, 470, 271, 34, 146, 76, 126, 393, 211, 55, 238, 385,
  38, 57, 77, 461, 88, 274, 152, 404, 481, 204, 5, 398, 84, 187, 319, 346, 484,
  273, 40, 96, 249, 307, 316, 334, 240, 493, 20, 191, 409, 329, 434, 353, 413,
  475, 214, 163, 257, 321, 142, 451, 363, 208, 475, 165, 379, 21, 234, 269, 303,
  351, 172, 308, 460, 93, 219, 373, 94, 68, 254, 456, 35, 179, 406, 85, 103,
  496, 157, 23, 336, 446, 467, 200, 279, 78, 299, 382, 97, 415, 482, 290, 247,
  11, 173, 250, 342, 412, 207, 171, 64, 471, 286, 399, 442, 303, 142, 129, 183,
  298, 404, 48, 98, 170, 284, 372, 78, 193, 286, 252, 490, 460, 103, 55, 373,
  344, 148, 321, 28, 486, 356, 229, 401, 27, 498, 176, 27, 238, 275, 349, 422,
  327, 109, 214, 30, 242, 237, 80, 420, 267, 256, 156, 101, 295, 388, 431, 80,
  256, 97, 127, 181, 363, 250, 213, 33, 224, 194, 434, 59, 440, 70, 249, 112,
  287, 187, 437, 303, 276, 59, 67, 274, 358, 227, 489, 172, 246, 408, 87, 274,
  21, 4, 338, 391, 105, 202, 14, 354, 494, 19, 386, 293, 335, 157, 458, 376,
  453, 61, 362, 232, 438, 86, 239, 413, 364, 215, 48, 90, 288, 80, 276, 361,
  190, 467, 419, 306, 282, 48, 227, 446, 296, 97, 46, 101, 469, 53, 365, 209,
  36, 351, 216, 221, 231, 269, 365, 295, 345, 214, 297, 101, 242, 82, 126, 84,
  366, 211, 107, 348, 499, 230, 383, 233, 222, 249, 482, 345, 104, 89, 339, 227,
  209, 21, 399, 417, 47, 163, 84, 96, 17, 260, 118, 460, 175, 485, 186, 59, 329,
  296, 285, 47, 359, 240, 121, 232, 445, 172, 181, 96, 237, 135, 269, 379, 457,
  38, 271, 497, 236, 442, 238, 59, 139, 138, 195, 315, 197, 281, 264, 389, 201,
  303, 283, 277, 328, 348, 128, 402, 186, 369, 452, 174, 496, 478, 286, 442,
  442, 9, 155, 167, 152, 61, 365, 169, 392, 460, 439, 447, 120, 222, 88, 246,
  18, 139, 480, 195, 199, 332, 27, 227, 315, 89, 274, 337, 208, 414, 303, 455,
  176, 23, 2, 28, 17, 498, 242, 297, 192, 69, 287, 157, 111, 29, 68, 105, 404,
  84, 465, 98, 62, 108, 263, 78, 145, 105, 83, 365, 136, 265, 472, 455, 322, 91,
  309, 337, 361, 207, 380, 80, 347, 499, 141, 99, 230, 176, 274, 280, 425, 42,
  459, 430, 181, 201, 444, 356, 155, 177, 251, 141, 277, 302, 484, 42, 441, 319,
  5, 87, 493, 238, 173, 359, 299, 84, 154, 470, 243, 94, 63, 300, 337, 141, 451,
  60, 55, 192, 72, 126, 313, 171, 166, 456, 478, 276, 170, 69, 314, 33, 97, 36,
  335, 348, 77, 154, 431, 185, 430, 146, 118, 103, 242, 250, 49, 345, 255, 260,
  103, 201, 334, 470, 261, 493, 422, 363, 366, 329, 352, 224, 87, 287, 460, 342,
  355, 66, 157, 991,
];

class Sales {
  #totalRevenue = 0;
  constructor(arr) {
    this.arr = arr;
    this.n = arr.length;
  }

  totalSales = () => {
    for (let i = 0; i < this.n; i++) {
      this.#totalRevenue += this.arr[i];
    }
    return this.#totalRevenue;
  };

  averageSales = () => {
    return (this.#totalRevenue / this.n).toFixed(40);
  };
}

const newSales = new Sales(array);

console.log("Total Sales :- ", newSales.totalSales());

console.log("Total Revenue :- ", newSales.totalRevenue);
console.log(
  `Total Revenue is undefined because it is a private member of the class Sales and hence abstracted`
);
console.log("Input length :- ", newSales.n);

console.log("Average Sales :- ", newSales.averageSales());
