//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

(function() {
    'use strict';
  
  
  // 1. --------------------------------------------
  
  // This is a named function, convert it
  // to a variable containing an anonymous
  // function
  
  function doSomethingCool() {
    console.log("Something Cool!");
  }
  
  // Put your answer below -------------------------

  // 1. Input: N/A
  // 2. Output: console log
  // 3. Purpose: To console log "Something Cool!"
  // 4. Contract:
  //// Function name: anonymous, but variable name is doSomethingCoolAnonymously
  //// Parameters and types: none (undefined)
  //// Return values and types: does not return anything
  
  let doSomethingCoolAnonymously = () => {
    console.log("Something Cool!");
  };
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 2. --------------------------------------------
  
  // Here we are using setTimeout to call a function
  // after 2 seconds. Refactor to use an anonymous
  // function
  
  function sayHi() {
    alert("Hello, World!");
  }
  
  setTimeout(sayHi, 2000);
  
  // Put your answer below -------------------------

  // 1. Input: N/A
  // 2. Output: alert
  // 3. Purpose: To alert "Hello, World!" (within setTimeout which will make that happen in 2 seconds [2000])
  // 4. Contract:
  //// Function name: none
  //// Parameters and types: none
  //// Return values and types: no return

  setTimeout(function () {
    alert("Hello, World!");
  }, 2000);
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 3. --------------------------------------------
  
  // The code below will log the letter twice. What
  // is the order that will be logged?
  
  // [a]: x then y then z
  // [b]: y then z
  // [c]: z then y
  // [d]: x then z
  
  // Please explain your answer.

  var letter = "x";
  
  setTimeout(function(){
    letter = "y";
    console.log("The letter is", letter);
  }, 1);
  
  letter = "z";
  console.log("The letter is", letter);
  
  // Put your answer below -------------------------
  
  // 1. Input: none
  // 2. Output: console log with string and variable of string passed in
  // 3. Purpose: To use console log to test variable scope
  // 4. Contract:
  //// Function name: none
  //// Parameters and types: none
  //// Return values and types: none

  // The answer is [c]: z then y. The reason that z comes first is that variables have a prioritized scope over functions proper, which is what setTimeout is. Note that when I tested by changing it to an anonymous function only, without setTimeout being applied, it prioritized y over z.
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 4. --------------------------------------------
  
  // The function below reverses a string. The body
  // of the function is 5 lines of code. Refactor
  // this function to do the same thing with 1 line
  
  var reverseStr = function(str) {
    var arr;
    arr = str.split("");
    arr = arr.reverse();
    str = arr.join("");
    return str;
  };
  
  // Put your answer below -------------------------
  
  // 1. Input: string
  // 2. Output: string
  // 3. Purpose: To reverse a string with a one-line function
  // 4. Contract:
  //// Function name: reverseStr is the variable, but function is anonymous
  //// Parameters and types: str (string)
  //// Return values and types: str.[...].join("") (string)

  var reverseStr = (str) => (((str.split("")).reverse()).join(""));

  console.log(reverseStr("How can I help you, King Dedede?"));

  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 5. --------------------------------------------
  
  // The function below takes the spanish word for
  // the colors red, white, blue, green, and black
  // and returns the hex code for that color.
  // Refactor this function to use an object
  // instead of an if/else statement.

  var spanishColor = function(colorName) {
    if (colorName.toLowerCase() === "rojo") {
      return "#ff0000";
    }
    else if (colorName.toLowerCase() === "blanco") {
      return "#ffffff";
    }
    else if (colorName.toLowerCase() === "azul") {
      return "#0000ff";
    }
    else if (colorName.toLowerCase() === "verde") {
      return "#00ff00";
    }
    else if (colorName.toLowerCase() === "negro") {
      return "#000000";
    }
  };
  
  // Put your answer below -------------------------
  
  // 1. Input: undefined
  // 2. Output: none
  // 3. Purpose: To sort colors in Spanish as an object instead of in if statements
  // 4. Contract:
  //// Function name: none (spanishColor as variable)
  //// Parameters and types: colorName (undefined to start, object within function)
  //// Return values and types: none

  var spanishColor = function(colorName) {
    colorName = { // colorName originates as undefined, so var is not needed here
      "rojo": "#ff0000",
      "blanco": "#ffffff",
      "azul": "#0000ff",
      "verde": "#00ff00",
      "negro": "#000000"
    };
    console.log(colorName["verde"]); //for example
  }();
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 6. --------------------------------------------
  
  // Below is a variable *declaration* and an
  // *assignment* in a single line of code.
  // Break it up so that the declaration and
  // assignment are happening on 2 seperate lines.
  
  var foo = "bar";
  
  // Put your answer below -------------------------
  
  // Not a function

  var foo;
  foo = "bar";
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 7. --------------------------------------------
  
  // The function `callTenTimes` takes an argument
  // that is another function and will call that
  // function 10 times. Refactor this into another
  // function called `callNtimes` that allows you
  // to specify a number of times to call the given
  // function.
  
  var callTenTimes = function(callback) {
    var range = Array.from(Array(10).keys());
    range.forEach(callback);
  };
  
  // callTenTime(functionName);
  
  // Put your answer below -------------------------
  
  // 1. Input: function, number
  // 2. Output: functions being called
  // 3. Purpose: calls a function a certain number of specified times
  // 4. Contract:
  //// Function name: callNTimes is the variable
  //// Parameters and types: callback (function), numberOfTimes (number)
  //// Return values and types: none

  var callNTimes = function(callback, numberOfTimes) {
    var range = Array.from(Array(numberOfTimes).keys());
    range.forEach(callback);
  };
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 8. --------------------------------------------
  
  // Below is the beginning code for an awesome game
  // but already suffers a vulnerability that allows
  // the savvy user to open the console and adjust
  // the score to whatever they want. Refactor the
  // code to protect from this.

  // HINT: "global scope"
  
  var score = 0;
  
  var increaseScore = function() {
    score++;
  };
  
  var decreaseScore = function() {
    score--;
  };
  
  // Put your answer below -------------------------
  
  // 1. Input: none
  // 2. Output: none
  // 3. Purpose: To increment the score variable without being able to be touched in the console
  // 4. Contract:
  //// Function name: game()
  //// Parameters and types: none
  //// Return values and types: none

  function game() {
    var score = 0;
    var increaseScore = function() {
      score++;
    };
    var decreaseScore = function() {
      score--;
    };
  };

  game();
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 9. --------------------------------------------
  
  // The below function does not work. The variable
  // twoPlusTwo gets set to `undefined`. Refactor
  // the function to make it work.
  
  var addNumbers = function(numberA, numberB) {
    console.log(numberA + numberB);
  };
  
  var twoPlusTwo = addNumbers(2,2);
  
  // Put your answer below -------------------------
  
  // 1. Input: two numbers
  // 2. Output: sum of the two numbers
  // 3. Purpose: To add two numbers together (purpose of assignment is to make it return something instead of console log it)
  // 4. Contract:
  //// Function name: addNumbers is the variable
  //// Parameters and types: numberA (number), numberB (number)
  //// Return values and types: summation (number)

  var addNumbers = function(numberA, numberB) {
    const summation = numberA + numberB;
    return summation;
  };
  
  var twoPlusTwo = `Two plus two equals ${addNumbers(2,2)}`;
  
  console.log(twoPlusTwo);
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // 10. -------------------------------------------
  
  // Below is a snippet of code taken from a racing
  // game (not really!) It allows you to accelerate
  // the speed by a given amount. The problem is if
  // you call the function without specifying an
  // amount, it inadvertently sets the speed to NaN
  // First write a comment that explains why it was
  // setting speed to NaN when no parameter is given
  // Then refactor the function to have a default
  // amount of 1 if no param is given.

  var speed = 0;
  
  var accelerate = function(amount) {
    speed += amount;
  };
  
  // Put your answer below -------------------------
  
  // amount is being declared undefined (not NaN in my console) in this scenario because it is not defined within the function before usage. An easy fix is to set the amount value to 1 upon defining the function itself, on the first function line.

  // 1. Input: number
  // 2. Output: console logged number
  // 3. Purpose: to accelerate the vehicle in the racing game (not really!)
  // 4. Contract:
  //// Function name: accelerate is the variable name
  //// Parameters and types: amount (number) = 1
  //// Return values and types: changed speed variable (number)

  var speed = 0;

  var accelerate = function(amount=1) {
    speed += amount;
  };
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //            ___  ____  _  ____  ______        //
  //           / _ )/ __ \/ |/ / / / / __/        //
  //          / _  / /_/ /    / /_/ /\ \          //
  //         /____/\____/_/|_/\____/___/          //
  //                                              //
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  
  // The function below allows you to call another
  // function at a later time. It takes 2 params, an
  // amount of miliseconds and a function. It will
  // call the function that many miliseconds later.
  // Refactor it so that is has a default timeout.
  
  // This is more advanced than the default param on
  // the accelerate function. This is because there
  // is another parameter to consider.
  
  // When setting the timeout, the function needs to
  // work like this:
  
  //     callLater(1000, function(){
  //       ...
  //     });
  
  // When using the default timeout, the function
  // needs to work like this:
  
  //     callLater(function(){
  //       ...
  //     });
  
  var callLater = function(timeout, callback) {
    setTimeout(callback, timeout);
  };
  
  // Put your answer below -------------------------
  
  
  // -----------------------------------------------
  
  //////////////////////////////////////////////////
  })();