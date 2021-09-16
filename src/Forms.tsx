import React, {FC} from 'react';
import {FormGroup, FloatingLabel, Form, Button} from 'react-bootstrap';

//  <FloatingLabel
//     controlId="floatingInput"
//     label="Email address"
//     className="mb-3"
//   >
//     <Form.Control type="email" placeholder="name@example.com" />
//   </FloatingLabel>
//   <FloatingLabel controlId="floatingPassword" label="Password">
//     <Form.Control type="password" placeholder="Password" />
//   </FloatingLabel>
export const Forms: FC = () => {
  return <form>
    <legend>Forms</legend>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username"/>
    </Form.Group>
    <FormGroup>
      <FloatingLabel label='Password'>
        <Form.Control type="password"/>
      </FloatingLabel>
    </FormGroup>
    <FormGroup>
      <FloatingLabel label={'Description'}>
        {
          /*
           Should use css to set height rather than `rows`
           https://react-bootstrap.netlify.app/components/forms/#forms-floating-labels-textarea
          */
        }
        <Form.Control as={'textarea'} placeholder="my description" style={{height: 100}}/>
      </FloatingLabel>

    </FormGroup>
    <FormGroup>
      <Form.Check
        type={'checkbox'}
        label={`Remember me`}
      />
    </FormGroup>
    <Button type="submit">Submit</Button>
  </form>
};
