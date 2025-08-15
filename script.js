/*
Problem 1
7 kyu - Find the divisors!
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's 
divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer)
is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"
*/
console.log("Problem 1: Find the divisors!");

function divisors(integer) {
    const answer = [];
  
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            answer.push(i);
        }
    }
    
    if (answer.length === 0) {
        return `${integer} is prime`
    }
    return answer;
}

// I found the algorithm and code pretty straightforward

console.log(divisors(7));
console.log(divisors(25));
console.log(divisors(44));

/*
Problem 2
6 kyu - Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
console.log("Problem 2: Convert string to camel case");

function toCamelCase(str){
    if (!str || str == '') {
        return '';
    }

    const words = str.split(/[-_]/);

    const camelCaseWords = words.map((word, index) => {
        if ((index === 0) && !(/[A-Z]/.test(word[index][0]))) {
            return word.toLowerCase();
        } 
        else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    return camelCaseWords.join('');
}
// This problem gave me more trouble. Biggest part was figuring out how to take out the - and _

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));

/*
Problem 3
6 kyu - Bit Counting
Write a function that takes an integer as input, and returns the number of bits that are equal to 
one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
console.log("Problem 3: Bit Counting");

function countBits(n) {
    const binaryString = n.toString(2);
    const ones = [...binaryString].filter(char => char === '1') //spread operator
    return ones.length;
}

// I initially tried to use parseInt but after console logging I found out was wrong and went to google tto findd the .toString method
// Also knew I could use the spread operator but had to look up how to use it correctly

console.log(countBits(200));
console.log(countBits(1234));
console.log(countBits(5678));

/*
Problem 4
6 kyu - Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to contain
only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
console.log("Problem 4: Counting Duplicates");

function duplicateCount(text){
    if (text === "") {
        return 0;
    }
  
    // Going to use objects for key (letter) : value (number) pairs
    const charObject = {};
    const duplicates = {};
    let lowerText = text.toLowerCase();
  
    // Populate charObject with key value pairs from lowerText
    for (let i = 0; i < lowerText.length; i++) {
        const char = lowerText[i];
        if (charObject[char]) {
            charObject[char]++;
        }
        else {
            charObject[char] = 1;
        }
    }
  
    // Create a new object from charObject that contains ONLY duplicates
    for (const char in charObject) {
        if (charObject[char] > 1) {
            duplicates[char] = charObject[char];
        }
    }
  
    return Object.keys(duplicates).length;
}

// I found this problem troublesome. Would've been more helpful if I pseudocoded to make an algorithm to follow
// Needed to use comments to organize my thinking - problem was more complex

console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("aA11"))

/*
Problem 5
6 kyu - Take a picture!
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"] 
// Should return ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

["2016.img1"]
// Should return ["2016.img1","2016.img2"]
*/
console.log("Problem 5: Take a picture!");

function sortPhotos(pics) {
    pics.sort((a, b) => {
        const [yearA, numA] = a.split('.img').map(Number);
        const [yearB, numB] = b.split('.img').map(Number);
        
        if (yearA !== yearB) {
          return yearA - yearB;
        }
        return numA - numB;
    });

    const recentFive = pics.slice(-5);
    const last = recentFive[recentFive.length - 1];
    const [yearStr, numStr] = last.split('.img');
    const nextNumber = parseInt(numStr) + 1;
    const nextPhoto = `${yearStr}.img${nextNumber}`;

    return [...recentFive, nextPhoto];
}

// I found this problem the hardest of all. Spent 30+ minutes
// I knew I could sort and knew I could use .split() but wanted to try a different approach
// Ended up going back to .split(). After the if statement, the problem was straightforward

console.log(sortPhotos(["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]));
console.log(sortPhotos(["2016.img1"]));

/*
Problem 6
7 kyu - Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
console.log("Problem 6: Vowel Count");

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Problem was pretty straightforward. 

console.log(getCount("My name is Khang Vu"));
console.log(getCount("hotdog"));

/*
Problem 7
6 kyu - Split Strings
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
console.log("Problem 7: Split Strings");

function solution(str){
   if (!str || str == '') {
        return [];
    }

    if (str.length % 2 === 1) {
        str += '_';
    }
  
    const result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str[i] + str[i + 1]);
    }

    return result;
}

// Made an algorithm which made this much easier

console.log(solution('abc'));
console.log(solution('abcde'));


/*
Problem 8
5 kyu - Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  const zeros = arr.filter(item => item === 0)
//   return arr.filter(item => item !== 0) + zeros;
  return arr.filter(item => item !== 0).concat(zeros);
}

// I found this problem to be very simple and straightforward. Very surprised it is a 5 kyu.
// Realizing I am more comfortable working with arrays than strings

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
