// Write an O(n) algorithm to sort an array of integers,
//  where you know in advance what the lowest and highest values are.

//  1 min to 10 max  
//Loop over the array and make currentNode - minValue = newPosition , example node 1 - 1 =0 , 3 -1 = 2 position
var  original = [ 3, 4, 8, 7, 2, 1, 5, 10 , 9, 6 ] ;
// [  ,  , 3 ,4  ,  ,  ,  ,  ,  , 10 ] 

//swtich nodes in the same array
var i=2;
var j=3;
var temp=original[i];
original[i]=original[j];
original[j]=temp;

// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

var swap = function(array, i, j) {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

var bubbleSort = function(array) {
    var swaps = 0;
    for (var i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

// Imagine that I gave you twenty books to sort in alphabetical order. 
// How would you go about it? Can you express this as an algorithm?

using bubble search