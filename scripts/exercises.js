(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------
  
    // 1. Input:
    // 2. Output:
    // 3. Purpose:
    // 4. Contract:
    //// Function name:
    //// Parameters and types:
    //// Return values and types: 

    // 1. Input: two numbers as arguments.
    // 2. Output: the maximum of the two numbers is returned
    /// 3. Purpose: Finds the maximum of two numbers that are passed in
    // 4. Contract:
    //// Function name: max()
    //// Parameters and types: num1 (number), num2 (number)
    //// Return values and types: num1 (number) or num2 (number)

    function max(num1, num2) {
      if (num1 > num2) {
        return num1;
      } else {
        return num2;
      };
    };
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------
  
    // 1. Input: three numbers as arguments
    // 2. Output: the maximum of the three numbers
    // 3. Purpose: to find the maximum of 3 passed-in numbers
    // 4. Contract:
    //// Function name: maxOfThree()
    //// Parameters and types: num1 (number), num2 (number), num3 (number)
    //// Return values and types: max_of_last_two (number)

    function maxOfThree(num1, num2, num3) {
      const max_of_first_two = num1 > num2 ? num1 : num2;
      const max_of_last_two = max_of_first_two > num3 ? max_of_first_two : num3;
      return max_of_last_two;
    };
  
    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    
    // ---------------------
  
    // 1. Input: a one-letter string
    // 2. Output: Boolean
    // 3. Purpose: To check if a given letter is a vowel or not
    // 4. Contract:
    //// Function name: isVowel()
    //// Parameters and types: str (string)
    //// Return values and types: vowels.includes(str) (Boolean) [for required portion of assignment]

    function isVowel(str) {
      if (str.length === 1) {
        const vowels = "aeiouAEIOU";
        return vowels.includes(str);
      } else { 
        return "Please submit a single letter.";
      };
    };
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------
    
    // 1. Input: string
    // 2. Output: string with 2x consonants with o in between (Rövarspråket, Swedish for "thieves' cant")
    // 3. Purpose: convert each string into one with 2x consonants with o in between (Rövarspråket, Swedish for "thieves' cant")
    // 4. Contract:
    //// Function name: rovarspraket()
    //// Parameters and types: str (string)
    //// Return values and types: translated_string (str)

    function rovarspraket(str) {
      const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
      let translated_string = "";
      for (let i = 0; i < str.length; i++) {
        translated_string += str[i];
        if (consonants.includes(str[i])) {
          translated_string += `o${str[i]}`;
        };
      };
      return translated_string;
    };

    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
  
    // 1. Input: array
    // 2. Output: number
    // 3. Purpose: Adds/multiplies number in an array
    // 4. Contract:
    //// Function name: sum(), multiply()
    //// Parameters and types: arr (array), arr (array)
    //// Return values and types: total (number)

    function sum(arr) {
      let total = 0;
      for (let i of arr) {
        total += i;
      };
      return total;
    };

    function multiply(arr) {
      let total = 1;
      for (let i of arr) {
        total *= i;
      };
      return total;
    };
  
    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------
  
    // 1. Input: string
    // 2. Output: reversed string
    // 3. Purpose: To reverse a string that is inputted
    // 4. Contract:
    //// Function name: reverse()
    //// Parameters and types: str (string)
    //// Return values and types: reversed_string (string)

    function reverse(str) {
      const parsing_arr = str.split("");
      const reversed_string_parse = [];
      for (let i of parsing_arr) {
        reversed_string_parse.unshift(i);
      };
      const reversed_string = reversed_string_parse.join("");
      return reversed_string;
    };
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
  
    // 1. Input: array
    // 2. Output: number
    // 3. Purpose: to take an array of words and return the length of the longest
    // 4. Contract:
    //// Function name: findLongestWord()
    //// Parameters and types: arr (array)
    //// Return values and types: longest_word_length (number)

    function findLongestWord(arr) {
      let longest_word_length = 0;
      for (let i of arr) {
        if (i.length > longest_word_length) {
          longest_word_length = i.length;
        };
      };
      return longest_word_length;
    };
  
    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------
  
    // 1. Input: arr (array), i (number)
    // 2. Output: longer_word_arr (array)
    // 3. Purpose: to take an array of words and return another array of the ones longer than a set integer
    // 4. Contract:
    //// Function name: filterLongWords()
    //// Parameters and types:
    //// Return values and types: longer_word_arr (array)

    function filterLongWords(arr, i) {
      let longer_word_arr = [];
      for (let x of arr) {
        if (x.length > i) {
          longer_word_arr.push(x);
        };
      };
      return longer_word_arr;
    };
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  
    // 1. Input: string
    // 2. Output: object
    // 3. Purpose: To take a string and return an object that lists each character and how frequently it appears
    // 4. Contract:
    //// Function name: charFreq()
    //// Parameters and types: str ()
    //// Return values and types: frequency_list (object)

    function charFreq(str) {
      const frequency_list = {};
      for (let x of str) {
        if (!(x in frequency_list)) { //starts by checking if item is already in the object; if not, it adds the letter and gives it a starting value of 1
          frequency_list[x] = 1;
        } else { //if already in the object, adds 1 to the value of the letter
          frequency_list[x] += 1;
        };
      };
      return frequency_list;
    };
    
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////
  
    console.assert(max(2, 4) === 4, 'function max error');
  
    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
    console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
    console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');
  
    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');
  
    console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
    console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();