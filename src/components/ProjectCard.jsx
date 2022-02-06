import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0;
    margin: 20px;
    overflow: hidden;
    transition: all .3s ;
    cursor: pointer;

    img {
        height: 200px;
        width: 100%;
    }

    &:hover {
        box-shadow: 0 30px 60px 0 #6d6d6d1f;
    }
`;

/**
 * 
 * @param {{
 *   imgSource: string;
 * }} props 
 * @returns 
 */
export default function ProjectCard(props) {
  return (
      <Card>
          <img src={props.imgSource} alt="Preview Image" />
      </Card>
  );
}
