import styled from 'styled-components'

const TextFieldStyle = styled.input`
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 5px 15px;
  width: min-content;
  max-width: 100%;
`

const TextField = ({ placeholder = 'Your text field', value, onChange }) => {
  return (
    <TextFieldStyle
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextField
