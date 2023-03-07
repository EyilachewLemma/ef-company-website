// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StepProgressBar from "./ProgressBar";
import Certificates from "./Certificates";
import EducationalInfo from "./EducationalInfo";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Document";
import validatePersonalInfo from "./validatePersonalInfo";
import apiCall from "../../url/index";
const VacancyApplication = () => {
  const [step, setStep] = useState(1);
  const [PersonalData, setPersonalData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    birth_date: "",
    email: "",
    phone_no: "",
    city: "",
    sub_city: "",
    woreda:"",
    cv:null,
    supporting_doc:null,
    job_id:null
  });
  const [educationalData, setEducationalData] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [errors, setErrors] = useState("");
  const {id} = useParams()
  useEffect(()=>{
    setPersonalData(prevData=>{
      return {...prevData,job_id:id}
    })
  },[id])

  const submitApplication = async () => {
    let formData = new FormData()
    formData.append("f_name",PersonalData.f_name)
    formData.append("m_name",PersonalData.m_name)
    formData.append("l_name",PersonalData.l_name)
    formData.append("birth_data",PersonalData.birth_data)
    formData.append("email",PersonalData.email)
    formData.append("phone_no",PersonalData.phone_no)
    formData.append("cv",PersonalData.cv)
    formData.append("supporting_doc",PersonalData.supporting_doc)
    formData.append("city",PersonalData.city)
    formData.append("sub_city",PersonalData.sub_city)
    formData.append("woreda",PersonalData.woreda)
    formData.append("job_id",PersonalData.job_id)
    const applicantData = {
      PersonalData:formData,
      educationalData,
      certificates,
    };
    try {
      const response = await apiCall.post("apply", applicantData);
      if (response.status === 200) {
        setStep(5);
      }
    } catch (err) {
      setErrors(prevErrors =>{
        return {...prevErrors,notify:"Sorry, Faild to send your application.try again"}
      });
    }
  };
  const nextHandler = ()=>{
    let errorValues = {}
    if(step === 1){
      errorValues= validatePersonalInfo(PersonalData)
      if(Object.values(errorValues).length === 0){
        setStep((step) => step + 1)
      }
      else{
        setErrors(errorValues)
      }
    }
    // else {
    //   setStep((step) => step + 1)
    // }
    setStep((step) => step + 1)
  }
  const getPage = () => {
    switch (step) {
      case 1:
        return <PersonalInfo data={PersonalData} setData={setPersonalData} errors={errors} setErrors={setErrors} />;
      case 2:
        return (
          <EducationalInfo
            data={educationalData}
            setData={setEducationalData}
          />
        );
      case 3:
        return <Certificates data={certificates} setData={setCertificates} />;
      case 4:
        return <Documents data={PersonalData} setData={setPersonalData} errors={errors} />;
      case 5:
        return (
          <div>
            You have added your information click submit button to finish your
            application
          </div>
        );

      default:
        return <div>Some thing went wrong</div>;
    }
  };

  return (
    <>
      {step < 5 && (
        <div>
          <div className="multi-step-progress p-3 px-md-0 pt-lg-5 ">
            <StepProgressBar step={step} />
          </div>
          <div className="vacancy-parent-wraper px-3 px-md-5 my-md-5 pt-lg-5 pb-5">
            {getPage()}
            <div className="d-flex justify-content-between mt-5">
              {step > 1 && (
                <button
                  onClick={() => setStep((step) => step - 1)}
                  className="back-btn px-5 py-2"
                >
                  Back
                </button>
              )}
              {step < 4 ? (
                <button
                  onClick={nextHandler}
                  className="next-btn px-5 py-2 ms-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submitApplication}
                  className="next-btn px-5 py-2 ms-auto"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="confirmation-message">
          <div className="border border-success rounded-3 p-3 p-5 fs-5 text-success">
            Your application is successfully completed, We will contact
            you.Thank you for applying
          </div>
        </div>
      )}
    </>
  );
};
export default VacancyApplication;
