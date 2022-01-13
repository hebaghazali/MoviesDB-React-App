import { useState } from 'react';

import { Button, Form, Container } from 'react-bootstrap';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    userNameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });

  const handleChange = e => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'name') {
      setErrors({
        ...errors,
        nameError:
          e.target.value.length === 0 ? 'This field is required' : null,
      });
    }

    if (e.target.name === 'email') {
      let errorMessage;
      let validate = false;

      const pattern = /^\w+@{1}[a-z]+\.\w+$/;
      if (!pattern.test(e.target.value)) {
        errorMessage = 'Please make sure you type the right format';
        validate = true;
      }

      if (e.target.value.length === 0) {
        errorMessage = 'This field is required';
        validate = true;
      }

      setErrors({
        ...errors,
        emailError: validate ? errorMessage : null,
      });
    }

    if (e.target.name === 'username') {
      let errorMessage;
      let validate = false;

      if (e.target.value.length === 0) {
        errorMessage = 'This field is required';
        validate = true;
      }

      if (e.target.value.includes(' ')) {
        errorMessage = 'Please do not write spaces';
        validate = true;
      }

      setErrors({
        ...errors,
        usernameError: validate ? errorMessage : null,
      });
    }

    if (e.target.name === 'password') {
      let errorMessage;
      let validate = false;

      const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?\W).{8,}$/;
      if (!pattern.test(e.target.value)) {
        errorMessage = 'Please type the right password format';
        validate = true;
      }

      if (e.target.value.length === 0) {
        errorMessage = 'This field is required';
        validate = true;
      }

      setErrors({
        ...errors,
        passwordError: validate ? errorMessage : null,
      });
    }

    if (e.target.name === 'confirmPassword') {
      setErrors({
        ...errors,
        confirmPasswordError:
          e.target.value !== user.password
            ? 'The password is not matched'
            : null,
      });
    }
  };

  return (
    <>
      <Container className='mt-2'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className={`form-control ${
                errors.nameError ? 'border-danger' : ''
              }`}
              type='text'
              name='name'
              placeholder='Enter name'
              onChange={e => {
                handleChange(e);
              }}
            />
            {errors.nameError ? (
              <small className='text-danger'>{errors.nameError}</small>
            ) : (
              ''
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className={`form-control ${
                errors.emailError ? 'border-danger' : ''
              }`}
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={e => {
                handleChange(e);
              }}
            />
            {errors.emailError ? (
              <small className='text-danger'>{errors.emailError}</small>
            ) : (
              ''
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              className={`form-control ${
                errors.usernameError ? 'border-danger' : ''
              }`}
              type='text'
              name='username'
              placeholder='Enter username'
              onChange={e => {
                handleChange(e);
              }}
            />
            {errors.usernameError ? (
              <small className='text-danger'>{errors.usernameError}</small>
            ) : (
              ''
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={`form-control ${
                errors.passwordError ? 'border-danger' : ''
              }`}
              type='password'
              name='password'
              placeholder='Password'
              onChange={e => {
                handleChange(e);
              }}
            />
            {errors.passwordError ? (
              <small className='text-danger'>{errors.passwordError}</small>
            ) : (
              ''
            )}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPasswordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className={`form-control ${
                errors.confirmPasswordError ? 'border-danger' : ''
              }`}
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={e => {
                handleChange(e);
              }}
            />
            {errors.confirmPasswordError ? (
              <small className='text-danger'>
                {errors.confirmPasswordError}
              </small>
            ) : (
              ''
            )}
          </Form.Group>

          <Button variant='success' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
