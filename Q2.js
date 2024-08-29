
// To run this file
// type "node Q2.js" on terminal in current file directory 


// TASK 1 

const isPalindrome  = (word) => {
  let leftIndex = 0;
  let rightIndex = word.length -1;

  while (leftIndex < rightIndex) {
    if(word[leftIndex] !== word[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true 
}

console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE

