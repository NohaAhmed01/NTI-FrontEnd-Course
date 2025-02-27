////////////////// 1 //////////////////
// var x = prompt("enter a number");
// if(x<10){
//     console.log("00"+ x);
// }else if(x>10 && x<100){
//     console.log("0"+x);
// }else{
//     console.log(x);
// }


///////////////// 2 ///////////////////
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && num3 !== num2){
//     console.log(num3 + " is larger than "+num1+" and type "+typeof(num3)+ " not the same type as "+typeof(num2));
// }if(num3>num1 && num3 == num2 && num3 !== num2){
//     console.log(num3+" is larger than "+num1+" and value is the same as "+num2+" and type "+typeof(num3)+" not the same type as "+typeof(num2));
// }if(num3!=num1 && num3!==num1 && num3!==num2){
//     console.log("{num3} value and type is not the same as {num1} and type is not the same as {num2}");
// }


////////////////// 3 ///////////////////
// var days = prompt("enter the day");
//     var day = days.trim();
//     day = days.at(0).toUpperCase()+ days.slice(1);

// switch (day) {
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//         console.log("no available appointments on "+day);
//         break;
//     case "Monday":
//     case "Thursday":
//         console.log("available from 10am till 5pm")
//         break;
//     case "Tuesday":
//         console.log("available from 10am till 6pm");
//         break;
//     case "Wednesday":
//         console.log("available from 10am till 7pm");
//         break;
//     default:
//         console.log("invalid day")
//         break;
// }


////////////////// 4 /////////////////////
// function sayHello(theName, theGender) {
//     if(theGender == "f"){
//         console.log("Hello Miss "+theName);
//     }else  if(theGender == "m"){
//         console.log("Hello Mr "+theName);
//     }else{
//         console.log("Hello "+theName);
//     }
// }
// sayHello("Noha","f");
// sayHello("Aziz","m");
// sayHello("lamia");


////////////////////// 5 //////////////////////
function calc(num1,num2,operation) {
    if(num2 == null){
        console.log("second number not found");
    }else{
       if(operation == "+" || operation == null){
           console.log(+num1 + +num2);
       }else if(operation == "-"){
           console.log(+num1 - +num2);
       }else  if(operation == "*"){
           console.log(+num1 * +num2);
       }
    }
       
}
calc(20);
calc(20, 30);
calc(20, 30,"+");
calc(20, 30,"-");
calc(20, 30,"*");
