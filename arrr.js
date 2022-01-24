// Write an arrow function that expects an array of integers, and returns the sum of the elements of the array.Use the built -in method reduce on the array argument

const array1 = [1, 2, 3, 4];
const reducer = (previous, current) => 
{
  return   previous + current;
}
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));