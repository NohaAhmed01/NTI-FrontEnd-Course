// var user ={
//     userName: 'ahmed',
//     userAge: 25,
//     isMarried: true,
//     wife: {wiName: 'aya', wiAge:22,wiGender: 'female'},
//     userGender: 'male'
// }
// console.log(user.wife.wiName)



// var users = [
//     {name: 'noha', age: 23, gender: 'female'},
//     {name: 'noor', age: 28, gender: 'female'},
//     {name: 'nada', age: 26, gender: 'female'},
//     {name: 'aziz', age: 22, gender: 'male'},

// ]
// //to print the whole array you have two ways
// //first way
// for(var i = 0; i<users.length;i++){
//     console.log(users[i].age);
// }
// //second way
// console.log(users)



// methods on the array
/*sort() -> sorts the array alphabetically from a to z
reverse() -> reverses the order of the array
push('--') -> adds the element inside the brackets to the end of the array
unshift('--') -> adds the element inside the brackets to the start of the array
pop() ->removes the last element of the array
shift() -> removes the first element of the array
join('--') -> joins all the elements of the array into one whole string, each element separated by the symbol inside the brackets
concat('--') | concat(arr) -> concats two arrays togeter
//if no end index is mentioned, it assumes it is the length of the array
splice(start index ,end index ) ->returns the elments of array starting from start index to element at end index included
slice( , )-> returns the elments of array starting from start index to element at end index excluded
includes('--')-> search for the element inside the brackets and return true or false
*/



/*         CRUD        */
var nname = document.getElementById("exampleInputName");
var price = document.getElementById("exampleInputPrice");

var prodArr = []

function addProduct() {
    var product = {
        Pname: nname.value,
        Pprice: price.value
    };
    prodArr.push(product);
    console.log(prodArr);
    emptyForm();
}
function emptyForm() {
    nname.value = '';
    price.value = '';
}