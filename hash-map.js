// Write an algorithm to check whether any permutation of a string is a palindrome 
// (a string which reads the same forwards and backwards). 
// For example, "madam", "amadm" and "cllci" should all return true, 
//whereas "caabl" and "aaxxis" should return false.

function Palindrome(string) {
	return string == string.split('').reverse().join('')
}

//revers() is an array method;

// Write an algorithm to group a list of words into anagrams. 
//For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
//the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
 
inputs = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

function anagrams (arr) {
	var sortedArr = arr.map(function(value) {
		return value.split('').sort().join('');
	})

	var reducedObj = sortedArr.reduce(function(obj, word, i) {
		if (!obj[word]) {
    obj[word] = [inputs[i]]
    }
    else if (obj[word]) {
      obj[word].push(inputs[i])
    }
    return obj
	}, {})
	
	var finalArr = Object.keys(reducedObj).map(function(key) {
	  return reducedObj[key]
	})
	
	return finalArr
}

anagrams(inputs)

// two string, if they are angarams;
function anagrams(string1, string2) {
	return string1.split('').sort().join('') == string2.split('').sort.join('')
}

//方法2
inputs = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

east = {
  e: 1,
  a: 1,
  s: 1,
  t: 1
}

cars = {
  e: 1,
  a: 1,
  s: 1,
  t: 1
}
var checkKeys = function(obj1, obj2) {
 for ( key in obj1 ) {
    if(obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

function changeStrToObj (str) {
  var keys = str.split('');
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
     var key = keys[i];
     if(obj[key]) {
      obj[key] ++
     }
     else {
       obj[key] = 1
     }
  }
  return obj;
}

function arrayToSingleStr (arr) {
  var result = []
  var checkWords = {};
  
  for (var i = 0; i<arr.length; i++) {
    
    if(checkWords[arr[i]]) continue;
    
    var wordObj1 = changeStrToObj(arr[i])
    // put arr[i] into new array => arr1
    var arr1=[arr[i]];
    // set arr[i] to flag true and put it in checkWords obj; 
    checkWords[arr[i]] = true
    result.push(arr1);
    
    for (var j = 0; j < arr.length; j++) {
      
      // if(checkWords[arr[j]]) continue;
      
      var wordObj2 = changeStrToObj(arr[j])
      
       if(checkKeys(wordObj1, wordObj2)) {
         
         checkWords[arr[j]] = true
         arr1.push(arr[j])
       }
    }
  }
  return result
}

arrayToSingleStr(inputs)


// Write a hash map implementation which uses separate chaining.
