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
              autoPlay
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
              <div id="lll" className="proj-slide">
                <div className="content-image">
                  <img src="/proj11.png" alt="" />
                </div>
                <div className="content">
                  <h5>
                    Project: Pluralcode Academy Website & Student (LMS) <br />
                    Dashboard – Bridging the Global Tech Talent Gap
                  </h5>
                  <p>
                    As a full-time Product Designer at Pluralcode, I had the
                    responsibility of redesigning the company's website,
                    transforming it into what it is today. Pluralcode is on a
                    mission to bridge the global talent gap by building the
                    largest and most impactful tech talent incubator in Africa,
                    empowering individuals, organizations, and corporations
                    across the continent and beyond.
                  </p>
                  <p>
                    Beyond the main website, I also worked on the student
                    learning platform, ensuring a seamless, user-friendly
                    experience for learners. My focus was on enhancing
                    accessibility, usability, and engagement, creating an
                    intuitive platform that supports tech education at scale.
                  </p>
                  <p>
                    Through strategic UI/UX improvements, I helped improve
                    navigation, visual appeal, and overall functionality,
                    ensuring Pluralcode effectively showcases Africa’s growing
                    tech talent to the world.
                  </p>
                  <p>Check out the project here:</p>
                  <a
                    style={{
                      color: "rgba(239, 12, 255, 1)",
                      textDecoration: "none",
                    }}
                    href="https://www.pluralcode.academy/"
                  >
                    https://www.pluralcode.academy/
                  </a>
                </div>
              </div>

              {/* ✅ Project 2 */}
              <div className="proj-slide">
                <div className="content">
                  <h5>
                    Project: Sickle Cell Foundation Nigeria (SCFN) & LUTH – BMT{" "}
                    <br />
                    Programme Website
                  </h5>
                  <p>
                    I had the opportunity to design the website for the Sickle
                    Cell Foundation Nigeria (SCFN) & Lagos University Teaching
                    Hospital (LUTH) Bone Marrow Transplantation (BMT) Programme.
                    This initiative is dedicated to providing affordable,
                    high-quality, and life-saving treatment for sickle cell
                    disorder, making it accessible to Nigerians locally.
                  </p>
                  <p>
                    Nigeria has the highest burden of sickle cell disorder in
                    the world, with over 40 million carriers and 150,000 babies
                    born annually with the condition. Sadly, many do not survive
                    due to a lack of access to proper diagnosis and care. This
                    project was not just about design; it was about creating an
                    intuitive platform that connects patients with essential
                    treatment options.
                  </p>
                  <p>
                    My design approach prioritized clarity, accessibility, and
                    ease of navigation, ensuring that users could effortlessly
                    find information on BMT, eligibility, and healthcare
                    resources. By blending effective UI/UX principles, I helped
                    transform complex medical content into a seamless and
                    user-friendly digital experience.
                  </p>
                  <p>Check out the project here:</p>
                  <a
                    style={{
                      color: "rgba(239, 12, 255, 1)",
                      textDecoration: "none",
                    }}
                    href="https://scfn-luth-transplant.sicklecellfoundation.com/"
                  >
                    https://scfn-luth-transplant.sicklecellfoundation.com/
                  </a>
                </div>
                <div className="content-image">
                  <img src="/proj22.png" alt="" />
                </div>
              </div>

              {/* ✅ Project 3 */}
              <div id="lll" className="proj-slide">
                <div className="content-image">
                  <img className="m" src="/proj33.png" alt="" />
                </div>
                <div className="content">
                  <h5>Project: Pretty Health Care Website</h5>
                  <p>
                    At Rex Health Limited, I led the design of the website,
                    mobile app, and dashboards for doctors, labs, and
                    pharmacies, ensuring a seamless user experience.
                  </p>
                  <p>
                    Rex Health is a pioneering healthcare organization in
                    Nigeria, offering accessible, tech-driven medical solutions.
                    The Rex Health App caters to university students,
                    individuals, and organizations, providing quality healthcare
                    services.
                  </p>
                  <p>
                    My contributions: <br />
                     ✅Website & App – Intuitive platforms for booking
                    consultations, accessing records, and managing care.
                    <br />
                     ✅Doctor’s Dashboard – Efficient patient record and
                    appointment management. <br />
                     ✅Lab Dashboard – Simplified test requests and result
                    processing. <br />
                     ✅Pharmacy Dashboard – Streamlined prescription and stock{" "}
                    <br /> management. This redesign helped bridge healthcare
                    gaps and improve accessibility.
                  </p>
                  <p>Check out the project here:</p>
                  <a
                    style={{
                      color: "rgba(239, 12, 255, 1)",
                      textDecoration: "none",
                    }}
                    href="https://prettyhealthcare.com.ng/"
                  >
                    https://prettyhealthcare.com.ng/
                  </a>
                </div>
              </div>

              {/* ✅ Project 4 */}
              <div id="" className="proj-slide">
                <div className="content">
                  <h5>
                    Project: Sickle Cell Foundation Nigeria (SCFN) & LUTH – BMT
                    Programme Website
                  </h5>
                  <p>
                    I had the opportunity to design the website for the Sickle
                    Cell Foundation Nigeria (SCFN) & Lagos University Teaching
                    Hospital (LUTH) Bone Marrow Transplantation (BMT) Programme.
                    This initiative is dedicated to providing affordable,
                    high-quality, and life-saving treatment for sickle cell
                    disorder, making it accessible to Nigerians locally.
                  </p>
                  <p>
                    Nigeria has the highest burden of sickle cell disorder in
                    the world, with over 40 million carriers and 150,000 babies
                    born annually with the condition. Sadly, many do not survive
                    due to a lack of access to proper diagnosis and care. This
                    project was not just about design; it was about creating an
                    intuitive platform that connects patients with essential
                    treatment options.
                  </p>
                  <p>
                    My design approach prioritized clarity, accessibility, and
                    ease of navigation, ensuring that users could effortlessly
                    find information on BMT, eligibility, and healthcare
                    resources. By blending effective UI/UX principles, I helped
                    transform complex medical content into a seamless and
                    user-friendly digital experience.
                  </p>
                  <p>Check out the project here:</p>
                  <a
                    style={{
                      color: "rgba(239, 12, 255, 1)",
                      textDecoration: "none",
                    }}
                    href="https://scfn-luth-transplant.sicklecellfoundation.com/"
                  >
                    https://scfn-luth-transplant.sicklecellfoundation.com/
                  </a>
                </div>
                <div className="content-image">
                  <img src="/proj44.png" alt="" />
                </div>
              </div>
              <div id="lll" className="proj-slide">
                <div className="content-image">
                  <img src="/proj55.png" alt="" />
                </div>
                <div className="content">
                  <h5>
                    Project: Rex Health Website, Mobile Application & Dashboards
                    Design
                  </h5>
                  <p>
                    I had the opportunity to Design the Aacronic website, a
                    company at the forefront of Oil & Gas, Marine Logistics, and
                    Shipping. The objective was to create a sleek, functional,
                    and industry-relevant platform that showcases Aacronic’s
                    expertise and commitment to excellence.
                  </p>
                  <p>
                    My design approach prioritized clarity, usability, and a
                    seamless user experience, ensuring visitors can easily
                    access information on services, projects, and company
                    insights. With an optimized UI/UX framework, the website now
                    delivers a responsive, visually appealing, and efficient
                    interface that reflects Aacronic’s industry leadership.
                  </p>
                  <p>
                    This project not only elevated Aacronic’s digital identity
                    but also reinforced their credibility in providing
                    world-class logistics and energy solutions.
                  </p>
                  <p>Check out the project here:</p>
                  <a
                    style={{
                      color: "rgba(239, 12, 255, 1)",
                      textDecoration: "none",
                    }}
                    href="https://aaronic.com.ng/"
                  >
                    https://aaronic.com.ng/
                  </a>
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
