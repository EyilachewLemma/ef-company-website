import { useNavigate } from "react-router-dom";
const ActiveVacancy = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 px-lg-5 py-5 mb-lg-5">
    <h3 className="text-center py-3">Currently Opened Vacancies at EF Engineering and Consalting Organization</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body p-3">
              <div className="d-flex">
                <span className="fw-bold">Job Title : </span>
                <span className="ms-2">Interior Designer</span>
              </div>
              <div className="d-flex mt-2">
                <span className="fw-bold">Job Type : </span>
                <span className="ms-2">Contractual</span>
              </div>
              <div className="d-flex mt-2">
                <span className="fw-bold">Application deadline : </span>
                <span className="ms-2">2-23-2023</span>
              </div>
              <button
                onClick={() => navigate(`/vacancy/${1}`)}
                className="next-btn px-4 py-1 mt-3"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card h-100">
          <div className="card-body p-3">
            <div className="d-flex">
              <span className="fw-bold">Job Title : </span>
              <span className="ms-2">Road Constraction</span>
            </div>
            <div className="d-flex mt-2">
              <span className="fw-bold">Job Type : </span>
              <span className="ms-2">Contractual</span>
            </div>
            <div className="d-flex mt-2">
              <span className="fw-bold">Application deadline : </span>
              <span className="ms-2">2-23-2023</span>
            </div>
            <button
              onClick={() => navigate(`/vacancy/${1}`)}
              className="next-btn px-4 py-1 mt-3"
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body p-3">
            <div className="d-flex">
              <span className="fw-bold">Job Title : </span>
              <span className="ms-2">Graphics Designer</span>
            </div>
            <div className="d-flex mt-2">
              <span className="fw-bold">Job Type : </span>
              <span className="ms-2">Permanent</span>
            </div>
            <div className="d-flex mt-2">
              <span className="fw-bold">Application deadline : </span>
              <span className="ms-2">2-23-2023</span>
            </div>
            <button
              onClick={() => navigate(`/vacancy/${1}`)}
              className="next-btn px-4 py-1 mt-3"
            >
              View Detail
            </button>
          </div>
            </div>
        </div>
        <div className="col">
          <div className="card h-100">
           <div className="card-body p-3">
           <div className="d-flex">
           <span className="fw-bold">Job Title : </span>
           <span className="ms-2">Graphics Designer</span>
         </div>
         <div className="d-flex mt-2">
           <span className="fw-bold">Job Type : </span>
           <span className="ms-2">par time job</span>
         </div>
         <div className="d-flex mt-2">
           <span className="fw-bold">Application deadline : </span>
           <span className="ms-2">2-23-2023</span>
         </div>
         <button
           onClick={() => navigate(`/vacancy/${1}`)}
           className="next-btn px-4 py-1 mt-3"
         >
           View Detail
         </button>
           </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
           <div className="card-body p-3">
           <div className="d-flex">
           <span className="fw-bold">Job Title : </span>
           <span className="ms-2">Graphics Designer</span>
         </div>
         <div className="d-flex mt-2">
           <span className="fw-bold">Job Type : </span>
           <span className="ms-2">full time remot</span>
         </div>
         <div className="d-flex mt-2">
           <span className="fw-bold">Application deadline : </span>
           <span className="ms-2">2-23-2023</span>
         </div>
         <button
           onClick={() => navigate(`/vacancy/${1}`)}
           className="next-btn px-4 py-1 mt-3"
         >
           View Detail
         </button>
           </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <div className="card-body">
          <div className="d-flex">
          <span className="fw-bold">Job Title : </span>
          <span className="ms-2">Interior Designer</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Job Type : </span>
          <span className="ms-2">Contractual</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Application deadline : </span>
          <span className="ms-2">2-23-2023</span>
        </div>
        <button
          onClick={() => navigate(`/vacancy/${1}`)}
          className="next-btn px-4 py-1 mt-3"
        >
          View Detail
        </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActiveVacancy;
