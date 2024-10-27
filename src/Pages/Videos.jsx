import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

const Videos = () => {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    try {
      const response = await fetch('https://peter-backend.onrender.com/api/youtube/allurls');
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <Layout>
      <section
        style={{
          paddingTop: '150px',
          paddingBottom: '50px',
          background: "#3F497F",
          color: '#fff',
          textAlign: 'center', // Keep section title and description center aligned
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <h1 style={{ color: "#F7C04A", fontWeight: "bolder" }}>Videos</h1>
              <p style={{ fontWeight: "bold" }}>
                At WISE PL, we provide a comprehensive range of educational programs designed to support and enhance students' academic journey.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="videos-section" style={{ padding: "25px" }}>
        <MDBContainer>
          <MDBRow className="j">
            {urls.length > 0 ? (
              urls.map((url, index) => (
                <MDBCol key={index} md="6" className="mb-4 d-flex justify-content-center align-items-center">
                  <div style={{ borderRadius: '15px', overflow: 'hidden', maxWidth: '100%' }}>
                    <Plyr
                      source={{
                        type: 'video',
                        sources: [{ src: url.url.split("v=")[1], provider: 'youtube' }]
                      }}
                      options={{
                        controls: ['play-large', 'play', 'fullscreen', 'progress'], // Show only play buttons
                        autoplay: false, // Autoplay disabled by default
                        muted: false, // Enable sound
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'left', marginTop: '10px' }}>
                    <h4>Video Title: {url.title}</h4>
                    <p>Video Description: {url.description}</p>
                  </div>
                </MDBCol>
              ))
            ) : (
              <h2 className="text-center">Please wait...</h2>
            )}
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default Videos;
