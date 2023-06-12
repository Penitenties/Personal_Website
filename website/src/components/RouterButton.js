import { Link } from 'react-router-dom';
import '../Css/Default.css';


function RouterButton (props) {

  return (
    <Link to={props.link} class='routerButton' style={{ marginRight: '30px' }}>
        <p><b>{ props.buttonText }</b></p>
      </Link>
  );


}

export default RouterButton;