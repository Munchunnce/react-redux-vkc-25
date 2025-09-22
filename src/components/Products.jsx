import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }

        fetchProducts();
    }, []);

    // add to cart
    const handleAdd = (product) => {
        dispatch(add(product));
    }
  return (
    <div className='productsWrapper'>
        {
            products.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products
