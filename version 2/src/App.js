import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

/*FOR RENDERING APP CLASS */
const renderApp = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

/*THE MAIN PAGE AND CART PAGES  */
const pages = {
  PRODUCT_LIST: "PRODUCT_LIST",
  CART_LIST: "CART_LIST"
};

let currentPage = pages.PRODUCT_LIST;
var totalCount=0, totalCost=0;

/*ARRAY TO STORE PRODUCTS */
const items = [
  {id:1, name:"SONY 4K", rate:1200, qty:0, url:"http://www.rjmretailers.com/wp-content/uploads/2017/11/Sony-BRAVIA-KD65XE8596.jpg"},
  {id:2, name:"SAMSUNG 4K", rate:1300, qty:0, url:"https://s7d2.scene7.com/is/image/SamsungUS/QN65Q8C_004_Detail1_Silver_12617?$product-details-jpg$"},
  {id:3, name:"LG 4K", rate:1550, qty:0, url:"https://www.lg.com/in/images/tvs/md05814889/gallery/UJ63_A_65_60_55_49_Desktop_01.jpg"},
  {id:4, name:"VU 4K", rate:800, qty:0, url:"https://static.digit.in/product/a8134a501cb6644d850ad51bd505fd4dd6c1fd8c.jpeg"}, 
];

/*FUNCTION TO MAP PRODUCTS ARRAY TO ITEM CLASS */
const ProductList = () => (
  <React.Fragment>
    <ul>
      {items.map(p => <Item key={p.id} {...p} />)}
    </ul>
  </React.Fragment>
);

/*TO DISPLAY ITEMS IN HOME(PRODUCT) PAGE */
const Item = ({url,id,name,rate}) =>(
  <div className="displayItems">
    <img src={url} className="itemImages"></img><br/>
    {name}<br/>
    ${rate}<br/>
    <Button msg="+" onClick={handleClick.bind(null,id)}/> {/*ADD TO CART BUTTON CALLING FUNCTION TO HANDLE IT*/}
  </div>
);

/*UNDERSTAND THE CART BUTTON */
const Button =  ({msg,onClick}) => (
  <button className="addToCart" onClick={onClick}>
  {msg}
  </button>
);

/*FUNCTION TO HANDLE THE CLICK ON THE BUTTON ADD TO CART */
const handleClick = pid => {

  const [item] = items.filter(({ id }) => pid === id);

  //ADD ITEMS TO CART ONLY IF IT IS NOT ALREADY ADDED
  if(items[pid-1].qty==0){
  cart.push(item);
  }

  totalCount++;
  items[pid-1].qty++;
  totalCost = totalCost+items[pid-1].rate;
  console.log(pid); 
  renderApp();
}

const cart = [];//ARRAY TO STORE ITEMS THAT ARE ADDED TO CART

/*FUNCTION TO SELECT THE CART PAGE WHEN THE CART BUTTON  */
const goToCart = () => {
  if(totalCount!=0){
    currentPage = pages.CART_LIST;
  }
  else{
    alert("NO ITEMS IN CART");
  }
  renderApp();

};

/*FUNCTION TO MAP CART WITH THE CARTVIEW CLASS */
const CartList = () => (
  <React.Fragment>
    <h2 className="cartHead">YOUR CART</h2>
      <ul class="cartDataHead">
        <li><b>PRODUCT</b></li>
        <li><b>PRICE</b> </li>
        <li><b>QTY</b></li>
      </ul>
      <ul className="cartDatas">
      {cart.map(p => <CartView {...p}/>)}
      </ul>
      <p className="totalCost">TOTALCOST : {totalCost}</p>
  </React.Fragment>
  );

/*FUNCTION TO DISPLAY ITEMS IN CART */
const CartView = ({id,name,rate}) =>(
  <div>
    <br/>
    <li>
      {name}
    </li>
    <li>
      {rate}
    </li>
    <li>
      {items[id - 1].qty} 
    </li>
  </div>
);

/*The FUNCTION THAT CHECKS THE PAGES AND LOAD */
const App = () => (
  <div className="App">
    <div className="header">
      <h1>
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/General_Electric_logo.svg.png?auto=format&q=60&fit=max&w=930" width="80px" height="80px" className="logo"></img> 
       <label className="siteName">QKART</label>
       </h1>
    </div>
    
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6ehVJuQJ-U-S8zwtq4QyVWlAJV01EjcDAvzBdCNy4TULkfAzQQ " width="80px" height="80px" className="goto-cart-btn" onClick={goToCart}>
    </img>
    <p class="printCount">{totalCount}</p>
    {currentPage === pages.PRODUCT_LIST ? <ProductList /> : <CartList />}
  
  </div>
);

renderApp();

export default App;
