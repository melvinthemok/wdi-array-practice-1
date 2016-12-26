// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function dash (num) {
  var numString = ''
  var numArr = num.toString().split('')
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) {
      numString += numArr[i] + '-'
    } else {
      numString += numArr[i]
    }
  }
  return numString
}

// helper.test(dash('025486'), '0-254-8-6') // check that your function works as expected
// helper.test(dash('1357913579'), '1357913579')
// helper.test(dash('024681357902468'), '0-2-4-6-8135790-2-4-6-8')

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (arr) {
  arr.sort()
  var max = 1
  var freq = 1
  var result
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      freq++
    } else {
      freq = 1
    }
    if (freq > max) {
      result = arr[i]
      max = freq
    }
  }
  return result + ' (' + max + ' times)'
}

// helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]), 'b (5 times)')
// helper.test(mostFrequentItem(['a', 5, 'b', 2, 'c', 7, 'd', 3, 'e', 2, 'f', 'f', 1, 'f']), 'f (3 times)')
// helper.test(mostFrequentItem([2, 'a', 1, 'b', 1, 'c', 2, 'd', 2, 'e', 1, 2]), '2 (4 times)')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (arr) {
  var low = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr[i] = arr[i].toLowerCase()
    }
    low.push(arr[i])
  }
  return low.filter(function (item, index, array) {
    return array.indexOf(item) === index
    // alternatively, sort the array and then
    // return item !== array[index - 1]
  })
}

// helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2])
// helper.test(removeDuplicateItems(['a', 1, 'A', 1, 'a', 2, 'B', 'C', 'c', 'C', 3, 3]), ['a', 1, 2, 'b', 'c', 3])
// helper.test(removeDuplicateItems([1, 1, 'a', 'A', 1, 'a', 'B', 'C', 'c', 2, 3]), [1, 'a', 'b', 'c', 2, 3])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (arr1, arr2) {
  var arr = arr1.concat(arr2)
  function compare (a, b) {
    return a - b
  }
  arr.sort(compare)
  return arr.filter(function (item, index, array) {
    return arr.indexOf(item) === index
  })
}

// helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])
// helper.test(union([3, 2, 2], [1000, 1, 1]), [1, 2, 3, 1000])
// helper.test(union([1, 1, 1], [100, 1, 1, 1000]), [1, 100, 1000])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (arr1, arr2) {
  var arr = []
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      arr.push(arr1[i])
    }
  }
  arr = arr.concat(arr2)
  return arr
}

helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [3, 2, 30, 1])
helper.test(mergeArray([1, 30, 96], [17, 24, 30, 2, 96]), [1, 17, 24, 30, 2, 96])
helper.test(mergeArray([24, 56, 76, 3], [1, 17, 56, 3]), [24, 76, 1, 17, 56, 3])
