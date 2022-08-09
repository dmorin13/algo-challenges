/*Given an interger array nums of length n where all the integers of nums are in the range [1, n]
and each integer appears once or twice return an array of all the integers that appears twice 
wirte an algo that runs in o (n) ( linear)  time and uses only constant O (1) extra space 

//floyd's cycle detection algortihm
*/



var findDuplicates =function(nums) {
  //create out result and let it equal an empty aray 
 
  const result =[]

  for(let i=0; i< nums.length; i++) {
  
  //we want the absolute value bc we are using the 'adddreses' between 0 and the range of the array, if we encounter a negative # 
  // it means we have already 'visited' this #, meaning it is a duplicate, since we are using the length of the array, instead of the index #, it will not be 0 indexed so we subtract 1 
  
  let index =Math.abs(nums[i]) -1
  //example n=8 so index would be 8-1 =7 since an array's index is 0 based 
  
  //create a variable for the value which is what is currently in at nums index at any given time in the loop 
  
  
  //use the previous index value to generate the vlaue of the 'value' var 
 
  let value = nums[index]
  
  //check if that value is less than 0, if it is a negative value, we've marked as previously 
  //visited, so we want to push it into the result array we created at the beginning to return it's values 
  
  if(value< 0) {
    result.push(Math.abs(nums[i]))
    }else{
    //otherwise make it negative for the next pass of the loop 
    nums[index]=-nums[index]
      }
    }
    return result
    }
    
    var findDuplicates =function(nums){
    let result =[]
    for(let i=0; i < nums.length; i++){
    let index =Math.abs(nums[i]) -1
    let value =nums[index]
    
    if(value <0){
    result.push(Math.abs(nums[i])) 
    }else{
    nums[index]=-nums[index]
      }
    }
      return result
    }
    
  

