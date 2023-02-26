import BackgroundImage from "../../components/BackgroundImage";
import ContactForm from "./ContactForm";
import {SlLocationPin} from 'react-icons/sl'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
const Contact = () => {
  return (
    <>
      <BackgroundImage title={"Contact"} isDetail={false} longTitle='' />
      <div className="bg-white px-3 px-lg-0 py-5">
        <div className="container px-lg-5">
        <div className="mt-md-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                <p className="card-text d-flex justify-content-center">
                <span className="bg-light rounded-circle fs-1 text-warning px-4 py-3"><SlLocationPin /></span>
                </p>
                <p className="text-center fs-3 fw-bold">Address</p>
                  <p class="card-text my-3 my-lg-4 px-3">
                  Lamberet Lame Dairy (Shola Milk) Building first floors #108. Yeka, Addis Ababa, Ethiopia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div class="card-body">
                <p className="card-text d-flex justify-content-center">
                <span className="bg-light rounded-circle fs-1 text-warning px-4 py-3"><HiOutlineMail /></span>
                </p>
                <p className="text-center fs-3 fw-bold">Email Us</p>
                  <p class="card-text text-center">
                  efheadoffice1@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div class="card-body">
                <p className="card-text d-flex justify-content-center">
                <span className="bg-light rounded-circle fs-1 text-warning px-4 py-3"><FiPhoneCall /></span>
                </p>
                <p className="text-center fs-3 fw-bold">Call Us</p>
                  <p class="card-text text-center">
                  +251 116 677479<br />
                  +251 911 240283
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="mt-md-5">
       <h1 className="text-center">Have any Question?</h1>
       <p className="text-center">Lets Discus it.</p>
      </div>
      <ContactForm />
      <div className="mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.2319720593157!2d38.814378!3d9.0213724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853e8dd37d0f%3A0xf28d4dea222fa390!2sEF%20architect%20and%20engineeering%20consulting%20plc!5e0!3m2!1sen!2suk!4v1676978160665!5m2!1sen!2suk" title="address on map" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};
export default Contact;
