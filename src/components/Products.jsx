import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }

        fetchProducts();
    }, []);
  return (
    <div className='productsWrapper'>
        {
            products.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn'>add</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products
