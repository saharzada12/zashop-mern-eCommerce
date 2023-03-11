import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";
import { mobile } from "../css/Responsive";

const Container = styled.div`
  display: flex;
  background-color: #686b83;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LinkTo = styled.a`
  text-decoration: none;
  font-size: 38px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const MiniLink = styled.a`
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const LinkToSocials = styled.a`
  text-decoration: none;
  color: #ffff;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <LinkTo href="/">ZaShop.</LinkTo>
        <Desc>
          ZaShop is a modern and trendy clothing store with a wide selection of
          stylish and affordable clothing for men and women. They also have a
          variety of accessories such as jewelry, handbags, and shoes. The store
          features a modern layout and friendly staff to help customers with
          their purchase. Perfect for fashion-conscious shoppers looking for the
          latest trends at great prices.
        </Desc>
        <SocialContainer>
          <SocialIcon color="E4405F">
            <LinkToSocials
              href="https://www.instagram.com/sahar.zada/"
              target={"_blank"}
            >
              <InstagramIcon />
            </LinkToSocials>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkToSocials
              href="https://www.linkedin.com/in/sahar-zada-57b02621a/"
              target={"_blank"}
            >
              <LinkedInIcon />
            </LinkToSocials>
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkToSocials href="https://twitter.com/explore" target={"_blank"}>
              <TwitterIcon />
            </LinkToSocials>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <MiniLink href="/">Home</MiniLink>
          </ListItem>
          <ListItem>
            <MiniLink href="/Cart">Cart</MiniLink>
          </ListItem>
          <ListItem>
            <MiniLink href="/products/men's clothing"> Man Fashion</MiniLink>
          </ListItem>
          <ListItem>
            <MiniLink href="/products/women's clothing">Woman Fashion</MiniLink>
          </ListItem>
          <ListItem>
            <MiniLink href="/products/jackets and jeans">
              jackets and coats
            </MiniLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> Tel aviv
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> saharzada7@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
