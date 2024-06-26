import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import { useRef, useState } from 'react';

function ProductCard({ product, increaseQuantity, decreaseQuantity }) {
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');

  function printTitle() {
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  function displayOutput(e) {
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}>{product.title}</p>
      <p ref={pRef}>{product.price}</p>
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <ReduxAddToCart product={product} />
    </div>
  );
}

export default ProductCard;
