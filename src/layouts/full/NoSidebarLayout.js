import React from "react";
import { styled, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderLoggedOut from "./header/HeaderLoggedOut";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

const NoSidebarLayout = () => {
  return (
    <MainWrapper className="mainwrapper">
      <PageWrapper className="page-wrapper">
        <HeaderLoggedOut />
        <Container
          sx={{
            paddingTop: "20px",
            maxWidth: "1200px",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default NoSidebarLayout;