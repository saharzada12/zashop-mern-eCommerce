import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "../css/whyUs.css";

const WhyUs = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
        <path
          fill="#686b83"
          fill-opacity="1"
          d="M0,128L34.3,149.3C68.6,171,137,213,206,208C274.3,203,343,149,411,117.3C480,85,549,75,617,96C685.7,117,754,171,823,186.7C891.4,203,960,181,1029,186.7C1097.1,192,1166,224,1234,208C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div id="whyUs">
        <div className="W-container">
          <div className="W-wrapper">
            <div className="W-left">
              <img
                size="big"
                src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="imgS"
              />
              <img
                position="middle"
                src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                size="small1"
                src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>

            <div className="W-right">
              <div className="right-sub">
                <h1>some reasons to choose us:</h1>
              </div>
              <div className="right-reasons">
                <p>
                  {" "}
                  <CheckIcon
                    sx={{
                      marginRight: "15px",
                    }}
                  />{" "}
                  OVER 30+ NEW PRODUCTS
                </p>
                <p>
                  {" "}
                  <CheckIcon
                    sx={{
                      marginRight: "15px",
                    }}
                  />
                  +500 SATISFIED MEMBERS
                </p>
                <p>
                  {" "}
                  <CheckIcon
                    sx={{
                      marginRight: "15px",
                    }}
                  />
                  BEST SHIPPING SYSTEM
                </p>
                <p>
                  {" "}
                  <CheckIcon
                    sx={{
                      marginRight: "15px",
                    }}
                  />
                  FREE SHIPPING OVER 50$
                </p>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L34.3,149.3C68.6,171,137,213,206,208C274.3,203,343,149,411,117.3C480,85,549,75,617,96C685.7,117,754,171,823,186.7C891.4,203,960,181,1029,186.7C1097.1,192,1166,224,1234,208C1302.9,192,1371,128,1406,96L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WhyUs;
