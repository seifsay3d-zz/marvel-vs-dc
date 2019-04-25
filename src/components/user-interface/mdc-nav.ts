import styled from "vue-styled-components";

const props = {};
const vars = {
  background: "#111"
};

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  background: ${vars.background};
  margin-bottom: 30px;
`;

export default StyledNav;
