import React from "react";
import Footer from "../Components/Footer";
import BootstrapNav from "../Components/BoostrapNav";
import BasicTable from "./components/AdminTable";
import AdminHeader from "./components/AdminHeader";
import SimpleAccordion from "./components/AdminAccordion";
import styled from "styled-components";

const MarginDiv = styled.div`
  margin: 50px 5px 75px 5px;
`;

const FooterDiv = styled.div`
  margin-top: 500px;
`;

//  PAGE FOR ADMINS ONLY
const Dashboard = () => {
  return (
    <div>
      <BootstrapNav />
      <AdminHeader />
      <MarginDiv>
        <SimpleAccordion />
      </MarginDiv>
      <BasicTable />
      <FooterDiv>
        <Footer />
      </FooterDiv>
    </div>
  );
};

export default Dashboard;
