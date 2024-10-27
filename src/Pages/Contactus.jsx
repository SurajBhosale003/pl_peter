import React from 'react';
import Layout from '../Components/Layout/Layout';

const Contactus = () => {
  const socialIconStyle = {
    fontSize: '25px',
    marginRight: '0.5rem',
    color: '#fff',
  };

  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  };

  return (
    <Layout>
      <div id="wrapper">
        {/* Page Title Section */}
        <section className="section db p120" style={{ padding: '180px 0', backgroundColor:"#3F497F" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tagline-message page-title text-center">
                  <h3>Get In Touch</h3>
                  <ul className="breadcrumb">
                    <li><a href="#" style={{ color: "#F7C04A" }}>WisePl</a></li>
                    <li className="active">Get in touch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section gb nopadtop" style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="boxed boxedp4">
              <div className="row contactv2 text-center">
                {/* Contact Info */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-email wow fadeIn" style={{ color: "#F7C04A" }} />
                    <h4>Contact us today</h4>
                    <p><a href="tel:+6589456089">+65-8945 6089</a></p>
                    <p><a href="tel:+6562727061">+65-6272 7061</a></p>
                    <p><a href="mailto:PLEDUCATIONCENTRE@YAHOO.COM">pleducationcentere@yahoo.com</a></p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-map-with-position-marker wow fadeIn" style={{ color: "#F7C04A" }} />
                    <h4>Visit Our Office</h4>
                    <h4>Block 121, Bukit Merah Lane 1 </h4>
                    <h4>#01-12, Singapore 150121</h4>
                  </div>
                </div>

                {/* Social Links */}
                <div className="col-md-4">
                  <div className="small-box">
                    <i className="flaticon-share wow fadeIn" style={{ color: "#F7C04A" }} />
                    <h4>Follow Us</h4>
                    <div style={socialContainerStyle}>
                      
                      <a href="https://www.facebook.com/profile.php?id=61566907154004" style={socialIconStyle} aria-label="WhatsApp">
                        <i style={{fontSize:"25px", color:"#000"}} className="fab fa-facebook" />
                      </a>
                      <a href="https://wa.me/6589456089" style={socialIconStyle} aria-label="WhatsApp">
                        <i style={{fontSize:"25px", border:'none', color:"#000"}} className="fab fa-whatsapp" />
                      </a>
                      <a href="https://www.instagram.com/petersp.lim/?igsh=MTlveHhuYWt0czg5Yg%3D%3D" style={socialIconStyle} aria-label="Instagram">
                        <i style={{fontSize:"25px",color:"#000"}} className="fab fa-instagram" />
                      </a>
                      <a href="https://www.tiktok.com/@sgscienceguru?_t=8qc8tHupVfM&_r=1" style={socialIconStyle} aria-label="TikTok">
                        <i style={{fontSize:"25px", color:"#000"}} className="fab fa-tiktok" />
                      </a>
                      <a href="https://youtube.com/@petersplim?si=BOl0c-jtyp27qIEM" style={socialIconStyle} aria-label="YouTube">
                        <i style={{fontSize:"25px", color:"#000"}} className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div style={{ width: '100%' }}>
                <iframe
                  width="100%"
                  height={600}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=121%20Bukit%20Merah%20View,%20Singapore%20151121+(wisePl)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contactus;
