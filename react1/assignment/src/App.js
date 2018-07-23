import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const items = [
  {id:1, name:"SONY 4K", rate:1200},
  {id:2, name:"SAMSUNG 4K", rate:1300},
  {id:3, name:"LG 4K", rate:1550},
  {id:4, name:"VU 4K", rate:800}, 
];

const Item = ({id,name,rate}) =>(
  <li>
    PRODUCT:{name}<br/>
    PRICE: {rate}<br/>
    <Button msg="+" onClick={handleClick.bind(null,id)}/>
  </li>
);

const Button =  ({msg,onClick}) => (
  <button onClick={onClick}>
  {msg}
  </button>
);

const cart = [];
const Cart = ({id, name, rate}) => (
  <li>Hii
    PRODUCT:{name}<br/>
  </li>
);

const handleClick = pid => {
  // console.log("Button clicked!", id);
  const [item] = items.filter(({ id }) => pid === id);
  cart.push(item);
  console.log(item);
  
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="products">
          <ul>
            {items.map(item => <Item {...item}/>)}
          </ul>
          <ul>
            hii
            {cart.map(c => <Cart.id {...c}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
