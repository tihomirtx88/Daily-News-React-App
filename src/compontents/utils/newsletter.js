import { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToNewsletter } from '../../store/utils/thinks';
import { clearNewsLetter } from '../../store/reducers/usersReducer';
import { showToast } from './tools';

const Newsletter = () => {
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        dispatch(addToNewsletter({email:value}))
        .unwrap()
        .then((response)=>{
            if(response.newsletter === 'added'){
                showToast('SUCCESS','Thank you for subcribing !!')
                textInput.current.value = '';
            }
            if(response.newsletter === 'failed'){
                showToast('ERROR','You are already on the the DB')
                textInput.current.value = '';
            }
            dispatch(clearNewsLetter());
        })
    }

    return(
        <div className="newsletter_container">
           <h1>Join our newsletter</h1>
           <div className="form">
              <Form className='mt-4' onSubmit={handleSubmit}>
                 <Form.Group>
                     <Form.Control type='text' placeholder='Examle: yourgmail.com' name='email' ref={textInput}/>
                 </Form.Group>
                 <Button className='mt-2' variant='primary' type='submit'>Add me in the list</Button>
              </Form>
           </div>
        </div>
    );
}

export default Newsletter;