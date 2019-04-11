import styled from "vue-styled-components";

const btnProps = { primary: Boolean };

const StyledButton = styled("button", btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${(props: any) => (props.primary ? "palevioletred" : "white")};
  color: ${(props: any) => (props.primary ? "white" : "palevioletred")};
`;

export default StyledButton;
