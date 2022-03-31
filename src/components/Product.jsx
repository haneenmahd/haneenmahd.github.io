import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Products from '../store/Products.json'
import { useParams } from 'react-router-dom'
import WavedPreview from '../assets/img/waved_preview.png'
import fileDownload from 'js-file-download'
import theme from '../theme/theme'

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
    color: ${(props) =>
      props.theme === 'dark'
        ? theme.dark.secondaryColor
        : theme.light.secondaryColor};
  }

  img {
    margin-top: 20px;
    height: auto;
    max-width: 100%;
    border-radius: 20px;
  }

  button {
    padding: 10px 20px;
    margin-top: 10px;
    background: linear-gradient(180deg, #166edc 0%, #030013 220%);
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: #fafafa;
    transition: all 0.3s;

    :hover {
      filter: opacity(0.9);
    }

    :active {
      transform: translateY(5px);
    }
  }
`

/**
 *
 * @param {{
 *   theme: "dark" | "light";
 * }} props
 * @returns
 */
export default function Product(props) {
  const { productName } = useParams()
  const [productResult, setProductResult] = useState({
    productName: '',
    productDescription: '',
    previewImageSource: '',
    price: '',
  })

  const findProduct = (name) => {
    Products.map((product) => {
      if (product.productName === name) {
        setProductResult(product)
      }
    })
  }

  useEffect(() => {
    findProduct(productName)
  }, [])

  return (
    <ProductCard theme={props.theme}>
      <h1>{productResult.productName}</h1>
      <h4>{productResult.productDescription}</h4>

      <img src={productResult.productName === 'waved' ? WavedPreview : ''} />

      <button
        onClick={() =>
          fileDownload(String(WavedPreview), productResult.productName + '.png')
        }
      >
        Get for {productResult.price}
      </button>
    </ProductCard>
  )
}
