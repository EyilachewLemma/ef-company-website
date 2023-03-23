 const validate = (inputs) =>{
   var phoneno = /^\d{10}$/;
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let errors={}
     if(!inputs.name){
        errors.name = 'name is required'
     }
     else if(inputs.name.trim().length > 30){
        errors.name = 'name is too long, please use shorter name'
     }
   
     if(!inputs.email){
        errors.email = 'email is required'
     }
     else if(!inputs.email.match(validRegex)){
        errors.email = 'invalid email address'
     }
     if(!inputs.phone_no){
      errors.phone_no = "phone number is required"
     }
     else if(!inputs.phone_no.match(phoneno)){
      errors.phone_no = "invalid phone number"
  }
     if(!inputs.message){
        errors.message = 'please write your message here'
     }
     return errors
}
export default validate