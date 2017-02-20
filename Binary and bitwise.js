// twos complement 
// Implement a function that takes in an integer and prints out its two's complement value by 
// following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator.
//  For example ~25 will invert the bits of the integer 25.

function twosComplement (int) {
	if (int >= 0) {
		return (~int+1 >>> 0).toString(2)
	}
	else {
		return(int >>> 0).toString(2)
	}
}


//Logical operator

//Write a function which sets the third bit of a number.
function setThirdBit(num) {
	return (num | 4).toString(2)
};

//Write a function which toggles the third bit of a number.
function toggleThirdBit(num) {
	// 100
	// 100
	// 1
	return (num ^ 4).toString(2)
};

//Write a function which clears (sets to zero) the third bit of a number.
function clearThridBit(num) {
	return (num & (~4)).toString(2)
}

//Write a function which tells you whether the third bit of a number is set.
function ThirdIsSet(num) {
	var int = (int & 4 ).toString(2)
    if(int === "100") {
    	return ('is set to 1')
    }
    else{
   		return('is set to 0')
    }
}


//shift operators interveiw Questions
// Write a function which doubles an integer.
function doubleInt (integer) {
 
    return (integer << 1)
}

doubleInt(-10)

//Write a function which quadruples an integer.

function quadInt(int) {
  return int << 2
}
quadInt(-12)

//Write a function which divides an integer by two, rounding down.
//if you right shift to divide by two, you always round down, negative numbers round up
function divideByTwo(int) {
  return int >> 1
}

//Write a function which calculates 2^n.
// remember left shift operator x*2^y
function power(n) { 
  return 1 <<n  
}
power(3)

function power(n) {
	return Math.pow(2,n)
}

//Math.pow(x,y) => x^y