import React from "react";

const About = () => {
  const features = [
    {
      title: "Decentralized System",
      description:
        "Explore the power of a decentralized system that redefines traditional approaches. Our platform leverages the strength of decentralization to provide innovative solutions, ensuring transparency, security, and efficiency in every transaction. Join us on the journey towards a more robust and resilient digital ecosystem.",
    },
    {
      title: "Blockchain Wallet",
      description:
        " Elevate your digital asset management with our state-of-the-art Blockchain Wallet. Experience the convenience and security of seamless transactions, coupled with cutting-edge blockchain technology. Our wallet ensures the safeguarding of your assets while providing an intuitive and user-friendly interface for effortless financial management.",
    },
    {
      title: "Web3 Project",
      description:
        "Join us in shaping the future with our Web3 Project. Embrace the decentralized web and experience a new era of transparency, privacy, and user empowerment. Our project leverages cutting-edge technologies to create a more inclusive and open internet, fostering innovation and collaboration in the digital landscape.",
    },
  ];
  return (
    <div class="about-area bg-color-3 fix area-padding">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="about-content">
              <div class="about-images wow fadeInLeft" data-wow-delay="0.7s">
                <img src="img/about/ab2.png" alt="" />
                <div class="rotmate-image rotateme">
                  <img src="img/about/circle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="about-all">
              <div class="about-inner">
                {features.map((feature, i) => (
                  <div
                    class="single-about wow fadeInUp"
                    data-wow-delay={`0.${i + 3}s`}
                  >
                    <span class="about-icon">0{i + 1}</span>
                    <div class="support-text">
                      <h4>
                        <a href="#">{feature.title}</a>
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
