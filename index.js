function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    // Iterate through the array with the second number in the pair
    for (let j = i + 1; j < array.length; j++) {
      // Check if the pair of numbers adds up to the target
      if (array[i] + array[j] === target) {
        return true; // Found a pair with the target sum
      }
    }
  }
  // If no such pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The space complexity is O(1) 
  The time complexity is O(n^2),nested loops result in quadratic time complexity. 
*/

/* 
  Add your pseudocode here
    For each number in the array:
        For each subsequent number in the array:
            If the current number and the subsequent number add up to the target:
                Return True
    Return False
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
