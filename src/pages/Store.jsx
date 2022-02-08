import React from 'react';
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StoreStyle = styled.div`
    min-height: 100vw;
    max-width: 100vw;
    padding: 40px;
    color: #fafafa;
`;

const Intro = styled.div`
  text-align: left;

  * {
    margin: 6px 0;
  }

  h2 {
    font-size: 300%;
    font-weight: 800;
  }

  h4 {
    font-size: 120%;
    color: #c1c1c1;
    font-weight: 600;
  }
`;

const Products = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin: 40px 0;
`;

export default function Store() {
  return (
    <StoreStyle>
      <Intro>
        <h2>Store</h2>
        <h4>Find my products and merch here!</h4>
      </Intro>
      <Products>
        <Outlet />
      </Products>
    </StoreStyle>
  );
}
