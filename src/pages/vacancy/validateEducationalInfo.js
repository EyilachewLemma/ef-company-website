
const validateEducationalInfo = (values) =>{
    const errors = {}
    if(!values.title){
        errors.title = "title of field of study is required"
    }
    else if(values.title?.lengh > 70){
        errors.title = 'please enter shorter title'
    }
    if(!values.company){
        errors.company = "institution name  is required"
    }
    else if(values.company?.lengh > 70){
        errors.company = 'please enter shorter institution name'
    }
    if(!values.qualification){
        errors.qualification = "qualification name  is required"
    }
    else if(values.qualification?.lengh > 70){
        errors.qualification = 'please enter shorter qualification name'
    }
    if(!values.cgpa){
        errors.cgpa = "final grade is required"
    }
    
    if(!values.start_date){
        errors.start_date = "start date is required"
    }
    if(!values.end_date){
        errors.end_date = 'please enter end date'
    }
    return errors
}
export default validateEducationalInfo