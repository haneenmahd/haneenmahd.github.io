import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import {
  Heading,
  LargeHeading,
  Paragraph,
  SubHeading,
} from '../components/Text'
import List, { ListItem } from '../components/List'
import TextField from '../components/TextField'
import CommonLink from '../components/CommonLink'
import CleanOfficeImage from '../assets/img/clean-and-minimal-office.webp'
import Button from '../components/Button'
import TextArea from '../components/TextArea'
import CVFile from '../assets/img/CV.pdf'

const CustomisedContainer = styled(Container)`
  padding: 0 10%;
`

const SubContainer = styled.div`
  padding: 1% 0;
`

const OfficeThumbnail = styled.div`
  height: 400px;
  width: 100%;
  background-image: url(${CleanOfficeImage});
  background-position: center;
  background-size: cover;
`

const CustomisedSubHeading = styled(SubHeading)`
  font-weight: 500;
`

const CustomisedLink = styled.a`
  ${CommonLink}
  font-size: inherit;
  margin: 0 4px;
  padding: 0;
  border-bottom: 1px dotted #d3d3d3;
`

const Form = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 20px;
`

const CVContainer = styled.div`
  margin-top: 10px;
  padding: 50px 0;
  padding-top: 0;
`

export default function HireMe() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const setValue = (e, cb) => {
    cb(e.target.value)
  }

  const sendHireEmail = (e) => {
    let link = document.createElement('a')
    link.href = `mailto:haneenmahdin@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`

    link.click()
  }

  return (
    <CustomisedContainer padding="0">
      <LargeHeading>Hire Me.</LargeHeading>
      <OfficeThumbnail />
      <SubContainer>
        <CustomisedSubHeading>
          I'm currently taking on projects for the following:
        </CustomisedSubHeading>

        <List>
          <ListItem>Product Design</ListItem>
          <ListItem>UI / UX Design</ListItem>
          <ListItem>Web designing &amp; development</ListItem>
          <ListItem>
            Backend development (Node.js, MongoDB, Docker, Typescript)
          </ListItem>
          <ListItem>Video Editing</ListItem>
          <ListItem>Content Creation</ListItem>
        </List>
      </SubContainer>

      <SubContainer>
        <CustomisedSubHeading>How to hire me</CustomisedSubHeading>
        <Paragraph>
          You can
          <CustomisedLink
            target="_blank"
            href="https://calendly.com/haneenmahdin/30min"
          >
            hire me for half an hour
          </CustomisedLink>
          or you can either schedule a meeting with me on
          <CustomisedLink
            target="_blank"
            href="https://calendly.com/haneenmahdin"
          >
            Calendly.
          </CustomisedLink>
          Or you could fill this form below. Make sure to include every detail
          you want to discuss, like your budget, what is your goal or what you
          want me to help you with.
        </Paragraph>
      </SubContainer>

      <Form>
        <TextField
          value={name}
          onChange={(e) => setValue(e, setName)}
          placeholder="Your name"
        />

        <TextField
          value={subject}
          onChange={(e) => setValue(e, setSubject)}
          placeholder="Your subject"
        />
        <TextArea
          value={message}
          onChange={(e) => setValue(e, setMessage)}
          placeholder="Your message (optional)"
        />
        <Button action={sendHireEmail}>Submit</Button>
      </Form>

      <br />
      <hr />
      <br />

      <CVContainer>
        <Heading>Read my CV</Heading>
        <Paragraph>
          I have made it so clean and minimal to make it more readable and
          pretty much straightforward!
        </Paragraph>
        <CustomisedLink
          style={{
            marginLeft: 0,
          }}
          target="_blank"
          href={CVFile}
        >
          Download (CV.pdf)
        </CustomisedLink>
      </CVContainer>
    </CustomisedContainer>
  )
}
