## Series of Coding Challenges via [Coderbyte](https://coderbyte.com/)
<details>
<summary>
  <b>Reverse a String</b> 
</summary>
<br>
Difficulty Level : Easy<br>
Question : Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.<br>
Use the Parameter Testing feature in the box below to test your code with different arguments.<br>
  
  
```js
function FirstReverse(str) { 
                            
  /** Steps
  1. Break string into array of individual chars
  2. Use reverse() method to transpose order
  3. Join the individual characters using join() and turn to string with .toString()
  **/

  // code goes here
  const chars = str.split('')  
  return chars.reverse().join().toString(); 

}
console.log(FirstReverse('Coderbyte is really awesome!'));

```
<br>

Note : Loops and recursion can also be used here


</details>
