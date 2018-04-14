/* @author Louis Sullivan
*  @Date 3/28/2018
*  Calculator class impliments a basic add, subtract,
*  multiply, and divide methods using a functional
*  programming model
*
*  open calculator by copying file path of ~/index.html 
*  into browser
*/

var a,b, result = 0;

/** 
 ** User has selected initional value
 ** pass values from text box into variables
**/
function setValues(){
	a = Number(document.getElementById("a").value);
	b = Number(document.getElementById("b").value);
}

/** 
 ** User has selected the addition method
 ** pass the result then call print 
**/
function sum(){
	setValues();
	result = a+b;
	print();

}
/** 
 ** User has selected the subtraction method
 ** pass the result then call print 
**/
function sub(){
	setValues();
	result = a-b;
	print();
}
/**
 ** User has selected the multiply method
 ** pass result then call print
 **/
function mult(){
	setValues();
	result = a*b;
	print();
}
/** 
 ** User has selected the divide method
 ** Check to see if input is valid
 ** pass result then call print method
 **/
function div(){
	setValues();
	if(b != 0){
		result = a/b;
		print();
	}
	//Check if user has given an invalid input
	else{
		alert("No dividing by zero");
	}
}
/** 
 ** User has selected a mathmatical expression
 ** pass the result into the first text box
**/
function print(){
	document.getElementById("a").value = result;
	document.getElementById("a").setAttribute('readonly', 'readonly');
}
/** 
 ** User has selected the CE method
 ** reset all text boxes and variables
**/
function CE(){
	document.getElementById("a").value = 0;
	document.getElementById("b").value = 0;
	document.getElementById("a").removeAttribute('readonly');
}
/**
 ** Added close function
 ** need to add self attribute to tab because js did not open tab
**/ 
function exit(){
	open(location, '_self').close(); 
}
