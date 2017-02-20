//Binary digits 
What is 2^5 in binary?

00100000

What is 2^5 - 1 in binary?

00100000 - 000000001 =
What is the general rule for binary numbers which are or the form 2^n or 2^n - 1?
2^n ==> n 0s after 1,  2^n - 1 ===>from bit 0 position to postion n-1, are all mark as 1





// Arrays interveiw questions;


var filterNum = function(arr) {
  var newArr =[];
  for(i = 0; i<arr.length; i++) {
    if(arr[i] >=5) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

filterNum([4,5,8,9,10])


var combinArr = function(arr1, arr2) {
  var index1 = 0;
  var index2 = 0;
  var newArr = []
  for( i = 0; i<arr1.length+arr2.length ; i++) {
    if(arr1.length == index1 || arr1[index1] > arr2[index2]) {
      newArr.push(arr2[index2])
      index2 ++
    }
    else {
      newArr.push(arr1[index1])
      index1 ++
    }
   
  }
   return newArr;
}

combinArr([1, 3, 6, 8, 11,21],  [2, 3, 5, 8, 9, 10,123,333,555])

var timesNums = function (arr) {
  var newArr=[];
  for (i = 0; i< arr.length ; i++) {
    var finalNum = 1;
    for(j = 0 ; j<arr.length ; j++) {
      if(i === j) {
        continue
      }
      finalNum = finalNum* arr[j]
    }
    newArr.push(finalNum);
  }
  return newArr;
}

timesNums([1, 3, 9, 4])

