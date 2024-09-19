let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let Ads = document.getElementById('Ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//calc tatal 
function getTotal(){
  if(price.value !=''){
    let result = (+price.value + +taxes.value + +Ads.value) - +discount.value;
    total.innerHTML = result;
    total.style.background = '#040';
  }else{
    total.innerHTML = '';
    total.style.background = '#a00d02';
  }

}

//create
let dataProduct;
if(localStorage.product != null){
dataProduct = JSON.parse(localStorage.product);
}else{
  dataProduct=[];
}
submit.onclick = function(){
  let newProduct ={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    Ads:Ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
  }
  dataProduct.push(newProduct);
  localStorage.setItem("product" , JSON.stringify(dataProduct));
  console.log(dataProduct);
  clearData();
  showData();
}

// clear inputs

function clearData(){
  title.value = '';
    price.value = '';
    taxes.value = '';
    Ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//read data

function showData(){
 let table ='';
 for(let i=0; i < dataProduct.length;i++){
  table += `
    <tr>
              <td>${i}</td>
              <td>${dataProduct[i].title}</td>
              <td>${dataProduct[i].price}</td>
              <td>${dataProduct[i].taxes}</td>
              <td>${dataProduct[i].Ads}</td>
              <td>${dataProduct[i].discount}</td>
              <td>${dataProduct[i].total}</td>
              <td>${dataProduct[i].category}</td>
              <td><button id="update">Update</button></td>
              <td><button onclick = "deleteProduct(${i})" id="delete">Delete</button></td>
            </tr>
  `
  
 }
 document.getElementById('tbody').innerHTML= table;
}

showData();

//delete product one item
function deleteProduct(i){
dataProduct.splice(i,1);
localStorage.product = JSON.stringify(dataProduct);
showData();
}
function deleteProducts(){

}