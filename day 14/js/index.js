var pName = document.getElementById('exampleInputName');
var pPrice = document.getElementById('exampleInputPrice');
var pDesc = document.getElementById('exampleInputDesc');
var invalidNameAlert = document.getElementById("invalidNameAlert");
var deleteBTN = document.getElementById("deleteBTN");
var productArr;

//localStorage.getItem(key) -> takes string and returns string so we must convert to JSON to store in array using(JSON.parse())

if(localStorage.getItem('product Details') == null){
    productArr = [];
}else{
    productArr = JSON.parse(localStorage.getItem('product Details'))
    display()
}
function addProduct(){
    var product = {
        myName : pName.value,
        myPrice : pPrice.value,
        myDesc : pDesc.value
    }
      
    if( document.getElementById("addBtn").innerHTML=="update item"){
        console.log(itemToUpdate);
        productArr[itemToUpdate].myName=pName.value;
        productArr[itemToUpdate].myPrice=pPrice.value;
        productArr[itemToUpdate].myDesc=pDesc.value;
    }else{
        productArr.push(product);
    }
 //localStorage.setItem(key,value) -> takes string and returns string so we must convert array object to JSON using(JSON.stringify())
    localStorage.setItem('product Details',JSON.stringify(productArr) )
    display();
    clearForm();
    document.getElementById("addBtn").innerHTML="add item";
    pName.classList.remove("is-valid");
    pName.classList.remove("is-invalid");
    invalidNameAlert.classList.replace("d-block","d-none");


}
function deleteProduct(index){
    productArr.splice(index,1);
    localStorage.setItem('product Details',JSON.stringify(productArr) );
    display();
}
function display(){
    var cart ='';
    for(var i = 0;i<productArr.length;i++){
        cart += `<tr>
            <td>${i}</td>
            <td>${productArr[i].myName}</td>
            <td>${productArr[i].myPrice}</td>
            <td>${productArr[i].myDesc}</td>
            <td><button onclick= "update(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button id="deleteBTN" onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tr>`
    }
    document.getElementById('tableBody').innerHTML=cart;
}
function clearForm(){
    pName.value="";
    pPrice.value="";
    pDesc.value="";
}
function searchUp(searchTerm){
    var cartona ='';
    for(var i =0;i<productArr.length;i++){
       if(productArr[i].myName.includes(searchTerm)){
        cartona += `<tr>
            <td>${i}</td>
            <td>${productArr[i].myName}</td>
            <td>${productArr[i].myPrice}</td>
            <td>${productArr[i].myDesc}</td>
            <td><button onclick= "update(${i})" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tr>`
       }       
    }
    document.getElementById('tableBody').innerHTML=cartona;
}
var itemToUpdate = null;
function update(updateIndex){
    itemToUpdate = updateIndex;
    pName.value = productArr[updateIndex].myName;
    pPrice.value = productArr[updateIndex].myPrice;
    pDesc.value = productArr[updateIndex].myDesc;
    document.getElementById("addBtn").innerHTML="update item";
}
function validateProductName(){
    var regex = /^[A-Z][a-z]{5,8}$/
    if(regex.test(pName.value) == true){
        pName.classList.add("is-valid");
        pName.classList.remove("is-invalid");
        // invalidNameAlert.classList.add("d-none");
        // invalidNameAlert.classList.remove("d-block");
        invalidNameAlert.classList.replace("d-block","d-none");

    }else{
        pName.classList.add("is-invalid");
        pName.classList.remove("is-valid");
        // invalidNameAlert.classList.add("d-block");
        // invalidNameAlert.classList.remove("d-none");
        invalidNameAlert.classList.replace("d-none","d-block");

    }
}
pName.addEventListener("blur",validateProductName);