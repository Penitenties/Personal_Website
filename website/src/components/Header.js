import '../Css/Default.css';
import { Container, Button } from '@mui/material';
import RouterButton from './RouterButton.js';

function Header() {



  return (
    <div style={{ background: "#000055", paddingTop: '15px', paddingBottom: '15px', marginBottom: '40px' }}  className='background'  >

      <Container style={{ height: '50px' }}>
        <RouterButton buttonText="Home" link="/" />
        <div style={{ float: "right" }}>
          <RouterButton buttonText="About this site" link={{}} />{/*workaround for linking to same page*/ }
        </div>
      </Container>

    </div>

  );
}

export default Header;