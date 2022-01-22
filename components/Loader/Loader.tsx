import { CircularProgress } from '@material-ui/core';
import StyledDiv from './styles';

const Loader = () => (
  <StyledDiv>
    <CircularProgress size={80} />
  </StyledDiv>
);

export default Loader;
