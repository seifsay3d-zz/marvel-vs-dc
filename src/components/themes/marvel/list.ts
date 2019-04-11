import styled from 'vue-styled-components';

const props = { fullWidth: Boolean };

const StyledButton = styled('div', props)`
  background: red;
  width: ${(props:any) => props.fullWidth ? '100%' : '20px'};
`;

export default StyledButton;
