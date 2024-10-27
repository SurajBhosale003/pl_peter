import { useState, useEffect } from "react";
import styled from "styled-components";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  const [visible, setvisible] = useState(false);

  const GoToTopButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const hiddenOnHeight = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hiddenOnHeight) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      <Wrapper>
        {visible && (
          <>
           
            <Link
              to="https://wa.me/6589456089?text=Hello%2C%20I%20would%20like%20to%20chat%20about%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsAppButton"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsAppIcon"
              />
            </Link>
          </>
        )}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .topButton {
    font-size: 1.2rem; /* Reduced size */
    width: 3rem; /* Reduced size */
    height: 3rem; /* Reduced size */
    color: #fff;
    background-color: #0075b0;

    border-radius: 50%;
    position: fixed;
    bottom: 4rem; /* Adjusted position */
    right: 2rem; /* Adjusted position */
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .topButtonIcon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.2rem);
      }
      100% {
        transform: translateY(0.5rem);
      }
    }
  }

  .whatsAppButton {
    font-size: 5rem; /* Adjust as needed */
    width: 5.5rem; /* Size of WhatsApp button */
    height: 5.5rem; /* Size of WhatsApp button */
    color: #fff;
    background-color: #25d366; /* WhatsApp green color */
    border-radius: 50%;
    position: fixed;
    bottom: 7rem; /* Position above the top button */
    right: 4.7rem; /* Position above the top button */
    z-index: 998; /* Ensures WhatsApp button is below the top button */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none; /* Removes underline from link */

    .whatsAppIcon {
      width: 3.0rem; /* Adjust size of the image inside the button */
      height: 3.0rem; /* Adjust size of the image inside the button */
    }
  }
`;

export default Whatsapp;