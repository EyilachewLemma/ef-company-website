import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import validate from './validation';
function ContactForm() {
  const [message,setMessage] = useState({name:'',email:'',address:'',service:'',message:''})
  const [errors,setErrors] = useState({name:'',email:'',address:'',service:'',message:''})
  const changeHandler = (e)=>{
    const {name,value} =e.target
    setMessage(prevState =>{
      return {...prevState,[name]:value}
    })
  }
  const submitMissage = ()=>{
    const isValid = validate(message)
    if(Object.values(isValid).length > 0){
      setErrors(isValid)
    }
  }
  return (
    <div className='contact-form'>
    <Form>
    <div className='d-md-flex justify-content-between align-items-center'>    
      <div className='flex-fill me-md-5'>
      <Form.Control
       type="text"
       placeholder="Your Name *"
        className={errors.name ? 'red-border' : ''} 
        name='name'
        value={message.name}
        onChange={changeHandler}
         /> 
         <p className='red-text'>{errors.name? errors.name : ''}</p>
      </div>
      <div className='flex-fill mt-3 mt-md-0'>
      <Form.Control
       type="email"
        placeholder="Your Email *"
        className={errors.email ? 'red-border' : ''} 
        name='email'
        value={message.email}
        onChange={changeHandler}
         />
         <p className='red-text'>{errors.email? errors.email : ''}</p>
      </div>
    </div>
    <div className='d-md-flex  align-items-center mt-3'>    
    <Form.Group className='col-md-6'>
      <Form.Control
       type="text"
        placeholder="Address"
        name='address'
        value={message.message}
        onChange={changeHandler}
        className='me-md-5'
         />
         </Form.Group>
         <Form.Group className='col-md-5 ms-md-5'>
      <Form.Select
      className={errors.service ? 'red-border mt-3 md-lg-0' : 'mt-3 md-lg-0'} 
      name='service'
      value={message.service}
      onChange={changeHandler}
       >
          <option>Services</option>
          <option>Building Architectural and Structural Design</option>
          <option>Hydraulic and Structural Engineering Design</option>
          <option>Topographic Surveying and Design</option>
          <option>Geotechnical Engineering, Material Testing, and Pavement Design</option>
          <option>Transportation Planning and Feasibility Study</option>
          <option>Transportation Planning and Feasibility Study</option>
        </Form.Select>
        <p className='red-text'>{errors.service? errors.service : ''}</p>
        </Form.Group>
    </div>
    <FloatingLabel controlId="floatingTextarea2" label="Message..." className='mt-3 mt-md-5'>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "200px" }}
          className={errors.message ? 'red-border' : ''} 
          name='message'
          value={message.message}
          onChange={changeHandler}
        />
        <p className='red-text'>{errors.message? errors.message : ''}</p>
        </FloatingLabel>
    <Button onClick={submitMissage} variant="none" className='submit-btn mt-5 px-5'>
      Submit
    </Button>
  </Form>
    </div>
   
  );
}

export default ContactForm;