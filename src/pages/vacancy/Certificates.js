
import { useState } from "react";
import Form from "react-bootstrap/Form";
const Certificates = ({data,setData}) => {
  const [certificate,setCertificate] = useState({})
  const changeHandler = (e) =>{
    const {name,value} = e.target
    setCertificate(previousData=>{
      return {...previousData,[name]:value}
    })
  }
  const addCertificates = (e)=>{
    e.preventDefault()
    setData([...data,certificate])
    setCertificate({})
  }
    return (
    <>
      <div className="text-center pb-5">
        Add your Certificate here,Click Save Button to save each Certificate.
        You can add more than one Certificate, finally click Next button to go
        to the next form
      </div>
      <Form className="border rounded p-3">
        <div className="d-md-flex">
          <Form.Group
            className="mb-3 me-md-4 flex-fill "
            controlId="titleofCertificate"
          >
            <Form.Label>Title of Certificate</Form.Label>
            <Form.Control
             type="text"
             name='title'
             value={certificate.title || ''}
             onChange={changeHandler}
              />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill" controlId="eshuer">
            <Form.Label>Essued by</Form.Label>
            <Form.Control
             type="text"
             name='essuedBy'
             value={certificate.essuedBy || ''}
             onChange={changeHandler}
              />
          </Form.Group>
        </div>
        <div className="d-md-flex">
          <Form.Group
            className="mb-3 flex-fill me-md-4"
            controlId="eshued-date"
          >
            <Form.Label>Eshud Date </Form.Label>
            <Form.Control 
            type="date"
            name='essuedDate'
             value={certificate.essuedDate || ''}
             onChange={changeHandler}
             />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill " controlId="summary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
             type="text"
             name='summary'
             value={certificate.summary || ''}
             onChange={changeHandler}
              />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-end">
     <button
     onClick={addCertificates}
     className="next-btn px-4 py-2 me-2"
     >
       Save
     </button>
     </div>
      </Form>
    </>
  );
};
export default Certificates;
