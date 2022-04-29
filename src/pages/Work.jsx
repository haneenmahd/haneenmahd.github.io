import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Image from '../components/Image'
import { Link as RouterLink, useOutletContext } from 'react-router-dom'
import Text, { Heading, LargeHeading, Paragraph } from '../components/Text'
import NavLink from '../components/NavLink'
import Link from '../components/Link'
import MinimWallpaperMobileMockup from '../assets/img/minim-wallpaper-mockup.png'
import NotyUIDesign from '../assets/img/noty-ui-design.png'
import MindsSoUIDesign from '../assets/img/minds.so-ui.png.webp'
import LinkedThumbnail from '../assets/img/linked-thumbnail.png'
import CommonLink from '../components/CommonLink'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 5rem;
  width: 100%;
  padding: 30px 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  z-index: 2;

  div {
    padding: 15px 0;
  }

  a {
    margin: 0;
    margin-right: 30px;
  }

  p {
    color: #656d78;
    line-height: 1.7rem;
  }
`

const HireMeButton = styled(RouterLink)`
  ${CommonLink}

  margin: 0;
  padding: 5px 0;
  border-bottom: 1px dotted #989898;
`

export default function Work() {
  const [menuOpen, setMenuOpen] = useOutletContext()

  return (
    <Container>
      <LargeHeading>My work</LargeHeading>
      <Grid>
        <Card>
          <Image src={MinimWallpaperMobileMockup} />
          <Heading>Minim — Wallpaper pack</Heading>
          <Paragraph>
            A clean and minimal wallpaper perfect for 4k desktops and mobiles.
          </Paragraph>

          <div>
            <Link
              href="https://haneenmahdin.gumroad.com/l/minim"
              text="Purchase"
              highlighted
            />
            <Link
              href="https://dribbble.com/shots/18125359-Clean-and-Minimal-Wallpaper"
              text="Dribble"
            />
          </div>
        </Card>

        <Card>
          <Image src={NotyUIDesign} />
          <Heading>Noty</Heading>
          <Paragraph>
            A simple and minimal app for note taking and productivity purpose.
            This is also my submission for Swift Student challenge Apple WWDC
            2022.
          </Paragraph>

          <div>
            <NavLink to="/stories/noty" text="Read Story" />
            <Link
              href="https://dribbble.com/shots/18062109-Noty-A-Note-Taking-app"
              text="Dribbble"
            />
            <Link href="https://github.com/haneenmahd/Noty" text="GitHub" />
          </div>
        </Card>

        <Card>
          <Image src={MindsSoUIDesign} />
          <Heading>Minds.so</Heading>
          <Paragraph>
            A web app to create and share awesome images of your quotes.
          </Paragraph>

          <div>
            <Link
              href="https://minds-so.vercel.app"
              text="Open Live site"
              highlighted
            />
            <Link
              href="https://dribbble.com/shots/17762544-Minds-so-UI"
              text="Dribbble"
            />
            <Link href="https://github.com/haneenmahd/minds.so" text="GitHub" />
          </div>
        </Card>

        <Card>
          <Image src={LinkedThumbnail} />
          <Heading>Linked</Heading>
          <Paragraph>
            A beautifully built template for displaying all your personal links.
            Made with React.js, Styled Components. Configure and create a
            website with just using a JSON file!
          </Paragraph>

          <div>
            <Link
              href="https://github.com/haneenmahd/linked#usage-"
              text="Create yours"
              highlighted
            />
            <Link href="https://github.com/haneenmahd/linked" text="GitHub" />
          </div>
        </Card>
      </Grid>

      <HireMeButton to="/hire-me">Hire Me for your next project</HireMeButton>
    </Container>
  )
}
