import './App.css';
import { a , b} from './products'
import Products from './products';
import { useState } from 'react';
function App() {
  //state variable

  //inc
  //dec 

  let [cart , setCart] = useState({});
  function increaseQuantity(productId){
    setCart(currCart => {
      const newCart = currCart;
      if (newCart[productId]) {
        newCart[productId]++;
      } else {
        newCart[productId] = 1;
      }
      return newCart;
    });
  }

  function decreaseQuantity(productId){
    setCart(currCart => {
      const newCart = currCart;
      if (newCart[productId]) {
        if (newCart[productId] > 1){
          newCart[productId] --;
        }else{
          delete newCart[productId];
        }
      }
      return newCart;
    });

  }
  console.log(a,b);
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
