import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SkillsOrbit.css";
import SkillsOrbit from "../components/SkillsOrbit";
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
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="row">
      <div className="col-lg-1"></div>

      <div className="col-lg-10">
        <div id="about" className="row">
          {/* 🟢 Left Column - Certificates */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="mdmdmd" style={{ marginTop: "5rem" }}>
              <div>
                <img
                  className="mycert-mage"
                  src="/mycert.png"
                  alt="certificate"
                />
              </div>
              <div>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
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
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          style={{
                            width: "300px",
                            margin: "auto",
                          }}
                          src={`/${cert}.png`}
                          alt={`certificate-${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          <SkillsOrbit />
            </div>
          </div>

          {/* 🟢 Middle Column - Hover Image */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="mmeee"
              style={{ marginLeft: "40px", marginTop: "11rem" }}
            >
              <div>
                <img
                  style={{
                    width: "100%",
                    transition: "width 0.3s ease-in-out",
                  }}
                  src={isMobile || isHovered ? "/yus2.png" : "/yus1.png"}
                  alt="profile"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <img
                  style={{ width: "100px" }}
                  src="/myselfmage.png"
                  alt="self"
                />
              </div>
              <div>
                <img
                  className="ddmms"
                  style={{ marginLeft: "140px", marginTop: "40px" }}
                  src="/arrow-down.png"
                  alt="arrow down"
                />
              </div>
            </div>
          </div>

          {/* 🟢 Right Column - Education Info */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <img
              className="qualiii"
              style={{
                width: "70%",
                marginTop: "6rem",
                marginLeft: "-150px",
                paddingBottom: "20px",
              }}
              src="/qualimage.png"
              alt="qualification"
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
                Islamiyyat Model Secondary School, Kogi State <br /> 2014–2017
              </h5>

              <h1 style={{ fontSize: "30px", textDecoration: "underline" }}>
                Secondary School Certification
              </h1>
              <h5>
                United Community Grammar School, Kwara State <br /> 2011–2014
              </h5>

              <h1 style={{ fontSize: "30px", textDecoration: "underline" }}>
                Primary School Certification
              </h1>
              <h5>
                Center Igboro Nursery & Primary School, Kwara State <br />{" "}
                2002–2011
              </h5>

              <div style={{ marginTop: "3rem" }}>
                <img src="/Hobby.png" alt="hobby" />
              </div>
            </div>
            
          </div>


          {/* 🟢 Carousel - Projects */}
          <div id="projects" style={{ marginTop: "5rem" }}>
            <Carousel
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              swipeable={true}
              emulateTouch={true}
              transitionTime={600}
              stopOnHover={false}
            >
              {/* ✅ Project 1 */}
              <div className="proj-slide">
                <div
                  className="proj-content"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    className="proj-image"
                    src="/proj11.png"
                    alt="Pluralcode Project"
                    style={{ borderRadius: "8px" }}
                  />
                  <div style={{ color: "#FFF", textAlign: "left", flex: 1 }}>
                    <h5
                      style={{
                        fontSize: "20px",
                        marginTop: "20px",
                        lineHeight: "22px",
                      }}
                    >
                      Project: Pluralcode Academy Website & Student ( LMS){" "}
                      <br /> Dashboard – Bridging the Global Tech Talent Gap
                    </h5>
                    <p style={{ fontSize: "13px", fontWeight: "200" }}>
                      As a full-time Product Designer at Pluralcode, I had the
                      responsibility <br /> of redesigning the company's
                      website, transforming it into what it is <br /> today.
                      Pluralcode is on a mission to bridge the global talent gap
                      by <br /> building the largest and most impactful tech
                      talent incubator in <br /> Africa, empowering individuals,
                      organizations, and corporations <br /> across the
                      continent and beyond.
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "200" }}>
                      Beyond the main website, I also worked on the student
                      learning <br /> platform, ensuring a seamless,
                      user-friendly experience for learners. <br /> My focus was
                      on enhancing accessibility, usability, and <br />{" "}
                      engagement, creating an intuitive platform that supports
                      tech <br /> education at scale.
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "200" }}>
                      Through strategic UI/UX improvements, I helped improve{" "}
                      <br /> navigation, visual appeal, and overall
                      functionality, ensuring <br /> Pluralcode effectively
                      showcases Africa’s growing tech talent to the <br />{" "}
                      world.
                    </p>
                    <p style={{ fontSize: "13px", fontWeight: "200" }}>
                      Check out the project:
                    </p>
                    <a
                      href="https://www.pluralcode.academy/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#7D8CFF" }}
                    >
                      https://www.pluralcode.academy/
                    </a>
                  </div>
                </div>
              </div>

              {/* ✅ Project 2 */}
              <div className="proj-slide">
                <div
                  className="proj-content"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ color: "#FFF", textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "14px", marginTop: "20px" }}>
                      PROJECT: SICKLE CELL FOUNDATION NIGERIA (SCFN) & LUTH –
                      BMT PROGRAMME WEBSITE
                    </h5>
                    <p style={{ fontSize: "13px" }}>
                      Designed an intuitive website for SCFN & LUTH BMT
                      Programme to make life-saving treatment for sickle cell
                      disorder more accessible. Focused on clarity,
                      accessibility, and easy navigation.
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
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>

              {/* ✅ Project 3 */}
              <div className="proj-slide">
                <div
                  className="proj-content"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    className="proj-image"
                    src="/proj33.png"
                    alt="Real Estate Project"
                    style={{ borderRadius: "8px" }}
                  />
                  <div style={{ color: "#FFF", textAlign: "left", flex: 1 }}>
                    <h5 style={{ fontSize: "14px", marginTop: "20px" }}>
                      PROJECT: REAL ESTATE PROPERTY LISTING PLATFORM
                    </h5>
                    <p style={{ fontSize: "13px" }}>
                      Led the design for a real estate platform and mobile app,
                      developing intuitive dashboards for doctors, labs, and
                      pharmacies. Improved accessibility and simplified user
                      experience.
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

      <div className="col-lg-1"></div>
    </div>
  );
};

export default Details;
