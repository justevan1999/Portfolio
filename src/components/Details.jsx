import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Navigation, Autoplay } from "swiper/modules";

const Details = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // on mount
    window.addEventListener("resize", checkMobile); // on resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
      <div className="col-sm-12 col-md-12 col-lg-10">
        <div id="about" className="row">
          {/* Left Column - Certificates */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="mdmdmd" style={{ marginTop: "5rem" }}>
              <div>
                <img className="mycert-mage" src="/mycert.png" alt="" />
              </div>
              <div>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className="mySwiper"
                >
                  {[
                    "cert11",
                    "cert22",
                    "cert33",
                    "cert44",
                    "cert55",
                    "cert66",
                    "cert77",
                    "cert88",
                  ].map((cert, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <img
                          style={{
                            width: "300px",
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          src={`/${cert}.png`}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Middle Column - Image with Hover */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div
              className="mmeee"
              style={{ marginLeft: "40px", marginTop: "11rem" }}
            >
              <div>
                <img
                  style={{ width: "95%", transition: "width 10s ease-in-out" }}
                  src={isMobile || isHovered ? "/yus2.png" : "/yus1.png"}
                  alt="profile"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <img style={{ width: "100px" }} src="/myselfmage.png" alt="" />
              </div>
              <div>
                <img
                  className="ddmms"
                  style={{ marginLeft: "140px", marginTop: "40px" }}
                  src="/arrow-down.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right Column - Education Info */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <img
              className="qualiii"
              style={{
                width: "70%",
                marginTop: "6rem",
                marginLeft: "-150px",
                paddingBottom: "20px",
              }}
              src="/qualimage.png"
              alt=""
            />
            <div
              className="achieve"
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontWeight: "400",
              }}
            >
              <h1 style={{ fontSize: "30px", textDecoration: "underline" }}>
                Higher Secondary Certification
              </h1>
              <h5>
                Islamiyyat Model Secondary School, Kogi State <br /> 2014-2017
              </h5>

              <h1 style={{ fontSize: "30px", textDecoration: "underline" }}>
                Secondary School Certification
              </h1>
              <h5>
                United community Grammar School, Kwara State <br />
                2011-2014
              </h5>

              <h1 style={{ fontSize: "30px", textDecoration: "underline" }}>
                Primary School Certification
              </h1>
              <h5>
                Center Igboro Nursery & Primary School, Kwara <br />
                2002-2011
              </h5>
              <div style={{ marginTop: "3rem" }}>
                <img src="/Hobby.png" alt="" />
              </div>
            </div>
          </div>

          {/* Carousel - Projects */}
           <div id="projects">
      <Carousel
        // autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}
        transitionTime={600}
        stopOnHover={false} // pause on hover (optional)
      >
        {/* ✅ Project 1 */}
        <div className="proj-slide">
          <div className="proj-content" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <img
              className="proj-image"
              src="/proj11.png"
              alt="Pluralcode Project"
              style={{ width: "50%", borderRadius: "8px" }}
            />
            <div style={{ color: "#FFF", textAlign: "left", width: "50%" }}>
              <h5 style={{ fontSize: "20px", marginTop: "20px", lineHeight: "22px" }}>
                Project: Pluralcode Academy Website & Student ( LMS) <br /> Dashboard  – Bridging the Global Tech Talent Gap
              </h5>
              <p style={{ fontSize: "13px" }}>
                As a full-time Product Designer at Pluralcode, I had the responsibility <br /> of redesigning the company's website, transforming it into what it is <br /> today. Pluralcode is on a mission to bridge the global talent gap <br /> by building the largest and most impactful tech talent incubator in <br /> Africa, empowering individuals, organizations, and corporations <br /> across the continent and beyond.
              </p>
              <p style={{ fontSize: "13px" }}>
                Beyond the main website, I also worked on the student learning <br /> platform, ensuring a seamless, user-friendly experience for learners. <br /> My focus was on enhancing accessibility, usability, and <br /> engagement, creating an intuitive platform that supports tech <br /> education at scale.
              </p>
              <p style={{ fontSize: "13px" }}>
                Through strategic UI/UX improvements, I helped improve <br /> navigation, visual appeal, and overall functionality, ensuring <br /> Pluralcode effectively showcases Africa’s growing tech talent to the <br /> world.
              </p>
              <p style={{ fontSize: "13px" }}>Check out the project:</p>
              <a
                href="https://www.pluralcode.academy/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00bfff" }}
              >
                https://www.pluralcode.academy/
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Project 2 */}
        <div className="proj-slide">
          <div className="proj-content" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ color: "#FFF", textAlign: "left", width: "50%" }}>
              <h5 style={{ fontSize: "14px", marginTop: "20px" }}>
                PROJECT: SICKLE CELL FOUNDATION NIGERIA (SCFN) & LUTH – BMT PROGRAMME WEBSITE
              </h5>
              <p style={{ fontSize: "13px" }}>
                I had the opportunity to design the website for the Sickle Cell Foundation Nigeria (SCFN) & Lagos University Teaching Hospital (LUTH) Bone Marrow Transplantation (BMT) Programme. This initiative is dedicated to providing affordable, high-quality, and life-saving treatment for sickle cell disorder, making it accessible to Nigerians locally.
              </p>
              <p style={{ fontSize: "13px" }}>
                Nigeria has the highest burden of sickle cell disorder in the world, with over 40 million carriers and 150,000 babies born annually with the condition. Sadly, many do not survive due to a lack of access to proper diagnosis and care. This project was not just about design; it was about creating an intuitive platform that connects patients with essential treatment options.
              </p>
              <p style={{ fontSize: "13px" }}>
                My design approach prioritized clarity, accessibility, and ease of navigation, ensuring that users could effortlessly find information on BMT, eligibility, and healthcare resources. By blending effective UI/UX principles, I helped transform complex medical content into a seamless and user-friendly digital experience.
              </p>
              <p style={{ fontSize: "13px" }}>Check out the project:</p>
              <a
                href="https://scfn-luth-transplant.sicklecellfoundation.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00bfff" }}
              >
                https://scfn-luth-transplant.sicklecellfoundation.com/
              </a>
            </div>
            <img
              className="proj-image"
              src="/proj22.png"
              alt="SCFN Project"
              style={{ width: "50%", borderRadius: "8px" }}
            />
          </div>
        </div>

        {/* ✅ Project 3 (newly added) */}
        <div className="proj-slide">
          <div className="proj-content" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <img
              className="proj-image"
              src="/proj33.png"
              alt="Real Estate Project"
              style={{ width: "50%", borderRadius: "8px" }}
            />
            <div style={{ color: "#FFF", textAlign: "left", width: "50%" }}>
              <h5 style={{ fontSize: "14px", marginTop: "20px" }}>
                PROJECT: REAL ESTATE PROPERTY LISTING PLATFORM
              </h5>
              <p style={{ fontSize: "13px" }}>
                At Rex Health Limited, I led the design of the website, mobile app, and dashboards for doctors, labs, and pharmacies, ensuring a seamless user experience.
              </p>
              <p style={{ fontSize: "13px" }}>
                Rex Health is a pioneering healthcare organization in Nigeria, offering accessible, tech-driven medical solutions. The Rex Health App caters to university students, individuals, and organizations, providing quality healthcare services.
              </p>
              <p style={{ fontSize: "13px" }}>
                My Contributions:
                <div style={{display: "flex"}}>
                  <div>✅</div>
                  <div><span>Website & App – Intuitive platforms for booking consultations, <br /> accessing records, and managing care.</span></div>
                </div>
                <div style={{display: "flex"}}>
                  <div>✅</div>
                  <div><span>Doctor’s Dashboard – Efficient patient record and appointment <br /> management.</span></div>
                </div>
                <div style={{display: "flex"}}>
                  <div>✅</div>
                  <div><span>Lab Dashboard – Simplified test requests and result processing.</span></div>
                </div>
                <div style={{display: "flex"}}>
                  <div>✅</div>
                  <div><span>Pharmacy Dashboard – Streamlined prescription and stock <br /> management.</span></div>
                </div>
                <div>
                  <span>This redesign helped bridge healthcare gaps and improve <br /> accessibility.</span>
                </div>
              </p>
              <p style={{ fontSize: "13px" }}>Check out the project:</p>
              <a
                href="https://your-realestate-demo-link.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#00bfff" }}
              >
                https://your-realestate-demo-link.com/
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
    </div>
  );
};

export default Details;
