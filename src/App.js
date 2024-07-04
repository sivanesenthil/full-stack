import React, { useState } from 'react';

const Products = [
  {
    "productname": "Laptop1",
    "price": 32336,
    "rating": 4.7,
    'discount': 63,
    "availability": "yes"
  }, {
    "productname": "Laptop2",
    "price": 42336,
    "rating": 3,
    'discount': 50,
    "availability": "yes"
  }, {
    "productname": "Laptop3",
    "price": 42436,
    "rating": 9,
    'discount': 60,
    "availability": "out-of stock"
  }, {
    "productname": "Laptop4",
    "price": 45236,
    "rating": 4,
    'discount': 20,
    "availability": "yes"
  }
];

const TopProducts = ({ topN }) => {
  const [topProducts, setTopProducts] = useState(Products.slice(0, topN));

  return (
    <div>
      <h1>Top {topN} Products</h1>
      <ul>
        {topProducts.map((product, index) => (
          <li key={index}>
            <div>Product Name: {product.productname}</div>
            <div>Price: ${product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}%</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
