/*There is an array of n integers called num The array can be reduced by 1 element by performing a move. Each move consists of the following 3 steps: 
ick two different elements num[i] and num[j]
i != j

1 pick two different elements num[i] and num[j]
2 remove the two selected elements from the array 
3. add the sum of the two selected elements to the end of the array 

Each move has a cost associated with it: the sum of the two elements removed from the array during the move. 
Calculate the minimum cost or reducing the array to one element 
example:
num= [4,6,8]

remove 4 and 6 in teh first move at a cost of 4 +6 = 10 and the resultant array is num = [8,10]
remove 8 and 10 in the second move at a cost of  8 +10 =18
 and the resultant array is num =[18]
 
 the total cost of reducing the array to one elements suing this sequence of moves is 10 +18 =28 this is just one set of possible moves
 for instance one could have started with 4 and 8 then 4=8 =12  num =[6,12]
 6+12 = 18 
 num =[18]
 cost =12 =18 =30 ( more expensive option)*/

arr = [4, 6, 8];

function reductionCost(num) {
  let minCost = 0;

  //iterate through the array, while the length of the array is greater than 1
  while (num.length > 1) {
    //sort array elements in ascending numerical order, to always remove the lowest  #'s first and return the LEAST sum value
    num.sort((a, b) => a - b);
    //sum up the first 2 array elements
    minCost += num[0] + num[1];
    //assign the value of the sum of the fist 2 el to the END of the array, ( could also use the .push() method ),
    num[num.length] = num[0] + num[1];
    //splice method, would eliminate these el in place (non destructive method ) and return the array without those elements
    //splice(start, deleteCount) first param  is index at which to start deleting el's, second arg is how many el's to delete, counting the el @ the starting index
    num.splice(0, 2);
  }
  //return the least 'expensive' moves, the least sum value
  // ex. integer ex. 10 +18= 28 < 30
  //12 +18 =30 ( if we had started by eliminating 4, 8 first) but since we sorted it we don't have to worry about it
  //returns sum of 28 from reducing arr elements to one value only num =[18]
  return minCost;
}

console.log(reductionCost(arr));
