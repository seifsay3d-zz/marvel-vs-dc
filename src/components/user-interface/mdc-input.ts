import styled from "vue-styled-components";

const props = {
  width: String
};

const StyledInput = styled("input", props)`
  height: 40px;
  width: ${(props: any) => props.width || "100%"};
  text-indent: 20px;

  margin: 0 auto;
  outline: none;
  border: 1px solid #252525;
  border-radius: 20px;
  color: gray;
  background: #252525;
`;

export default StyledInput;
