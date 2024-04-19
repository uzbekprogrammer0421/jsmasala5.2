// 1-task 


// let array = ["text", "world", "laptop"];
// let massiv = {}
// for (let i = 0; i < array.length; i++) {
//     let length_num = array[i].length  
//     massiv[array[i]] = length_num
// }
// console.log(massiv);


// 2-task 


// function word(params) {
//     let arr = params.split(" ").filter(item => item !== "");
//     let minWord = arr[arr.length-1];
//     let maxWord = arr[0];
//     let obj = {}
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].length > maxWord.length) {
//             maxWord = index
//         }
//         if (arr[index].length < minWord.length) {
//             minWord = index
//         }
//     }
//     obj.minWord = arr[minWord]
//     obj.maxWord = arr[maxWord]
//     console.log(obj);
// }
// word("Men dasturlash kursida o'qiyman");


// 3-task 


// function degree(params) {
//     let num = 1
//     let arr = []
//     for (let i = params; i >= 1; i--) {
//        num = num * 2 
//        arr.push(num) 
//     }
//     console.log(arr);
// }
// degree(5)


// 4-task 


// function word(params) {
//     let arr = params.split(" ").filter(item => item !== "");
//     let minWord = arr[0];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].length < minWord.length) {
//             minWord = arr[index]
//         }
//     }
//     return minWord
// }
// console.log(word("Men dasturlash kursida o'qiyman A "));


// 5-task immutable ko'rinishi


// function inc(params) {
//     const obj = {a: 2, b: 3, c: 4};
//     let new_obj = {};
//     let i = 0;
//     for (const key in obj) {
//         new_obj[key] = obj[key] * params;
//     }
//     return new_obj;
// }
// console.log(inc(5));


// 5-task mutable ko'rinishi



// function inc(params) {
//     const obj = {a: 2, b: 3, c: 4};
//     for (const key in obj) {
//         obj[key] = obj[key] * params;
//     }
//     return obj;
// }
// console.log(inc(6));


// 6-task 1-usul


// function countNumbers(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '1' || str[i] === '2' || str[i] === '3' || str[i] === '4' || str[i] === '5' || str[i] === '6' || str[i] === '7' || str[i] === '8'|| str[i] === '9' || str[i] === '0') {
//             count++
//         }
//     }
//     console.log(count);
// }

// countNumbers("Asilbek2077804");


// 6-task 2-usul


// function countNumbers(str) {
//     const numbers = str.match(/\d/g);
//     return numbers ? numbers.length : 0;
// }
// console.log(countNumbers("akasd12345"));


// 6-task 3-usul


// function countNumbers(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(parseInt(str[i]))) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countNumbers("Asilbek2067804");


// 7-task 


// const total = (...params) => {
//     let array = [...params]
//     let result = 0
//     for(let i = 0; i < array.length; i++) {
//       result += (+array[i])
//     }
//     let arr = Array.from(result.toString(),Number)
//     return arr
//   }
//   console.log(total(1,22,3));


// 8-task 


// function word(...params) {
//     let arr = [...params]
//     let count = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].includes('a')) {
//             count ++
//         }
//     }
//     console.log(count);
//     return count
// }
// word("asilbek","abdullayev","anvar o'g'li")


// 9-task 1-usul


// let number = 8
// let k = 0
// while(number > 1){
//     k++
//     number /= 2
// }
// console.log(k);



// 9-task 2-usul


// let number = 8
// let k = 0
// for (let i = number; i > 1; i/=2) {
//     k++
// }
// console.log(k);