// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// sliding window, 2 PointerEvent, fast slow technique

//s = array of strings
//k= # of distict characters 
//j pointer goes right when num of distinct chars <= K 
// update Max length of substring 
// i pointer goes right when num of distinct chars > K - " slideover" to explore other combination that are longer= more fruit to pick

var lengthOfLongestSubstringKDistinctChar = function(s, k){
  var n=s.length, i=0, j=0, res=0;
  var numOfChars=0
  //hash map to store key value pairs
  var counts ={}
  for( j < n ; j++){
    var c= s.charAt(j)
    if(!counts[c]){
      counts[c]=1
      numOfChars++
    }else{
      counts[c]++
    }
    while(numOfChars > k){
      var cI =s.charAt(i)
      //char at index i of array string 
      counts[cI]=s.charAt(i)
      counts[cI]--
      if(counts[cI]==0){
        numOfChars--
      }
      i++
    }
    //why are we using res inside res? 
    //referencing self in var declaration- recursive? 
    res =Math.max(res, j-i+1)
  }
  return res
}



//Java solution 
//sliding window
//fast / slow pointers 
//hash map
//overriding/ updating  max value

// class Solution{
//   public int totalFruit(int[] tree){
//     if(tree ==null|| tree.length ==0){
//       return 0
//     }
//     int max =1 
//     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>()
//     int i =0
//     int j= 0
//     while(j < tree.length){
//         if(map.size()<=2){
//           map.put(tree[j], j++)
//       }
//       if(map.size() > 2){
//         int min = tree.length -1
//         for(int value: map.values()){
//           min = Math.min(min, values)
//         }
//         i=min +1;
//         map.remove(tree[min])
//         }
//         max =Math.max(max, j-i)
//       }
//         return max 
//     }
// }


// Return the length of the longest contiguous subarray with no more than two distinct characters 

// const totalFruit= array => {
//   let map = new Map(), max = -1
//   //loop: starting index, continuing conditon, stopping index condition 
//   for(let start =0, end =0; end < array.length; end ++){
//     let currElement =array[end]
//     map.set(currElement, map.get(currElement)+1 ||1)
//     while(map.size >2){
//       let char=array[start]
//       let charCount =map.get(char)
//       if(charCount-1 ===0).map.delete(char)
//       else map.set(char, charCount-1)
//       start++
//     }
//     if(map.size >= 1)max=Math.maz(maz, end +1 -start)
//   }
//   return max
// }
// update count of fruit
// get leftmost fruit
// get count of leftmost fruit
// decrement count by 1
// if count becomes 0, remove fruit
// update max

var totalFruit= function (fruits){
  //total amount of baskets, avoid hard-coding so that algo can be extensizble 
  //ex. requirement can change and we are given N extra baskets 
  const k=2
  //nullish and empty edge cases 
  if(!fruits || !fruits.length) return 0 
  //if we have less fruits than basket, we just return all we have 
  if(fruits.length < k) return fruits.length 
  let total =0 
  let currentWindow =0
  let basket  =new Map()

  let left = 0
  let right=0 

  while(right < fruits.length){
    //add fruit to the basket
    basket.set{
      fruits[right], 
      basket.get(fruits[right] ? basket.get(fruits[right]) +1 : 1 )
    }
    //increase window size
    currentWindow++

    //if window size overflows K 
    //shrink window from the left side ( remove that min value )
    while(basket.size > k){
      let fruit = fruits[left]
      let reducedAmount= basket.get(fruit) -1
      //if we've reached - for that fruit, let's remove the fruit from the basket 
      if(reducedAmount == 0)basket.delete(fruit)
      else basket.set(fruit, reducedAmount)
      //shrink current window and move slow pointer
      currentWindow--
      left++
    }
    //update total and keep adding fruits
    total =Math.max(currentWindow, total)
    right ++
  }
  return total

}

var totalFruit =function(tree){
  const hashMap =new Map()
  let left =0, maxLen=0
  for(let right =0; right < tree.length; right++){
    const rightFruit =tree[right]
    hashMap.set(rightFruit, hashMap.get(rightFruit)+ 1|| 0)
     // Shrink the "sliding window", until we are left with 2 types of fruits in the basket
    while(hashMap.size > 2){
      const leftFruit=tree[left]
      if(hashMap.get(leftFruit)===0){
        hashMap.delete(leftFruit)
      } else{
            hashMap.set(leftFruit, hashMap.get(leftFruit) -1)
          }
          left++
        }
        maxLen=Math.max(maxLen, right -left +1)
      }
      return maxLen
    };
  // time: O(n)
// space: O(1) as there is a maximum of three types of fruits stored

// use sliding window technique.
// use map/object as basket. When we move forward, add the fruit to our basket
// if we encounter a 3rd type of fruit, we need reduce our basket
// When we have 3 types of fruits, but only allowed 2! Remove fruits[l] from basket & shift left pointer forward



 // if number of trees is less than 2, return number of trees. 
 // if you find a fruit that is in the fruit basket, increment the current length and compare to maxLength
// Found a new fruit.
// Slide backwards to figure out what is the lenght of the current sequenece.
// reached the start of the window.    


 // init varaibles; hash map to track fruit qty per type; current value of fruit in basket; max num of fruit at any one time; left pointer

  // loop through all values in fruits

   // while we have more than 2 fruits in the basket, need to discard fruits and slide window up
   
     // check if there is not more of a certain fruit, if so stop tracking in our basket(l)

      // slide left window up


       // check if the fruit is in the basket, if so add 1, if not set to 1


         // increment total value of fruit currently in basket

         // check if the basket has the max num of fruit based on window