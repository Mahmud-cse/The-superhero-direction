import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    // Data load form json file
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    // data calculate and set to setCat
    const addToCart=(product)=>{
        const newCart=[...cart];
        const existing=cart.find(data=>data.id===product.id);
        if(existing){
            product.quantity+=1;
        }else{
            product.quantity=1;
            newCart.push(product);
        }
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            {/* product component */}
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            {/* cart component */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;