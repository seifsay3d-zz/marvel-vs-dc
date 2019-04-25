import styled from "vue-styled-components";

const vars = {
  background: "#111"
};

const nav = styled.nav`
  display: flex;
  list-style: none;
  background: ${vars.background};
  margin-bottom: 30px;
`;

export default nav;
