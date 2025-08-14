/*
7 kyu - Find the divisors!
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

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

console.log(divisors(7));
console.log(divisors(25));
console.log(divisors(44));

/*
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

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));

/*
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

console.log(countBits(200));
console.log(countBits(1234));
console.log(countBits(5678));

/*
6 kyu - Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

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

console.log(duplicateCount("abcde"))
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("aA11"))

/*
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

function sortPhotos(pics){
    console.log(`ORIGINAL: ${pics}`)
    const recentFive = pics.sort().slice(-5);

//   const next = recentFive[recentFive.length - 1];
//   const popped = next.slice(-1)
//   const newNum = parseInt(popped) + 1;
//   recentFive.push(next.slice(0, -1) + newNum)
  
  console.log(`recentFive: ${recentFive}`)
  console.log(`next: ${next}`)
  console.log(`popped: ${popped} and type: ${typeof(popped)}`)
  console.log(`newNum: ${newNum}`)

  return recentFive
};

console.log(sortPhotos(["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]));
// console.log(sortPhotos(["2016.img1"]));