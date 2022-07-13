// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



var intersection = function(nums1, nums2) {
  let map = new Set()
  let result = new Set()
  
  for (let num of nums1) {
      map.add(num)
  }
  

  for (let num of nums2) {
      if (map.has(num)) {
          result.add(num)
      }
  }
  
  return Array.from(result)
};

//////////////////

// var intersection = function(nums1, nums2){
//   let map =new Set()

//   let result =new Set()

//   for (let num of nums1){
//     map.add(num)
//   }
  
//   for (let num of nums2){
//     if (map.has(num)){
//       result.add(num)
//     }
//   }
  
//   return Array.from(result)
// }

// var intersection =function(nums1, nums2){
//   let map =new Set()
//   let result =new Set()

//   for(let num of nums1){
//     map.add(num)
//   }
//   for(let num of nums2){
//     if(map.has(num)){
//       result.add(num)
//     }
//     return Array.from(result)
//   }
// }