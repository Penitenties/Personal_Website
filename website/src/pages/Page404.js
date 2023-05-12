import '../Css/Default.css';

import { Container } from '@mui/material';

import Footer from '../components/Footer.js';
import Header from '../components/Header.js';


function page404() {
  return (
    <div className='background' style={{ flexDirection: 'column'}} >

      <Header />
      <Container className='container'>
        <h1 style={{ margin: 0, fontSize: '30vw', display: 'flex', justifyContent: 'center', color: '#555555' }}>404</h1>
      </Container>
      <Footer />

    </div>

  );
}

export default page404;