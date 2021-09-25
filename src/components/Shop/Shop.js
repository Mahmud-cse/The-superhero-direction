import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

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
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;