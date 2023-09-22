import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validate = values => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length < 3) {
          errors.name = 'Must be 3 characters or more';
        } else if(values.name.length > 15) {
          errors.name = 'Must be 3 characters or less';
        }
      
        if (!values.age) {
          errors.age = 'Required';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.gender) {
            errors.gender = 'Required';
        }
      
        return errors;
    };

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          age: '',
          gender: '',
        },
        validate,
        onSubmit: user => {
          dispatch(createUser(user));
          navigate('/all-user');
        },
    });

    return (
    <Container>
        <h1 className="text-center my-3">Add User</h1>
        <Form onSubmit={formik.handleSubmit} className='w-75 mx-auto border p-5 rounded'>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name'  placeholder="golam aziz" 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  name='email' placeholder="name@example.com" 
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number"  name='age' placeholder="22" 
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {formik.errors.age ? <div className='text-danger'>{formik.errors.age}</div> : null}
            </Form.Group>

            <Form.Group>
                <Form.Check name='gender' label="Male"  type="radio" id='male' 
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                />
                <Form.Check name='gender' label="Female" type="radio" id='female' 
                    value='female'
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                />
               {formik.errors.gender ? <div className='text-danger'>{formik.errors.gender}</div> : null}
            </Form.Group>

            <Button as="input" type="submit" value="Submit" className='mt-3'/>
        </Form>
    </Container>
    );
};

export default Create;