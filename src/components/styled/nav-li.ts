import styled from "vue-styled-components";

const props = {
  flexGrow: String
};

const vars = {
  borderColor: "#252525"
};

const StyledNavLi = styled("li", props)`
  display: flex;
  color: white;
  padding: 10px 20px;
  border-right: 1px solid ${vars.borderColor};
  border-left: 1px solid ${vars.borderColor};
  align-items: center;
  flex-grow: ${(props: any) => props.flexGrow || "auto"};
  flex-basis: 120px;
  justify-content: center;

  &:last-of-type {
    margin-left: auto;
  }

  a {
    color: white;
    text-decoration: none;
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
    &:hover {
      color: white;
    }
    &:active {
      color: white;
    }
  }
`;

export default StyledNavLi;
