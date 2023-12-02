let massive = [1,2,3,-1,6];

// 1.concat()
// Array.prototype.concat = function arr() {
//   let result = this.slice();
//   for (let i = 0; i < arguments.length; i++) {
//     let arg = arguments[i];
//     if (Array.isArray(arg)) {
//       for (let j = 0; j < arg.length; j++) {
//         result.push(arg[j]);
//       }
//     } else {
//       result.push(arg);
//     }
//   }
//   return result;
// };

// console.log(arr.concat());

// 2.copyWithin()
// Array.prototype.copyWithin = function (target, start, end) {
//   end = end === undefined ? this.length : end;
//   target = target < 0 ? this.length + target : target;
//   start = start < 0 ? this.length + start : start;
//   let count = Math.min(end - start, this.length - target);
//   for (let i = 0; i < count; i++) {
//     this[target + i] = this[start + i];
//   }

//   return this;
// };

// 3.entries()
//   Array.prototype.entries = function () {
//     let arr = this;
//     let index = 0;
//     return {
//       next: function () {
//         return index < arr.length
//           ? { value: [index, arr[index++]], done: false }
//           : { done: true };
//       },
//     };
//   };

// let newArr = arr.entries();

// 4.fill()
//   Array.prototype.fill = function (value, start, end) {
//     start = start || 0;
//     end = end || this.length;
//     if (start < 0) {
//       start = Math.max(0, this.length + start);
//     }
//     if (end < 0) {
//       end = Math.max(0, this.length + end);
//     }
//     for (let i = start; i < end; i++) {
//       this[i] = value;
//     }

//     return this;
//   };

// arr.fill(0, 2, 4);

// 5.find()
// Array.prototype.find = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };

// let first = arr.find(function (number) {
//   return number > 2;
// });

// 6.findIndex()
// Array.prototype.findIndex = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return i;
//     }
//   }
//   return -1;
// };

// let index = arr.findIndex(function (number) {
//   return number > 4;
// });

// 7.flat()
//     Array.prototype.flat = function(depth = 1) {
//       let flattened = [];
//       for (let i = 0; i < this.length; i++) {
//         if (Array.isArray(this[i]) && depth > 0) {
//           flattened.push(...this[i].flat(depth - 1));
//         } else {
//           flattened.push(this[i]);
//         }
//       }
//       return flattened;
//     };

//   let arrNew = [1, 2, [3, 4, [5, 6]]];
//   let flattenedArr = arrNew.flat(2);
//   console.log(flattenedArr);

// 8.flatMap()
// Array.prototype.flatMap = function (cb) {
//   return Array.prototype.concat.apply([], this.map(cb));
// };

// let mappedArr = arr.flatMap((x) => [x * 2]);
// console.log(mappedArr);

// 9.forEach()
// Array.prototype.forEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// const arr = [1, 2, 3, 4];
// arr.forEach((item) => {
//   console.log(item);
// });

// 10.includes()
// Array.prototype.includes = function (valueToFind, fromIndex = 0) {
//   if (fromIndex >= this.length) {
//     return false;
//   }
//   if (fromIndex < 0) {
//     fromIndex = Math.max(0, this.length + fromIndex);
//   }
//   for (let i = fromIndex; i < this.length; i++) {
//     if (this[i] === valueToFind) {
//       return true;
//     }
//   }
//   return false;
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));
// console.log(arr.includes(8));

// 11.indexOf()
// Array.prototype.indexOf = function(searchElement, fromIndex) {
//     let arr = this;
//     let startIndex = fromIndex || 0;

//     for (let i = startIndex; i < arr.length; i++) {
//       if (arr[i] === searchElement) {
//         return i;
//       }
//     }
//     return -1;
//   };

//   // Test
//   let arr = [2, 5, 9, 2];
//   let result = arr.indexOf(2, 2);
//   console.log(result);

// 12.join()
// Array.prototype.join = function (separator) {
//   let arr = this;
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0) {
//       result += separator;
//     }
//     result += arr[i];
//   }
//   return result;
// };

// let arr = ["Salom", "dunyo", "men", "JavaScript", "bilanman"];
// let result = arr.join(" ");
// console.log(result);

// 13.keys()
// Array.prototype.keys = function() {
//     let arr = this;
//     let keysArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       keysArr.push(i.toString());
//     }
//     return keysArr;
//   };

//   let arr = ['a', 'b', 'c'];
//   let result = arr.keys();
//   console.log(result);

// 14.lastIndexOf()
// Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
//   if (this === undefined || this === null) {
//     throw new TypeError('"this" is null or not defined');
//   }

//   let arr = Object(this);
//   let len = arr.length >>> 0;

//   let n = len - 1;
//   if (arguments.length > 1) {
//     n = Number(fromIndex);
//     if (n != n) {
//       n = 0;
//     } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
//       n = (n > 0 || -1) * Math.floor(Math.abs(n));
//     }
//   }

//   let k;
//   if (n >= 0) {
//     k = Math.min(n, len - 1);
//   } else {
//     k = len - Math.abs(n);
//   }

//   for (; k >= 0; k--) {
//     if (k in arr && arr[k] === searchElement) {
//       return k;
//     }
//   }
//   return -1;
// };

// let arr = [4, 5, 9, 5];
// let index = arr.lastIndexOf(2);
// console.log(index);

// 15.map()
// Array.prototype.map = function (cb, thisArg) {
//   if (this == null) {
//     throw new TypeError("this is null or not defined");
//   }
//   if (typeof cb !== "function") {
//     throw new TypeError(cb + " is not a function");
//   }

//   let newArr = [];
//   let obj = Object(this);
//   let len = obj.length >>> 0;
//   for (let i = 0; i < len; i++) {
//     if (i in obj) {
//       newArr[i] = cb.call(thisArg, obj[i], i, obj);
//     }
//   }
//   return newArr;
// };

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(function (item) {
//   return item * 2;
// });
// console.log(newArr);

// 16.pop()
// Array.prototype.pop = function () {
//   if (this.length === 0) {
//     return undefined;
//   }
//   let removedElement = this[this.length - 1];
//   this.length = this.length - 1;
//   return removedElement;
// };

// let arr = [1, 2, 3, 4, 5];
// let removed = arr.pop();
// console.log(removed);
// console.log(arr);

// 17.push()
// Array.prototype.push = function (el) {
//   let length = this.length;
//   for (let i = 0; i < el.length; i++) {
//     this[length + i] = el[i];
//   }
//   return this.length;
// };

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// 18.reduce()
// Array.prototype.reduce = function(cb, b) {
//     let a = b !== undefined ? b : this[0];
//     let startIndex = b !== undefined ? 0 : 1;
//     for (let i = startIndex; i < this.length; i++) {
//       a = cb(a, this[i], i, this);
//     }
//     return a;
//   };

//   let arr = [1, 2, 3, 4];
//   let natija = arr.reduce((total, current) => total + current, 0);
//   console.log(natija);

// 19.reduceRight()
// Array.prototype.reduceRight = function(cb, b) {
//     let a = b !== undefined ? b : this[this.length - 1];
//     let endIndex = b !== undefined ? this.length - 1 : this.length - 2;
//     for (let i = endIndex; i >= 0; i--) {
//       a = cb(a, this[i], i, this);
//     }
//     return a;
//   };

//   let arr = [1, 2, 3, 4];
//   let result = arr.reduceRight((total, current) => total + current, 0);
//   console.log(result);

// 20.reverce()
// Array.prototype.reverse = function () {
//   let left = 0;
//   let right = this.length - 1;
//   while (left < right) {
//     let temp = this[left];
//     this[left] = this[right];
//     this[right] = temp;
//     left++;
//     right--;
//   }
//   return this;
// };

// let arr = [1, 2, 3, 4];
// arr.reverse();
// console.log(arr);

// 21.shift()
// Array.prototype.shift = function () {
//   if (this.length === 0) {
//     return undefined;
//   }
//   const result = this[0];
//   for (let i = 0; i < this.length - 1; i++) {
//     this[i] = this[i + 1];
//   }
//   this.length--;
//   return result;
// };

// let arr = [1, 2, 3, 4];
// let shifted = arr.shift();
// console.log(shifted);
// console.log(arr);

// 22.slice()
// Array.prototype.slice = function (start, end) {
//   const newArray = [];
//   const length = this.length;
//   let startIdx = start >= 0 ? start : Math.max(length + start, 0);
//   let endIdx =
//     end !== undefined
//       ? end >= 0
//         ? Math.min(end, length)
//         : length + end
//       : length;
//   for (let i = startIdx; i < endIdx; i++) {
//     newArray.push(this[i]);
//   }
//   return newArray;
// };

// let arr = [1, 2, 3, 4, 5];
// let sliced = arr.slice(1, 3);
// console.log(sliced);

// 24.some()
// Array.prototype.some = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.some((element) => element % 2 === 0);
// console.log(newArr);

// 25.sort()
// Array.prototype.sort = function(cb) {
//     for (let i = 0; i < this.length - 1; i++) {
//       for (let j = i + 1; j < this.length; j++) {
//         if (cb(this[i], this[j]) > 0) {
//           let temp = this[i];
//           this[i] = this[j];
//           this[j] = temp;
//         }
//       }
//     }
//     return this;
//   };

//   let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
//   arr.sort((a, b) => a - b);
//   console.log(arr);

// 26.splice()
// Array.prototype.splice = function(start, deleteCount, ...items) {
//     const deletedItems = this.slice(start, start + deleteCount);
//     this.splice(start, deleteCount);
//     for (let i = items.length - 1; i >= 0; i--) {
//       this.splice(start, 0, items[i]);
//     }
//     return deletedItems;
//   };

//   let arr = [1, 2, 3, 4, 5];
//   let deleted = arr.splice(1, 2, 'a', 'b', 'c');
//   console.log(arr);
//   console.log(deleted);

// 27.toLocaleString()
// Array.prototype.toLocaleString = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     if (i > 0) {
//       result += ", ";
//     }
//     result += this[i].toLocaleString();
//   }
//   return result;
// };

// 28.toString()
// Array.prototype.toString = function () {
//   if (this.length === 0) {
//     return "";
//   }

//   let result = "";
//   for (let i = 0; i < this.length - 1; i++) {
//     result += this[i] + ",";
//   }
//   result += this[this.length - 1];

//   return result;
// };

// 29.unShift()
// Array.prototype.unshift = function () {
//   let args = Array.prototype.slice.call(arguments);
//   let newLength = this.length + args.length;

//   for (let i = newLength - 1; i >= args.length; i--) {
//     this[i] = this[i - args.length];
//   }

//   for (let j = 0; j < args.length; j++) {
//     this[j] = args[j];
//   }

//   return newLength;
// };

// 30.values()
// Array.prototype.myValues = function () {
//   let index = 0;
//   return {
//     next: () => {
//       return index < this.length
//         ? { value: this[index++], done: false }
//         : { done: true };
//     },
//   };
// };

let arr = [1, 2, 3];
let iterator = arr.myValues();