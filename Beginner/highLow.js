// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest an
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers){
  numbers = numbers.split(" ")
  return Math.max(...numbers) + " " + Math.min(...numbers)
}