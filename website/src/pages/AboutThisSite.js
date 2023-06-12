import { Container } from '@mui/material';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';

import '../Css/Default.css';


function Home() {
    return (
      <div className='background' style={{ flexDirection: 'column' } }>

            <Header />

            <Container className='container'>
          <h1 style={{ marginBottom: '30px' }}>About this site</h1>
              <div className='jumpLinks' style={{ display: 'inline-flex', flexDirection: 'column', padding: '20px', textDecoration: 'underline'}}>
              <a href='#Design'>Design</a>
              <a href='#FrontEnd'>Front End</a>
              <a href='#BackEnd'>Back End</a>

            </div>
            <a id='Design'><h2 className='smallTitle'>Design</h2></a>
              <p>When making this website I took inspiration from a number of sources and decided to display a number of diverse aesthetics instead of using a unified theme. The home page draws from the minimalism of Apple to create a clean look that presents desirable information front and center. However, additional accents have been added to keep the home page welcoming and prevent it from looking sterile.<br /><br />This page seeks to display large amounts of primarily text information so minimalism is not viable. Instead I relied on my experience at the Philadelphia Water Department to create a scheme that can support large amounts of text without becoming overwhelming.</p>
            <a id='FrontEnd'><h2 className='smallTitle'>Front end</h2></a>
              <p>The website is built in React. React was chosen for its powerful features and extensive community support. For example, routing is done with react-router to minimize the number of times the site is reloaded per visit. In addition to the CSS, Material UI has been utilized to accelerate development by providing prefab versions of common components that I can then customize. </p>
            <a id='BackEnd'><h2 className='smallTitle'>Back end</h2></a>
              <p style={{ marginBottom: '40px'}}>The website is hosted on an AWS e2c T2 micro running Ubuntu. The website is served from an Apache instance. DNS routing is provided by Cloudflare utalizing their proxy service.</p>
            </Container>
            <Footer />

        </div>

    );
}

export default Home;