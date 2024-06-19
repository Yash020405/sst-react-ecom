import { useRef, useState} from "react";
import AddToCart from "./components/AddToCart/AddToCart";
import Effect from "./components/Effect/Effect";

// function useWindowSize(){
//     let [size , setSize] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });
//     function updateSize(){
//         setSize({
//             width: window.innerWidth,
//             height: window.innerHeight
//         })
//     }
//     return size;
// }

function ProductCard({title,price}) {
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    let [inputV ,setInputV] = useState('Class');
    function printTitle(){
        console.log(title);
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }else{
            pRef.current.style.display = "none";
        }
    }
    function displayOutput(e){
        // console.log(iRef.current.value);
        // oRef.current.innerText = `Output here is : ${iRef.current.value}`;
        setInputV(e.target.value);
    }
    return (
        <div>
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price}</p>
            <input type = "text" ref={iRef} onChange={displayOutput} value={inputV}/>
            <p ref={oRef}>Over here the input will be printed - {inputV}</p>
            <AddToCart inputV={inputV}/>
            <Effect/>
        </div>
    )
}

export default ProductCard;


    // oldDom = [
    //     <ProductCard key={i1} title="Title 1" />,
    //     <ProductCard key={i2} title="Title 2" />,
    //     <ProductCard key={i3} title="Title 3" />
    // ] 
    // newDom = [
    //     <ProductCard key={i1} title="Title 1" />,
    //     <ProductCard key={i4} title="Title 4" />,
    //     <ProductCard key={i2} title="Title 2" />,
    //     <ProductCard key={i3} title="Title 3" />
    // ]
//If the index is inserted as key if it is deleted then the index of the elements after it will change
//also it will be similar to the previous approach without key.


//create a custom hook which at any given instance gives the width and height of the screen
//useWindowSize() ----> returning window.innerHeight and window.innerWidth