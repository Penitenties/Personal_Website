import { Link } from 'react-router-dom';
import '../Css/Default.css';


function RouterButton (props) {

  return (
      <Link to={props.link} class='routerButton' >
        { props.buttonText }
      </Link>
  );


}

export default RouterButton;