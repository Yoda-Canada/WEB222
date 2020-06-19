/*********************************************************************************
* WEB222 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other
source
* (including web sites) or distributed to other students.
* Name: _T.Zhao__ Student ID: ____ Date:Sep.21, 2019_
**********************************************************************************/

//Task 1: Student Info

var studentName="T.Zhao";
var numberOfCourses="WEB222NBB";
var program="CPA";
var part_timeJob=false;
console.log("My name is "+studentName+" and I'm in "+program+". I'm taking "+numberOfCourses+" course in this semester.");
if(part_timeJob=="true")
    part_timeJob="have";
else
    part_timeJob="don't have";

console.log("My name is "+studentName+" and I'm in "+program+". I'm taking "+numberOfCourses+" course in this semester and I "+part_timeJob+" a part-time job now."); 

//Task2: Birth and graduate year

var currentYear="2019";
var age="99";
var enterAge=prompt ("Plaese enter your age:", age);
console.log("You were born in the year of "+(currentYear-age)+".");
var studyYears="3";
var enterStudyYears=prompt("Enter the number of years you expect to study in the college:", studyYears);
console.log("You will graduate from Seneca college in the year of "+(Number(currentYear)+Number(studyYears))+".");

//Task3: Celsius and Fahrenheit temperatures

var CelsiusTemperatures=23;
console.log(CelsiusTemperatures+"°C is "+(CelsiusTemperatures*9/5+32)+"°F");
var FahrenheitTemperatures=60;
console.log(FahrenheitTemperatures+"°F is "+((FahrenheitTemperatures-32)*9/5)+"°C");

//Task4:Even and odd numbers 

for(var i=0; i<=10; i++){
    
    if(i%2==0)
        console.log(i+" is even\n");
    else
        console.log(i+" is odd\n");
    
}

//Task 5: Larger or largest number

function largerNum(a, b){
    
    if (a>b)
        return(a);
    else
        return(b);
    
}

console.log( "The larger number of 10 and 20 is "+largerNum(10,20)+".");
console.log( "The larger number of 9 and 6 is "+largerNum(9,6)+".");

//Task 6: Evaluator 
 
function evaluator(){
    var sum=0;
    for(var i=0; i<arguments.length; i++){
    		sum+=arguments[i];
    }
    
    if((sum/arguments.length)>=50)
	return true;
    else 
	return false;

}

console.log("Average grater than or equal to 50:"+evaluator(50,100,200,400));
console.log("Average grater than or equal to 50:"+evaluator(50,10,20,40,0,14,100));
console.log("Average grater than or equal to 50:"+evaluator(55,100,25,45,40,80,120,2));

//Task 7: Grader


var Grader=function(mark){

	if (mark<=100 && mark>=80)
		return 'A';
	else if(mark<80 && mark>=70)
		return 'B';
	else if(mark<70 && mark>=60)
		return 'C';
	else if (mark<60 && mark>=50)
		return 'D';
	else
		return 'F';

}

console.log("mark "+ 90 + ", grade is "+Grader(90));
console.log("mark "+ 59 + ", grade is "+Grader(59));
console.log("mark "+ 70 + ", grade is "+Grader(70));

method two:
var Grader=function(mark){
    var grade;
    if (mark<=100 && mark>=80)    grade='A'; 
     else if(mark<80 && mark>=70)    grade= 'B';  
     else if(mark<70 && mark>=60)    grade= 'C';  
     else if (mark<60 && mark>=50)    grade= 'D';  
     else    grade= 'F';
     
     console.log("mark "+ mark + ", grade is "+grade);
  }
  Grader(45);
  Grader(59);
  Grader(70);
  Grader(89);


//Task 8: ShowMultiples

function showMultiples(num, numMultiples){

	for (var i=1; i<=numMultiples; i++){
		console.log(num+"x"+i+"="+(num*i))
	}

}

showMultiples(5,4)
showMultiples(8,8)
showMultiples(10,12)

