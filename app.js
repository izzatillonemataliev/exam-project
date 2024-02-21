// ---1Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.
// Example
/*
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
// function removeFirstOccurrences(str, value) {
//     // your code
// }

// function removeFirstOccurrences(str, value) {
//   const index = str.indexOf(value);
//   if (index !== -1) {
//     return str.slice(0, index) + str.slice(index + value.length);
//   }
// }
// console.log(removeFirstOccurrences("To be or not to be", "not"));
// console.log(removeFirstOccurrences("I like legends", "end"));
// console.log(removeFirstOccurrences("ABABAB", "BA"));



// --------------2Birinchi va so’ngi burchali qavslarni olib tashlang.----------------------------
// example
/*
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
// function unbracketTag(str) {
//     // your code
// }

// function unbracketTag(str) {
//   let startIndex = str.indexOf("<") + 1;
//   let endIndex = str.lastIndexOf(">");
//   return str.slice(startIndex, endIndex);
// }

// console.log(unbracketTag('<div>'));
// console.log(unbracketTag("<span>"));
// console.log(unbracketTag("<a>"));

// -----------------3Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:---------------

// Example
/*
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */

// function isPrime(n) {
//   // your code
// }
// let son = prompt(`soni kiritng:`);
// function isPrime() {
//   if (son % 2 == 1) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }
// isPrime();

// ----------------4Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.------------------------------------------------------------------------
// Example
// const country = [
//     { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' }
//   ];
//   function organizeCitiesByCountry(arr) {
//     let result = {};

//     arr.forEach(item => {
//         if (!result[item.country]) {
//             result[item.country] = [];
//         }
//         result[item.country].push(item.city);
//     });

//     return result;
// }

// const data = [
//     { country: 'Belarus', city: 'Brest' },
//     { country: 'Russia', city: 'Omsk' },
//     { country: 'Russia', city: 'Samara' },
//     { country: 'Belarus', city: 'Grodno' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Lodz' }
// ];
// console.log(organizeCitiesByCountry(data));

//------------- 5n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.------------------
// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/
// function getSumBetweenNumbers(n1, n2) {
//     // your code
// }
// function getSumBetweenNumbers(n1, n2) {
//   let sum = 0;
//   if (n1 > n2) {
//     [n1, n2] = [n2, n1];
//   }
//   for (let i = n1; i <= n2; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSumBetweenNumbers(1, 2));
// console.log(getSumBetweenNumbers(5, 10));
// console.log(getSumBetweenNumbers(-1, 1));

//--------- 7  nta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing-------------------------------------------
// const numbers = [3, 5, 3, 5, 6, 7, 8, 5, 4, 5, 4, 7];
// const OneNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (!OneNumbers.includes(numbers[i])) {
//     OneNumbers.push(numbers[i]);
//   }
// }
// console.log(OneNumbers);

/*--------9Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan. -------------------------*/
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// function alreadyRead(books) {
//   books.forEach((book) => {
//     if (book.alreadyRead) {
//       console.log(`${book.author}ning ${book.title} kitobi o'qiglan`);
//     } else {
//       console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
//     }
//   });
// }

// alreadyRead(books);
