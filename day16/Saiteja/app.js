console.log(`
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

2 <= nums.length <= 10^3
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
`);


function findIndices(arr, target) {

    for(let i = 0; i<arr.length; i++) {
        let difference = target - arr[i];
        
        if(arr.indexOf(difference)!== -1 && arr[i] !== difference ) {
            return [i, arr.indexOf(difference)];
        }
        
    }

    return -1;
}