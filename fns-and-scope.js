//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
  if (name === "Tyler"){
    return true;
  }
  return false;
}
  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(){
  return prompt();
}

  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
function welcome(){
  alert('Welcome, ' + getName());
}
  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
// PARAMETERS are placeholders for future ARGUMENTS that you will input into a function
// ARGUMENTS are values/variables that you will pass into a function

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
// falsy values are: null, undefined, false, '', 0, and NaN
// to check if something is falsy you would use a comparison statement like this: ('Am I falsy' == false)


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  var name = 'Ashlyn';
  return name;
}
  //Code Here



//Now save the function definition of myName into a new variable called newMyName
// function newMyName(){
//   var newMyName = myName();
// }
var newMyName = myName;
  //Code Here

//Now alert the result of invoking newMyName
alert(myName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn (){
  return function (){
    return 'Ashlyn';
  }
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();