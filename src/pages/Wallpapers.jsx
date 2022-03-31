import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Description from '../components/Description'
import MozurImage from '../assets/mozur/ep1.png'
import Button from '../components/Button'
import Badge from '../components/Badge'

const OpenedCard = css`
  box-shadow: 0 40px 50px 0 #11111114;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 10px 0;
  padding-top: 0;
  background-color: #fff;
  border-radius: 8px;
  transform: scale(1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${OpenedCard}
  }

  img {
    max-height: 300px;
    width: auto;
    max-width: 100%;
  }

  div {
    padding: 10px 20px;
    padding-top: 20px;
  }
`

export default function Wallpapers() {
  return (
    <Container padding="20px 10%">
      <Heading>Wallpapers</Heading>
      <Description>
        I love using awesome wallpapers on my devices, and nice wallpapers makes
        my day more productive and peaceful. Here are some beautiful wallpapers
        for your lil' setup or device. Make sure you tag me while posting a
        photo of your setup with this image 😉.
      </Description>

      <Card>
        <img src={MozurImage} alt="Mozur ep1" />

        <div>
          <Badge margin="20px 0">$90</Badge>
          <Heading
            style={{
              fontSize: 18,
              margin: '10px 5px',
              marginTop: '20px',
            }}
          >
            Mozur
          </Heading>
          <Description
            style={{
              fontSize: 14,
              margin: '10px 5px',
            }}
          >
            This is a wallpaper pack that comes with awesome blurry desktop
            pictures that can be the perfect fit for your devices and desktop.
          </Description>
          <Button>Buy Now </Button>
        </div>
      </Card>
    </Container>
  )
}
