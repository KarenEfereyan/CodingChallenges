## Series of Coding Challenges via [Coderbyte](https://coderbyte.com/)
<details>
<summary>
  <b>Reverse a String</b> 
</summary>
<br>
Difficulty Level : Easy<br>
Question : Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.<br>
Use the Parameter Testing feature in the box below to test your code with different arguments.<br>
  
1. <b>Using Javascript Built-in functions</b>  
```js
function FirstReverse(str) { 
                            
    /** Steps
    1. Break string into array of individual chars using split('') function
    2. Use reverse() method to transpose order
    3. Turn the reversed characters into string using join('') function
    **/
  
    // code goes here
    const chars = str.split('')  
    return chars.reverse().join(''); 
  
  }
  console.log(FirstReverse('Coderbyte is really awesome!'));

```

2. <b>Using loops</b>
   
 ```js
  function FirstReverse(str){
      /** Steps
      1. Create new empty string to hold reversed input string
      2. Loop through the array from the last string character to the first and for each char, add it to the reversed string
      3. Return reversed string 
     **/  
    
   let reversed = "";
      for(i=str.length-1; i>0; i--){
       reversed +=str[i];
  }
      return reversed;
}
      
  console.log("Loop reversal", FirstReverse('Coderbyte is really awesome!'))
  ```
3. <b>Using Recursion</b>
```js
 function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
 console.log("Recursion reversal", reverseString('Coderbyte is really awesome!'));
 ```

</details>

<details>
<summary>
<b>Factorial of a number</b>
</summary>
<br>
Difficulty Level : Easy


<b>1. While Loop</b>

```js
function Factorial(num){
  let result = num;
  if(num <= 1){
    return 1
  }
  while(num > 1){
    num --;
    result *= num;
  }
  return result;
}
console.log("While Factorial", Factorial(5))
```

<b>2. With Recursion</b>
```js
function Factorial(num){
  return num <= 1 ? 1 : num * Factorial(num - 1)
}
console.log("Factorial", Factorial(2));
``` 

<b>3. For Loop </b>
```js
function Factorial(num){
  if(num <= 1) return 1;
  
  for(let i = num-1; i>=1; i--){
    num*=i;
  }
  return num;
}
console.log(Factorial(5));
```
</details>