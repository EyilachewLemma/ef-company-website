import { useState } from "react";
import Form from "react-bootstrap/Form";
import Toast from 'react-bootstrap/Toast';
import validateEducationalInfo from "./validateEducationalInfo";
const EducationalInfo = ({ data, setData }) => {
  const [educationInfo, setEducationInfo] = useState({
    title: "",
    company: "",
    qualification: "",
    cgpa: "",
    start_date: "",
    end_date: "",
  });
  const [errors,setErrors] = useState({})
  const [show,setShow] = useState(false)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEducationInfo((previousInfo) => {
      return { ...previousInfo, [name]: value };
    });
    if(value){
      setErrors({...errors,[name]:""})
    }
  };
  const addEducationInfo = (e) => {
    e.preventDefault();
    const errorValues = validateEducationalInfo(educationInfo)
    if(Object.values(errorValues)?.length > 0){
      setErrors(errorValues)
    }
    else{
      setData((previousData) => {
        return [...data, educationInfo];
      });
      setEducationInfo({});
      setShow(true)
    }
   
  };
  return (
    <>
      <div className="text-center pb-3 pb-lg-5">
        Fill your educatinal information here,Click Add Button to save each
        education information,you can add more than one education such as
        degree,master... etc, finally click Next button to go to the next form
      </div>

      <Form className="border rounded p-3">
        <div className="d-md-flex">
          <Form.Group className="mb-3 me-md-4 flex-fill " controlId="fname">
            <Form.Label>Field of Study</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={educationInfo.title || ""}
              onChange={changeHandler}
              className={errors.title ?"red-border":""}
              />
              {errors.title ?<span className="red-text">{errors.title }</span>:""}
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill" controlId="mname">
            <Form.Label>Name of Institution you Graduated</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={educationInfo.company || ""}
              onChange={changeHandler}
              className={errors.company ?"red-border":""}
              />
              {errors.company ?<span className="red-text">{errors.company }</span>:""}
          </Form.Group>
        </div>
        <div className="d-md-flex">
          <Form.Group className="mb-3 flex-fill me-md-4" controlId="mname">
            <Form.Label>Qualification </Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={educationInfo.qualification || ""}
              onChange={changeHandler}
              className={errors.qualification ?"red-border":""}
              />
              {errors.qualification ?<span className="red-text">{errors.qualification }</span>:""}
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill " controlId="fname">
            <Form.Label>Final Grade</Form.Label>
            <Form.Control
              type="number"
              name="cgpa"
              value={educationInfo.cgpa || ""}
              onChange={changeHandler}
              className={errors.cgpa ?"red-border":""}
              />
              {errors.cgpa ?<span className="red-text">{errors.cgpa }</span>:""}
          </Form.Group>
        </div>
        <div className="d-md-flex">
          <Form.Group className="mb-3 flex-fill me-md-4" controlId="mname">
            <Form.Label>Start Date </Form.Label>
            <Form.Control
              type="date"
              name="start_date"
              value={educationInfo.start_date || ""}
              onChange={changeHandler}
              className={errors.start_date ?"red-border":""}
              />
              {errors.start_date ?<span className="red-text">{errors.start_date }</span>:""}
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill " controlId="fname">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              value={educationInfo.end_date || ""}
              onChange={changeHandler}
              className={errors.end_date ?"red-border":""}
              />
              {errors.end_date ?<span className="red-text">{errors.end_date }</span>:""}
          </Form.Group>
        </div>
        <div className="d-flex justify-content-between">
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
        <Toast.Body className="text-white p-2 fs-5">successfully Added, You can add more qualification.</Toast.Body>
      </Toast>
          <button
            onClick={addEducationInfo}
            className="next-btn px-4 py-2 ms-auto me-2 align-self-center"
          >
            Add
          </button>
        </div>
      </Form>
    </>
  );
};
export default EducationalInfo;
