//====================================
//            Challenge 1
//====================================
// The Collatz Conjecture goes like this:
// Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. Repeat the process indefinitely, and you'll eventually reach 1.
// Given a num variable, can you print all the numbers in num's Collatz sequence until 1 is reached? Print the numbers space-separated (and each test case on its own line).

// function collatzConjecture(num) {
//     sequence = '';
//     while (num != 1) {
//         if (num % 2 == 0) {
//             num = num / 2;
//             sequence += num + ', ';
//         } else {
//             num = num * 3 + 1;
//             sequence += num + ', ';
//         }
//     }
//     console.log(sequence);
// }
// collatzConjecture(10);


//====================================
//            Challenge 2
//====================================
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// function largestPalindromicNum () {
//     let largestPalindromic = 0;
//     let product1 = 0;
//     let product2 = 0;
//     for (let i = 100; i <= 999; i++) {
//         if (i == 913) {
//             let dummvar =1;
//         }
//         for (let ii = 100; ii <= 999; ii++) {
//             if (ii == 993) {
//                 let dummyvar2 = 1;
//             }
//             let palinNum = i * ii;
//             palinNum = String(palinNum); //convert out number to a string so we can iterate over it
//             let palinNumSplit = palinNum.split(''); //convert to an array
//             let palinNumReverse = palinNumSplit.reverse(); //reverse the array
//             let palinNumJoined = palinNumReverse.join(''); //turn the array back into a string
//             if (palinNum == palinNumJoined) {
//                 if (Number(palinNum) > Number(largestPalindromic)) { //Number() gives us the ineger value of our strings
//                     largestPalindromic = palinNum;
//                     product1 = i;
//                     product2 = ii;
//                 }
//             }
//         }
//     }
//     console.log('Largest palindromic number of three digits is: ' + largestPalindromic);
//     console.log('Made of the product of: ' + product1 + ' and ' + product2 + '.')
// }
// largestPalindromicNum();


//====================================
//            Challenge 3
//====================================
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// function smallestEvenDiv () {
//     let a = -1;
//     let number = 20;
//     while (a < 0) {
//         allDivisible = true;
//         for(let i = 1; i <= 20; i++) { //test that it can evenly divide numbers 1 thru 20
//             if (number % i != 0) {
//                 allDivisible = false;
//                 break;
//             }
//         }
//         if (allDivisible == true) {
//             console.log('The smallest number divisible by #1 thru 20 is: ' + number + '.')
//             break
//         }
//         number += 1;
//     }
// }
// smallestEvenDiv();



//===================================
//            Challenge 4
//===================================
// Design an OO parking lot. What classes and functions will it have. It should say, full, empty and also be able to find spot for Valet parking. The lot has 3 different types of parking: regular, handicapped and compact.
// Use Case:
// 1. Customer are given a ticket that they can use to redeem to get their vehicle back
// 2. Parking spots come in three sizes, small, med, large
// 3. Thee types of vehicles, small[Two Wheeler], med[Car], large[Bus]
// - a small vehicle can park in a small, medium, and large spot
// - a medium vehicle can park in a medium and large spot
// - a large vehicle can park in a large spot
// 4. There are multiple entry gates to park vehicles. So a Vehicle should assign the nearest posible parking spot.