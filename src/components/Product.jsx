import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Products from '../store/Products.json';
import { useParams } from 'react-router-dom';

const ProductCard = styled.div`
  height: 400px;
  width: 400px;
  background-color: #222;
  border-radius: 10px;
  padding: 40px 30px;
  text-align: left;
  transition: all 0.3s;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 4px 0;
    padding: 0;
  }

  h4 {
    color: #bdbdbd;
  }

  &:hover {
    box-shadow: 0 30px 60px 0 #6d6d6d1f;
  }
`;

export default function Product() {
  const { productName } = useParams();
  const [productResult, setProductResult] = useState({ productName: "", productDescription: "" });

  const findProduct = (name) => {
    Products.map((product, index) => {
        if (product.productName === productName) {
            setProductResult(product);
        }
    });
  }

  useEffect(() => {
    findProduct("waved");
  }, []);

  return (
    <ProductCard>
      <h1>{productResult.productName}</h1>
      <h4>{productResult.productDescription}</h4>
    </ProductCard>
  );
}
