function Factorial(num){
  return num <= 1 ? num : num * Factorial(num - 1)
}
console.log("Factorial", Factorial(5));