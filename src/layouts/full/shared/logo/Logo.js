import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logos/result.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/">
        <img src={logo} style={{ width: 70, margin: "0px 10px 0px 0px"}} />
      </Link>
      <div>
        <h3 className="mb-0 mt-1">CSEDU</h3>
        <h6 style={{ letterSpacing: 1, marginLeft: 2 }}>ALUMNI ASSOCIATION</h6>
      </div>
    </div>
  );
};

export default Logo;
