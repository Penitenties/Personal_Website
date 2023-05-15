import { Link } from 'react-router-dom';

import { Container } from '@mui/material';
import Footer from '../components/Footer.js';

import '../Css/Default.css';

import EthanPicture from '../images/EthanPicture.jpg'
import Squares from '../images/SquaresTransparent.png'

function Home() {
  return (
    <div style={{ flexDirection: 'column', width: '100%' }}>
    <div className='background' style={{ background: '#151515', flexDirection: 'column', height: '100vh' }} >

      {/*Aspect ratio 1:1*/ }
      <img src={Squares} style={{ position: 'absolute', width: '400px', zIndex: '1' }} />

      <div className='container' style={{ paddingTop: "150px", flexDirection: 'row', width: '60vw', marginLeft: 'auto', marginRight: 'auto', color: 'white', zIndex: '2' }} >

        <div style={{ flexDirection: 'column' }}>
            <h1 style={{ fontSize: '50px' }} className="homePageHeader">Welcome</h1>
          {/*Text*/}
          <div style={{ width: "30vw", float: 'left'}} >
            <p>I am a full stack developer and recent Drexel graduate.</p>
          </div>
        </div>
          {/*Links*/}
        <div style={{ flexDirection: 'column', marginLeft: 'auto', marginTop: '30px' }} >
          <h1 className="homePageHeader">About me</h1>
          <div className='hangingBorder' style={{ padding: '10px', flexDirection: 'column' }}>
              <Link to={'./aboutthissite'} className='homePageLink'>About this site</Link>
              <Link to={'./resume' } className='homePageLink'>Resume</Link>
              <a className='homePageLink' target= "_blank" href="https://github.com/Penitenties/Personal_Website">Github</a>
          </div>
        </div>
      </div>
      {/*Aspect ratio 1:1*/}
      <img className='flipAndReverse' src={Squares} style={{ position: 'absolute', width: '400px', bottom: '0', right: '0', zIndex: '1' }} />

      </div>
     <Footer />
     </div>

  );
}

export default Home;
