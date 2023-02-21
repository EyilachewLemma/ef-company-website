import BackgroundImage from "../../components/BackgroundImage";
import { NavLink } from "react-router-dom";
import SingleImageCarousel from "../../components/SingleImageCarousel";
import styles from "./Service.module.css";

const ServiceDetail = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <BackgroundImage
        title="Service"
        isDetail={true}
        longTitle="Building Architectural and Structural Design"
      />
      <div className="my-lg-5 px-3 px-lg-0 py-5">
        <div className="container">
        <div className="row">
            <div className="col-lg-8">
              <SingleImageCarousel />
            </div>
            <div className="col-lg-4 ps-lg-5 d-none d-lg-block">
              <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
                Services
              </div>

              {array.map((el) => (
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <NavLink className={styles.navLink}>Perfect planning</NavLink>
                  <NavLink
                    className={`${styles.navLink} border rounded-circle px-2  bg-light`}
                  >
                    {el}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <h4 className="mt-5">Perfect Planning</h4>
          <p className="col-lg-8">
            The recent disruption of the architecture industry due to
            coronavirus unleashed a spate of delays, project cancellations, and
            overwhelming uncertainty about the future of the industry. With 37%
            of firms experiencing cancellations, 80% dealing with unforeseen
            delays, and over half struggling with reduced cash flow, providing a
            high-quality end product to win — and keep — more customers is more
            crucial than ever. Adaptation is critical to survival and, in this
            case, architects must take greater care developing stunning drawings
            and presentations to win projects and perfect architectural plans
            that result in projects that run smoothly from start to finish. The
            Process for Perfect Architectural Plans and Stunning Presentations
            There are several stages to the architectural job process that begin
            with presentations to your clients and move through schematic
            design, design development, and construction drawings. Powerful
            Presentations: The Key to Winning More Work Your architectural
            drawings and/or presentation boards are the key to helping your
            clients imagine your design clearly. Like any good sales pitch, they
            serve to articulate your design and generate excitement and
            interest.
          </p>
          <div className="col-lg-4 ps-lg-5 d-lg-none mt-5">
          <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
            Services
          </div>

          {array.map((el) => (
            <div className="d-flex justify-content-between align-items-center mt-1">
              <NavLink className={styles.navLink}>Perfect planning</NavLink>
              <NavLink
                className={`${styles.navLink} border rounded-circle px-2  bg-light`}
              >
                {el}
              </NavLink>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};
export default ServiceDetail;
