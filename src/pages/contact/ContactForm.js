import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import apiCall from '../../url';
import validate from './validation';
function ContactForm() {
  const [message,setMessage] = useState({name:'',email:'',phone_no:"",address:'',service_id:'',message:''})
  const [errors,setErrors] = useState({name:'',email:'',phone_no:"",address:'',message:'',notify:""})
  const [isLoading,setIsLoading] =useState(false)
  const [show,setShow] = useState(false)
  const [services,setServices] = useState([])

  const fetchServices = async () => {
    try {
      const response = await apiCall.get("services");
      if (response.status === 200) {
        setServices(response.data)
      }
    } catch (err) {}
  };
  useEffect(()=>{
    fetchServices()
  },[])

  const changeHandler = (e)=>{
    const {name,value} = e.target
    console.log('name=',name," value",value)
    setMessage(prevState =>{
      return {...prevState,[name]:value}
    })
    if(value){
      setErrors(prevErrors=>{
        return {...prevErrors,[name]:""}
      })
    }
  }
  const submitMissage = async()=>{
    setErrors(prevErrors=>{
      return {...prevErrors,notify:""}
    })
    const isValid = validate(message)
    if(Object.values(isValid).length > 0){
      setErrors(isValid)
    }
    else {
      try{
        setIsLoading(true)
        const response = await apiCall.post('contacts',message)
        if(response.status === 201 || 200){  
          setMessage({name:'',email:'',address:'',service_id:'',message:''})       
       setShow(true)
        }
      }
      catch(err){
  setErrors(prevErrors=>{
    return {...prevErrors,notify:"faild to send message. try again"}
  })
      }
      finally{
        setIsLoading(false)
        
      }
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
       name='email'
       value={message.email}
       onChange={changeHandler}
        placeholder="Your Email *"
        className={errors.email ? 'red-border' : ''}         
       
         />
         <p className='red-text'>{errors.email? errors.email : ''}</p>
      </div>
    </div>
    <div className='d-md-flex justify-content-between align-items-center mt-2'>    
    <div className='flex-fill'>
    <Form.Control
     type="number"
     placeholder="Phone Number *"
      className={errors.phone_no ? 'red-border' : ''} 
      name='phone_no'
      value={message.phone_no}
      onChange={changeHandler}
       /> 
       <p className='red-text'>{errors.phone_no? errors.phone_no : ''}</p>
    </div>
    <div className='flex-fill ms-md-5'>
    <Form.Group>
    <Form.Control
     type="text"
      placeholder="Address"
      name='address'
      value={message.address}
      onChange={changeHandler}
      className='me-md-5'
       />
       </Form.Group>
    </div>
  </div>
    <div className='d-md-flex  align-items-center mt-2'>    
         <Form.Group className='col-md-5'>
      <Form.Select
      name='service_id'
      value={message.service_id}
      onChange={changeHandler}
       >
       <option disabled value="">Services</option>
       {
        services.length > 0 && 
        services.map(service=><option key={service.id} value={service.id}>{service.title}</option>)
      }
          
          <option value="">Other</option>
        </Form.Select>
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
    <div className='d-flex justify-content-between'>
    {errors.notify &&(
      <div className='red-text py-2'>faild to send your message, please try again</div>
    )}
    <Toast
    onClose={() => setShow(false)}
     show={show}
      delay={5000}
       autohide
       bg="success"
       >
       <Toast.Header>
       <img
         src="holder.js/20x20?text=%20"
         className="rounded me-2"
         alt=""
       />
       <strong className="me-auto fs-5 fw-bold">Successful</strong>
     </Toast.Header>
   <Toast.Body className="text-white p-2 fs-5">Thank you for contacting us, we will respond to you soon.</Toast.Body>
 </Toast>
    <Button onClick={submitMissage} variant="none" className='submit-btn mt-5 px-5 align-self-center ms-auto'>
      {
        !isLoading ?(<span className='me-2'>Submit</span>
        ):(<>
          <span className='me-2'>Sending</span><Spinner animation="border" variant="warning" size="sm" />
          </>
          )
      }
    </Button>
    </div>
  </Form>
    </div>
   
  );
}

export default ContactForm;