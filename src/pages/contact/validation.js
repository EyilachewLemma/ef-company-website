 const validate = (inputs) =>{
     let errors={}
     if(!inputs.name){
        errors.name = 'name is required'
     }
     else if(inputs.name.trim().length > 30){
        errors.name = 'name is too long, please use shorter name'
     }
     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if(!inputs.email){
        errors.email = 'email is required'
     }
     else if(!inputs.email.match(validRegex)){
        errors.email = 'invalid email address'
     }
     if(!inputs.message){
        errors.message = 'please write your message'
     }
     
     if(!inputs.service){
        errors.service = 'please select services'
     }
     return errors
}
export default validate