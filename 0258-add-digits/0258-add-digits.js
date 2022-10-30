/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    /*
      U: num -> digits -> sum of digits -> num, repeat until digits.length < 2
      M: while loop, condition is digits.length > 1
      P
        loop on the condition that digits.length > 1
          convert num to an array of digits
            // scratch pad
            38 / 1 = 38
            38 / 10 = 3
            38 / 100 = 0
          sum the digits
          the sum becomes the new num
        return num
      I
      R
      E
    */
  while (length(num) > 1) {
    const arr = numToArr(num);
    let sum = arr.reduce((acc, curr) => acc + curr);
    num = sum;
  }
  
  return num;

};

function numToArr(number) {    

  let power = 0;
  let digit = 8923798237974982734;
  const arr = [];



  while (digit > 0) {
    digit = Math.floor(number / (10 ** power));

    power++;
  }

  let length =  (power - 1);

  // ------ code above was to find length, code below is to populate results array
  
  /*
    38
    length = 2
    / 10 ** (length - 1) to get first digit, etc.
    38 / (10 ** ( 2 - 1)) = 3.8
    Math.floor(3.8) = 3
    push 3 to arr
    num -= 3 * 10 ** (length -1)
    8
    
    
    / 10 ** (length - 1) to get first digit, etc.
    8 / (10 ** ( 1 - 1)) = 8
    Math.floor(8) = 8
    push 8 to arr
    
    counter should reach some point and we're done
  */
  while (number > 0) {
    let digitInQuestion = Math.floor(number / 10 ** (length - 1))
    arr.push(digitInQuestion)
    number -= digitInQuestion * (10 ** (length - 1));
    length--;
  }
  return (arr);
  
  // corner case: trailing 0

}

function length(number) {    

  let power = 0;
  let digit = 8923798237974982734;
  const arr = [];



  while (digit > 0) {
    digit = Math.floor(number / (10 ** power));

    power++;
  }

  return (power - 1);


}