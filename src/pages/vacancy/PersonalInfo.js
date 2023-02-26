import Form from "react-bootstrap/Form";
const PersonalInfo = ({data,setData}) => {

  const changeHandler = (e) =>{
       const {name,value} = e.target
    setData(previousValue=>{
        return {...previousValue,[name]:value}
       })

  }

  return (
    <Form>
      <div className="d-md-flex">
      <Form.Group className="mb-3 me-md-4 flex-fill " controlId="fname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
         type="text"
         name="firstName"
         value={data.firstName ||''}
         onChange={changeHandler}
          />
      </Form.Group>
      <Form.Group className="mb-3 flex-fill" controlId="mname">
        <Form.Label>Father Name</Form.Label>
        <Form.Control
         type="text"
         name="middleName"
         value={data.middleName ||''}
         onChange={changeHandler}
          />
      </Form.Group>
      </div>
      <div className="row">
      <Form.Group className="mb-3 col-md-6" controlId="lname">
        <Form.Label>Grand Father Name</Form.Label>
        <Form.Control
         type="text"
         name="lastName"
         value={data.lastName || ''}
         onChange={changeHandler}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6 " controlId="dob">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control
         type="date" 
         name="birthDate"
         value={data.birthDate ||''}
         onChange={changeHandler}
         />
      </Form.Group>
      </div>
     <div className="d-md-flex">
     <Form.Group className="mb-3 me-md-4 flex-fill" controlId="email">
     <Form.Label>Email Addres</Form.Label>
     <Form.Control
      type="email"
      name="email"
      value={data.email || ''}
      onChange={changeHandler}
       />
   </Form.Group>
   <Form.Group className="mb-3 flex-fill" controlId="phoneno">
     <Form.Label>Phone Number</Form.Label>
     <Form.Control
      type="number"
      name="phoneNumber"
      value={data.phoneNumb ||''}
      onChange={changeHandler}
       />
   </Form.Group>
     </div>
     <div className="d-md-flex">
     <Form.Group className="mb-3 me-md-4 flex-fill" controlId="city">
     <Form.Label>City</Form.Label>
     <Form.Control
      type="text"
      name="city"
      value={data.city || ''}
     onChange={changeHandler}
       />
   </Form.Group>
   <Form.Group className="mb-3 flex-fill" controlId="subcity">
     <Form.Label>Subcity</Form.Label>
     <Form.Control
      type="text"
      name="subcity"
      value={data.subcity || ''}
      onChange={changeHandler}
       />
   </Form.Group>
     </div>
      <div className="row">
      <Form.Group className="col-md-6 mb-3" controlId="woreda">
        <Form.Label>Woreda</Form.Label>
        <Form.Control
         type="text"
         name="woreda"
        value={data.woreda || ''}
         onChange={changeHandler}
          />
      </Form.Group>
      </div>
      
    </Form>
  );
};
export default PersonalInfo;
