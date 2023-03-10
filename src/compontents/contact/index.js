import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SendMessage } from '../../store/utils/thinks';
import { showToast } from '../utils/tools';

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {email:'',firstName:'',lastName:'',messsage:''},
    validationSchema: Yup.object({
       email: Yup.string().required('Sorry the email is required').email('Sorry email is invalid'),
       firstName: Yup.string().required('Sorry the field is required').max(10, 'The field must be less of 10 characters long'),
       lastName: Yup.string().required('Sorry the field is required').max(10, 'The field must be less of 10 characters long'),
       message: Yup.string().required('Sorry the field is required').max(50, 'The field must be less of 50 characters long'),
    }),
    onSubmit:(values, {resetForm}) => {
        dispatch(SendMessage(values))
           .unwrap()
           .then((res) =>{
              if (res) {
                 resetForm();
                 showToast("SUCCESS", "Thank you, we will contact you back")
              }
           })
           .catch(err=>{
               showToast("ERROR", "Sorry try again later")
           });
    }
  });

  return(
    <>
      <h1>Contact Us</h1>
      <form className="mt-3" onSubmit={formik.handleSubmit}>
          <div className="form-group">
             <label htmlFor="email">Email Adress</label>
             <input type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="email@com" 
              {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email 
                 ? <Alert variant="danger">
                     {formik.errors.email}
                 </Alert>
                : null
                }
          </div>

          <div className="form-group mt-2">
             <label htmlFor="firstName">First Name</label>
             <input type="text" 
                    name="firstName" 
                    className="form-control" 
                    placeholder="Enter your name" 
              {...formik.getFieldProps('firstName')}
              />
              {formik.errors.firstName && formik.touched.firstName 
                 ? <Alert variant="danger">
                     {formik.errors.firstName}
                 </Alert>
                : null
                }
          </div>

          <div className="form-group mt-2">
             <label htmlFor="lastName">Last Name</label>
             <input type="text" 
                    name="lastName" 
                    className="form-control" 
                    placeholder="Enter your last name" 
              {...formik.getFieldProps('lastName')}
              />
              {formik.errors.lastName && formik.touched.lastName 
                 ? <Alert variant="danger">
                     {formik.errors.lastName}
                 </Alert>
                : null
                }
          </div>

          <div className="form-group mt-2">
             <label htmlFor="message">Message</label>
             <textarea className="form-control" 
                       name="message" 
                       id="message" 
                       cols="30" 
                       rows="10"
                       {...formik.getFieldProps('message')}
                />
              {formik.errors.messsage && formik.touched.messsage 
                 ? <Alert variant="danger">
                     {formik.errors.messsage}
                 </Alert>
                : null
                }
          </div>

          <button type="submit" className="btn btn-primary mt-2">Send message</button>
      </form>
    </>
  );
};

export default Contact;
