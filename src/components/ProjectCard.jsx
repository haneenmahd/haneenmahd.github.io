import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    height: 300px;
    width: 300px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0 20px 20px 0 #3f3f3f1f;
    overflow: hidden;

    img {
        height: 200px;
        width: 100%;
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
