/*
**********
1. Two Sum
**********
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

function towSum(nums, target){
    let solution
    for (i in nums){
        for (j in nums){
           if (nums[i] + nums[j] == target) {
               solution = [+i, +j] 
               break
            }
        }
        if (solution) break
    }

    console.log(solution) 
}

towSum([6,2,3,4,8,9,6], 8)