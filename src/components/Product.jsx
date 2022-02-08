import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Products from '../store/Products.json';
import { useParams } from 'react-router-dom';
import WavedPreview from '../assets/img/waved_preview.png';

const TextAnimation = keyframes`
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 0.2;
    }
`;

const ImageShadowAnimation = keyframes`
    0% {
        box-shadow: 0 20px 20px 20px #2400FF34, 0 20px 20px 0 #76197E34;
    }

    20% {
        box-shadow: 0 50px 20px 20px #2400FF34, 0 20px 20px 0 #76197E34;
    }
    
    50% {
        box-shadow: 0 80px 40px 20px #2400FF46, 0 20px 20px 0 #76197E46
    }

    60% {
        box-shadow: 0 50px 35px 20px #22c9cc46, 0 20px 20px 0 #76197E34
    }

    85% {
        box-shadow: 0 50px 25px 20px #2400FF34, 0 20px 20px 0 #76197E34
    }

    100% {
        box-shadow: 0 20px 20px 20px #2400FF34, 0 20px 20px 0 #2222cc34
    }
`;

const ProductCard = styled.div`
  min-height: 100px;
  width: 400px;
  background-color: #222;
  border-radius: 10px;
  padding: 40px 30px;
  text-align: left;
  overflow: hidden;
  transition: all 0.3s;

  * {
    margin: 4px 0;
    padding: 0;
  }

  h4 {
    color: #bdbdbd;
  }

  img {
    margin-top: 20px;
    height: auto;
    max-width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 20px 0 #2400FF76, 0 20px 20px 0 #2222cc76;
    animation: ${ImageShadowAnimation} 5s linear infinite;
  }

  &:hover {
    box-shadow: 0 30px 60px 0 #6d6d6d1f;
  }
`;

export default function Product() {
  const { productName } = useParams();
  const [productResult, setProductResult] = useState({ productName: "", productDescription: "", previewImageSource: "" });

  const findProduct = (name) => {
    Products.map((product) => {
        if (product.productName === name) {
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

      <img src={productResult.productName === "waved" ? WavedPreview : ""} />
    </ProductCard>
  );
}
