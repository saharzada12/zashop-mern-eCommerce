import React from "react";
import styled from "styled-components";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";
import LanguageIcon from "@mui/icons-material/Language";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { mobile } from "../css/Responsive";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 25px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    rowGap: "20px",
    paddingLeft: "25px",
  })}
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  box-shadow: 0.75rem;
  border: 1px solid #ffffff;
  background-color: #3f4f68;
  border-radius: 15px;
  height: 450px;
  width: 350px;
  align-items: center;
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-15px);
  }
`;
const CardIcon = styled.div`
  width: 5rem;
  height: 2rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  color: #fcfcfc;
  background-color: rgba(254, 255, 255, 0.2);
`;
const CardHeader = styled.p`
  padding: 5px;
  font-size: 2.25rem;
  color: #fff;
`;
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const CardReason = styled.p`
  padding-left: 15px;
  flex: 1;
  color: #fff;
  font-weight: 400;
`;

const Card = () => {
  return (
    <>
      <Container>
        <InfoCard>
          <CardIcon>
            <AttachMoneyIcon large />
          </CardIcon>
          <CardHeader>Pricing</CardHeader>
          <CardTextContainer>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />

              <CardReason>Transparency in pricing</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Comparison with other businesses</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Convenient for customers.</CardReason>
            </CardText>
            <CardText></CardText>
            <CardText></CardText>
          </CardTextContainer>
        </InfoCard>
        <InfoCard>
          <CardIcon>
            <LanguageIcon large />
          </CardIcon>
          <CardHeader>Accessibility</CardHeader>
          <CardTextContainer>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />

              <CardReason>Increased reach and customer base</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Improved user experience</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Legal compliance.</CardReason>
            </CardText>
            <CardText></CardText>
            <CardText></CardText>
          </CardTextContainer>
        </InfoCard>
        <InfoCard>
          <CardIcon>
            <EventAvailableIcon large />
          </CardIcon>
          <CardHeader>Availability</CardHeader>
          <CardTextContainer>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />

              <CardReason>Transparency in pricing</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Comparison with other businesses</CardReason>
            </CardText>
            <CardText>
              <CheckIcon sx={{ color: "white" }} />
              <CardReason>Convenient for customers.</CardReason>
            </CardText>
            <CardText></CardText>
            <CardText></CardText>
          </CardTextContainer>
        </InfoCard>
      </Container>
    </>
  );
};

export default Card;
