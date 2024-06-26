import React, { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';

function App() {
    let [cart, setCart] = useState({});

    function increaseQuantity(product) {
        const newCart = { ...cart };
        if (!newCart[product.id]) {
            newCart[product.id] = {
                ...product,
                quantity: 0
            };
        }
        newCart[product.id].quantity += 1;
        setCart(newCart);
    }

    function decreaseQuantity(product) {
        const newCart = { ...cart };
        if (!newCart[product.id]) return;
        newCart[product.id].quantity -= 1;
        if (newCart[product.id].quantity <= 0) {
            delete newCart[product.id];
        }
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
            <div className="App">
                <Products />
                <Cart />
            </div>
        </CartContext.Provider>
    );
}

export default App;
