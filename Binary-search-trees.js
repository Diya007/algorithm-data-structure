
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree
var root={value: 8, left: {}, right: {}}; root.left={value: 5, left: {}, right: {}}; root.right={value: 10, left: {}, right: {}}
root.left.left = {value:1}; root.left.right={value:6}; root.right.right={value:14}; root.right.right.right={value: 15};

var binarySearch = function(root) {
  if(!root ) {
    return true;
  }
  if(root.left && root.left.value > root.value) {
      return false
  }
  
  if(root.right && root.right.value < root.value) {
    return false
  }
  
  return binarySearch(root.left) && binarySearch(root.right)
}

binarySearch(root)


// Write an algorithm to find the height of a binary search tree

var findHeight = function(root, height) {
  if(!root) {
    return height
  }
  var left = findHeight(root.left, height+1);
  var right = findHeight(root.right, height+1);
  
  if(right > left) {
    return right;
  }
  else {
    return left;
  }
  
}
findHeight(root,0);

// Write an algorithm to find the third largest value in a binary search tree;

var root={value: 8}; root.left={value: 5}; root.right={value: 10}
root.left.left = {value:1}; root.left.right={value:6}; root.right.right={value:14}; root.right.right.right={value: 15}

var arr = [];

var findThirdLargest = function(root) {

  if (root.left) {
      findThirdLargest(root.left)
  }
  
  arr.push(root.value)
 
  if (root.right) {
      findThirdLargest(root.right)
  }
  
  
}

findThirdLargest(root);

console.log(arr)