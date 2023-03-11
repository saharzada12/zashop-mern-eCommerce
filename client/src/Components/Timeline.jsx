import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styled from "styled-components";

const Header = styled.h1`
  padding-top: 150px;
  box-sizing: border-box;
  text-align: center;
  color: #ffff;
`;

const SubHeader = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #24262b;
  text-align: center;
  padding-bottom: 15px;
`;
const Container = styled.div`
  background-color: #686b83;
`;

const TimeLine = () => {
  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#686b83"
            fill-opacity="1"
            d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container>
        <Header>Get started in 30 seconds</Header>
        <SubHeader>
          Even if you have the most loyal customers ever, they’ll still want to
          know how things are going and for new users how to start.
        </SubHeader>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <AccountCircleIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                1. Create An Account
              </Typography>
              <Typography>
                Once you create an account, you can then explore our platform
                functionalities and make your first purchase.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <CheckroomIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                2. Pick Your Desired Clothes
              </Typography>
              <Typography>
                After you create an account you will need to choose item to
                purchase later on your journey in our website
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <ShoppingCartCheckoutIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                3. Click Check Out
              </Typography>
              <Typography>
                After you pick your desired Cart you will need to checkout and
                process your payments
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                4. Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Container>
    </>
  );
};

export default TimeLine;
