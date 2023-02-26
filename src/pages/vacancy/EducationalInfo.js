import { useState } from "react";
import Form from "react-bootstrap/Form";
const EducationalInfo = ({ data, setData }) => {
  const [educationInfo, setEducationInfo] = useState({
    field: "",
    institution: "",
    qualification: "",
    cgpa: "",
    startDate: "",
    endDate: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEducationInfo((previousInfo) => {
      return { ...previousInfo, [name]: value };
    });
  };
  const addEducationInfo = (e) => {
    e.preventDefault();
    setData((previousData) => {
      return [...data, educationInfo];
    });
    setEducationInfo({});
  };
  return (
    <>
      <div className="text-center pb-3 pb-lg-5">
        Fill your educatinal information here,Click Save Button to save each
        education information,you can add more than one education such as
        degree,master... etc, finally click Next button to go to the next form
      </div>

      <Form className="border rounded p-3">
        <div className="d-md-flex">
          <Form.Group className="mb-3 me-md-4 flex-fill " controlId="fname">
            <Form.Label>Field of Study</Form.Label>
            <Form.Control
              type="text"
              name="field"
              value={educationInfo.field || ""}
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill" controlId="mname">
            <Form.Label>Name of Institution you Graduated</Form.Label>
            <Form.Control
              type="text"
              name="institution"
              value={educationInfo.institution || ""}
              onChange={changeHandler}
            />
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
            />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill " controlId="fname">
            <Form.Label>Final Grade</Form.Label>
            <Form.Control
              type="number"
              name="cgpa"
              value={educationInfo.cgpa || ""}
              onChange={changeHandler}
            />
          </Form.Group>
        </div>
        <div className="d-md-flex">
          <Form.Group className="mb-3 flex-fill me-md-4" controlId="mname">
            <Form.Label>Start Date </Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={educationInfo.startDate || ""}
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3 me-3 flex-fill " controlId="fname">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={educationInfo.endDate || ""}
              onChange={changeHandler}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-end">
          <button
            onClick={addEducationInfo}
            className="next-btn px-4 py-2 me-2"
          >
            Save
          </button>
        </div>
      </Form>
    </>
  );
};
export default EducationalInfo;
