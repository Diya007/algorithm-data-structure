// The share price for a company over a week's trading is as follows: 
//[128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, 
//and sell the shares on one of the following days, 
//write an algorithm to work out what the maximum profit you could make would be.

arr = [128, 97, 121, 123, 98, 97, 105]
var root={value: 128};
root.left={value: 97};
root.left.right={value: 121};
root.left.right.left={value: 98};
root.left.right.right={value: 123};
root.left.right.left.left={value: 97};
root.left.right.left.right={value: 105};
/*
          128       
       97 
         121
       98   123
     97   105
123 - 97=26
105 - 98=7
123 - 121=2
*/

function getStockes(node){
    if(node.right) {
              maxValue= getStockes(node.right);
              return maxValue;
    }else if(node.left) {
              maxValue= getStockes(node.left);
              return maxValue;
    }
    else return node.value;
    return node.value-maxValue;
}

getStockes(root)

// ----------------correct method
function mostRight(node) {
  if(node.right) {
   return mostRight(node.right)
  }
  return node;
}

var max = 0, maxNode;

function getStockes(node){
    if(node.left) {
      getStockes(node.left);
    }
    
    var right = mostRight(node);
    var count = right.value - node.value;
    
    // console.log(count)
    if(count > max) {
      max = count;
      maxNode = node;
    }

    if(node.right) {
      getStockes(node.right);
    }
    return maxNode;
  
}

var result = getStockes(root)
console.log(result)

// Imagine you are looking for a book in a library with a Dewey Decimal index.
//  How would you go about it? Can you express this process as a searching algorithm?

//https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes

/**
Contents  [hide] 
1 Class 000 – Computer science, information & general works
2 Class 100 – Philosophy & psychology
3 Class 200 – Religion
4 Class 300 – Social sciences
5 Class 400 – Language
6 Class 500 – Science
7 Class 600 – Technology
8 Class 700 – Arts & recreation
9 Class 800 – Literature
10  Class 900 – History & geography
11  */

// 0000001 = 000.001 example with 3 digis after class
var librarybook = [ 000001, 1000001, 2000001, 3000001,3000002,3000003, 400001,500001,600001,700001,800001,900001,900002];

var books = [ {id: 000001, value: {name: "book 1"} } , {id: 100001, value: {name: "book 2"} } ];





