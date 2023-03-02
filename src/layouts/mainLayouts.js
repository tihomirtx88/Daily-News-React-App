import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = (props) => {
    return(
    <Container className='mt-5 mb-5'>
       {props.children}
       <ToastContainer/>
    </Container>
  );
}

export default MainLayouts;