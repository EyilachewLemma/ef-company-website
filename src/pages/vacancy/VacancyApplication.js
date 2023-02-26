// import { useEffect } from "react";
import { useState } from "react";
import StepProgressBar from "./ProgressBar";
import Certificates from "./Certificates";
import EducationalInfo from "./EducationalInfo";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Document";
// import apiCall from '../../url/index'
const VacancyApplication = () => {
  const [step, setStep] = useState(1);
  const [PersonalData,setPersonalData] = useState({firstName:'',middleName:'',lastName:'',birthDate:'',email:'',phoneNumber:'',city:'',subcity:',woreda:'})
  const [educationalData,setEducationalData] = useState([])
  const [certificates,setCertificates] = useState([])
  const [documents,setDocuments] = useState({})
  // const [error,setError] = useState('')

  const submitApplication = async() =>{
   const applicantData = {
    PersonalData,
    educationalData,
    certificates,
    documents
   }
   console.log('applicants data=',applicantData)
  //  try{
  //   const response = await apiCall.post('apply',applicantData)
  //   if(response.status === 200){
  //     setStep(5)
  //   }
  //  }
  //  catch(err){
  //   setError('Sorry, Faild to send your application.try again')
  //  }
    
  }

  const getPage = () => {
    switch (step) {
      case 1:
        return <PersonalInfo data={PersonalData} setData={setPersonalData}  />;
      case 2:
        return <EducationalInfo data={educationalData} setData={setEducationalData} />;
      case 3:
        return <Certificates data={certificates} setData={setCertificates} />;
      case 4:
        return <Documents data={documents} setData={setDocuments} />;
        case 5:
          return <div>You have added your information click submit button to finish your application</div>;

      default:
        return <div>Some thing went wrong</div>;
    }
  };

  return (
    <>
     {
      step < 5 && (
        <div>
        <div className="multi-step-progress p-3 px-md-0 pt-lg-5 ">
        <StepProgressBar step={step} />
      </div>
      <div className="vacancy-parent-wraper px-3 px-md-5 my-md-5 pt-lg-5 pb-5">
        {getPage()}
        <div className="d-flex justify-content-between mt-5">
          {step >1 && (
            <button
              onClick={() => setStep((step) => step - 1)}
              className="back-btn px-5 py-2"
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={() => setStep((step) => step + 1)}
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
  )
     }
     {
      step === 5 && (
        <div className="confirmation-message">
      <div className="border border-success rounded-3 p-3 p-5 fs-5 text-success">
      Your application is successfully completed,
      We will contact you.Thank you for applying
      </div>
        </div>
      )
     }
    </>
  );
};
export default VacancyApplication;
