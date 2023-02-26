
import Form from "react-bootstrap/Form";
const Documents = ({data,setData}) => {
  const changeHandler = (e) =>{
    const {name,files} = e.target
      setData(prevFiles=>{
        return {...prevFiles,[name]:files[0]}
      })
  }
  return (
    <Form>
    <div className="text-center pb-5">Upload your CV and Certificate here in PDF format and click Submit button to finish your application</div>
    <div className="d-md-flex">
    <Form.Group className="mb-3 me-md-4 flex-fill " controlId="cv">
    <Form.Label>Upload CV</Form.Label>
    <Form.Control
     type="File"
     name="cv"
     onChange={changeHandler}
      />
  </Form.Group>
  <Form.Group className="mb-3 me-3 flex-fill" controlId="document">
    <Form.Label>Upload Certificate and Supporting Documents</Form.Label>
    <Form.Control
     type="file"
     name="certificate"
     onChange={changeHandler}
      />
  </Form.Group>
    </div>
   
      
      
        </Form>
  );
};
export default Documents;
