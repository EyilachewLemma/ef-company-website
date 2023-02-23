import BackgroundImage from "../../components/BackgroundImage";
import { NavLink } from "react-router-dom";
// import SingleImageCarousel from "../../components/SingleImageCarousel";
import image from '../../assets/img10.jpg'
import styles from "./News.module.css";

const NewsDetail = () => {
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
              <img src={image} alt='blog_image' className="img-fluid" />
            </div>
            <div className="col-lg-4 ps-lg-5 d-none d-lg-block">
              <div className="fs-4 fw-bold mb-3 border-3 border-bottom">
                Categories
              </div>

              {array.map((el) => (
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <NavLink className={styles.navLink}>
                    Professional Design
                  </NavLink>
                  <NavLink
                    className={`${styles.navLink} border rounded-circle px-2  bg-light`}
                  >
                    {el}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <h4 className="mt-5">10 Mistakes To Avoid When Investing In Real Estate</h4>
          <p className="col-lg-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <p>
            Combined with a handful of model sentence structures, generate Lorem
            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
          <p>
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself,
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
export default NewsDetail;
