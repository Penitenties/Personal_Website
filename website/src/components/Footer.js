import { Container } from '@mui/material';
import '../Css/Default.css';

function Footer () {
  return (
    //styles as a footer
    <div className='background' style={{ background: '#D3D3D3'}}>

      <Container>
      <div style={{ flexDirection: 'column', marginTop: '30px', marginBottom: '30px' }}>
        <p>Email: ethanjdc@gmail.com</p>
        <p>LinkedIn: <a target='_blank' href='https://www.linkedin.com/in/ethanjdc/'> ethanjdc </a> </p>
      </div>
    </Container>

    </div >
  );

}

export default Footer;