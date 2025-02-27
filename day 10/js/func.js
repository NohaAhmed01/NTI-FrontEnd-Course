//this is a void function as it has no return type
function calcProduct(price, tax, profit, ads){
    var res1 = price + profit + tax + ads;
    var res2 = res1/3 ;
    window.alert(res2);
}
var price = Number(prompt("enter price"));
var tax = Number(prompt("enter tax"));
var profit = Number(prompt("enter profit"));
var ads = Number(prompt("enter ads"));
calcProduct(price,tax,profit,ads);
