import React from "react";

const Welcome = () => {
  return (
    <div class="welcome-area bg-color-4 fix area-padding-2">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div
                  class="well-services first-well wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t1.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Latest Technology</h4>
                      <p>
                        Immerse yourself in the forefront of innovation with our
                        platform powered by the latest technology. Stay ahead of
                        the curve as we integrate cutting-edge solutions to
                        enhance performance, security, and user experience.
                        Embrace the future of mining with our state-of-the-art
                        technological advancements.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="well-services second-well wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t2.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Certik Certified</h4>
                      <p>
                        Trust in the security and reliability of our services
                        with Certik Certification. Our platform has undergone
                        rigorous auditing and verification by Certik, a leading
                        blockchain security firm. Rest assured that your
                        transactions and data are protected by industry-best
                        practices, ensuring a secure and transparent experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div
                  class="well-services three-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t3.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Minning Plateform</h4>
                      <p>
                        Explore our cutting-edge mining platform designed to
                        streamline and optimize the extraction process. With
                        advanced technologies and intuitive interfaces, our
                        platform ensures efficient resource management and
                        enhanced productivity for mining operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="well-services four-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t4.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Metaverse Blockchain</h4>
                      <p>
                        {" "}
                        Step into the future of decentralized innovation with
                        our Metaverse Blockchain. Our platform leverages
                        blockchain technology to create a virtual,
                        interconnected universe where digital assets are
                        securely managed and transactions are transparent. Join
                        us on the forefront of the metaverse revolution, where
                        possibilities are limitless and decentralized ecosystems
                        thrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="well-service-text">
              <div class="top-text-title">Ultimate Metaverse</div>
              <h2 class="main-title">
                {" "}
                <span class="color-text-bold">Blockchain</span> provide you best
                services
              </h2>
              <p>
                Dive into the extraordinary realm of the Ultimate Metaverse. Our
                innovative blockchain solutions deliver unparalleled services,
                seamlessly merging cutting-edge technology with a commitment to
                excellence. Experience the future of secure and efficient
                transactions as we redefine possibilities in the digital
                landscape.
              </p>
              <a class="service-btn coin-btn" href="/">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
