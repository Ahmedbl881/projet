let carts = document.querySelectorAll('.add-cart');
let products = [
{
name:'chaussure-p-classic-blanc-noir',
tag:'1',
price:300,
inCart:0
},
{
    name:'chaussure-streetball-master-iii-noir',
    tag:'2',
    price:350,
    inCart:0
    },
    {
        name:'polo',
        tag:'3',
        price:25,
        inCart:0
        },
        {
            name:'pull-a-col-rond-noir',
            tag:'4',
            price:70,
            inCart:0
            },
            {
                name:'round-neck-t-shirt-blanc',
                tag:'5',
                price:99,
                inCart:0
                },
                {
                    name:'chaussure-football-tech-bleu-vert',
                    tag:'6',
                    price:199,
                    inCart:0
                    },
                    {
                        name:'chaussure-football-tech-noir-rouge',
                        tag:'7',
                        price:299,
                        inCart:0
                        },
                        {
                            name:'chaussure-football-tech-orange',
                            tag:'8',
                            price:90,
                            inCart:0
                            },
                            {
                                name:'pantalon-tony-parker-noir',
                                tag:'9',
                                price:145,
                                inCart:0
                                },
];
for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function OnLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.carte span').textContent= productNumbers ;

    }
}
function cartNumbers(products){
console.log("The product clicked is",products)
let productNumbers = localStorage.getItem('cartNumbers');

productNumbers= parseInt(productNumbers);
if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1); 
    document.querySelector('.carte span').textContent= productNumbers + 1;
}else{
    localStorage.setItem('cartNumbers',1); 
    document.querySelector('.carte span').textContent= 1;
}
setItem(products)
  }
function setItem(products){
let CartItems=localStorage.getItem('productsInCart');
CartItems=JSON.parse(CartItems);
if(CartItems != null)
{
if(CartItems[products.tag] == undefined ){
CartItems={
... CartItems,
[products.tag]:products
}
}
   CartItems[products.tag].inCart+=1;
}else{
    products.inCart =1;
 CartItems={
    [products.tag]: products
}
}
localStorage.setItem("productsInCart",JSON.stringify(CartItems));
}
function totalCost(products){
   // console.log("the products price is",products.price)
let  cartCost = localStorage.getItem('totalCost');
console.log("My cartCost is",cartCost);
console.log(typeof cartCost);
if(cartCost != null){
cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost +products.price);}
else{
    localStorage.setItem("totalCost",products.price);
}}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    let  cartCost = localStorage.getItem('totalCost');
    cartItems=JSON.parse(cartItems);
    let productsContainer = document.querySelector(".products-container");
    console.log(cartItems);
    if(cartItems && productsContainer){
        products.innerHTML = '';
        Object.values(cartItems).map(item=>{
            productsContainer.innerHTML += `
           
            <div class="products">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./res/${item.tag}.png">
            <span>${item.name}</span>
            </div>
            <div class="price">${item.price} DT</div>
            <div class="quantity">
            <ion-icon name="arrow-back-circle"></ion-icon>
           <span>${item.inCart}</span>
           <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart * item.price} DT</div>
            `;
        });
productsContainer.innerHTML += `
<div class="basketTotalcontainer">
<h4 class="basketTotalTitle">

</h4>
<h4 class="basketTotal">
${cartCost}DT
</h4>

`;

    }
}
function show_confirmation()
{
var r=confirm("your order is confirmed");
if (r==true)
{
    alert("THANK YOUUUUU !!!");
}


}
OnLoadCartNumbers();
displayCart();