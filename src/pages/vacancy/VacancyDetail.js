import { useNavigate,useParams } from "react-router-dom";
const VacancyDetail = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  return (
    <div className="vacancy-detail">
    <div className="vacancy-wrapeer">
    <div className="p-3 p-lg-5 container">
      <div className="border rounded-3 px-3 px-lg-4 pt-3 pb-5 bg-white">
      <div className="fs-5 p-2 fw-bold">Read the job description here carefully before applying</div>
        <div className="d-flex">
          <span className="fw-bold">Jop Title : </span>
          <span className="ms-2">full time senior graphics designer</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Jop Type : </span>
          <span className="ms-2">Permanent</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Sex : </span>
          <span className="ms-2">Both</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Required Number : </span>
          <span className="ms-2">10</span>
        </div>
        <div className="d-flex mt-2">
          <span className="fw-bold">Application deadline : </span>
          <span className="ms-2">2-23-2023</span>
        </div>
        <div className="fs-5 fw-bold pt-3">Job Description</div>
        <p className="fs-5">
          We are looking for a senior graphic designer to create
          and manage digital and print designs for our marketing needs. The
          senior graphic designer's responsibilities include managing all
          graphic design tasks, refining projects and drafts, and generating
          creative ideas. To be successful as a senior graphic designer, you
          should have extensive knowledge of graphic design, styles, and
          techniques. You should also have experience in implementing marketing
          campaigns. Ultimately, an excellent senior graphic designer will
          ensure that the design team promotes the vision of the company through
          high-quality graphic content. Senior Graphic Designer
          Responsibilities: Designing graphic content, illustrations, and
          info-graphics. Managing graphic designs from conception to delivery.
          Reviewing junior designer drafts to ensure quality. Generating fresh
          concepts. Ensuring brand consistency throughout various marketing
          projects. Liaising between the marketing and design teams to ensure
          deadlines are met. Keeping up-to-date with industry developments.
          Senior Graphic Designer Requirements: A graphic design qualification
          or similar. Portfolio with design projects. Proven work experience as
          a graphic designer. Working experience with image design tools (e.g.
          Photoshop and Adobe Illustrator). A keen eye for visual details.
          Aesthetic skills. Ability to meet deadlines and collaborate with team
          members. salary - negotiable
        </p>
        <div className="fs-5 fw-bold">
          If you are Qualified and Interested click the button below to apply
          for this job.
        </div>
        <button
          onClick={() => navigate(`/application/${id}`)}
          className="next-btn px-4 py-1 mt-3"
        >
          Apply Here
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};
export default VacancyDetail;
