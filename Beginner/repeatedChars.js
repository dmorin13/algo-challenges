function stringHasNoRepeatedCharacters(str){
  const characters =Array.from(str.toLowerCase())
  for(let c of characters){
    //detects that the key does not exist in the Map object,using a ! operator to check for the implicit falsy value & initialize the key value
    if(!charMap[c]){
      //start each character counter at 0
      charMap[c]=0
    }
    //count the character
    charMap[c]++
    //if short circuit 
    if(charMap[c]>1){
      return false
    }
  }
  //if we've made it this far, ther must be NO repeated characters so we 
  return true
}

stringHasNoRepeatedCharacters("hello")
//returns false 


// for(j =0; j< n-1; j++){
//   int iMin =j 
//   for(i=j +1; i< n; i++){
//     if(a[i]< a[iMin])
//     iMin=i
//     if(iMin !=j)
//     swap(a[j],a[iMin])
//   }
// }

//binary searc is a O(log n) 
// divide and conquer recursive or iterative  algo 
// array must be sorted to use this 
//n/2---> n/4.....

public class Solution{
  public static boolean binarySearchRecursive(int[] array, int x, int left, int right){
    //out of ascending order
    if(left >right ){
      return false
    }
    //divide array in half, by mid point 
    //prevent "overflow" by subtracitng right from left
    int mid =left+((right-left)/2)  
    //if element matches, it is found
    if(array[mid]==x){
       return true
    }else if (x < array[mid]){
      //search the left side ( less than) of the mid point 
      return binarySearchRecursive(array, x, left, mid -1)
     }else{
       //otherwise search the right side, is greater than 
      return this.binarySearchRecursive(array, x, mid +1, right)
    }
  }
}


//itertive method 

// public class Solution{
//   public static boolean binarySearchIterative(int[],array, int x){
//     int left =0
//     int right =array.length-1
//     while (left < = right){
//       int mid =left +((right- left)/2)
//       if(array[mid]==x){
//         return true
//       }else if( x < array[mid]){
//         right =mid -1
//       }else{
//         left =mid+1
//       }
//     }
//     return false 
//   }
// }