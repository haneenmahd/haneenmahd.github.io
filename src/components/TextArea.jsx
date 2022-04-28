import styled from "styled-components"

const TextAreaStyle = styled.textarea`
  min-height: 230px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 10px 15px;
  max-width: 100%;
  resize: none;
  line-height: 2rem;
`

export default function TextArea({
    placeholder = "Your Textarea here",
    value,
    onChange
}) {
  return (
    <TextAreaStyle 
        value={value}
        onChange={onChange}
        placeholder={placeholder}></TextAreaStyle>
  )
}
