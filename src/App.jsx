import { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import Tiles from "./components/Tiles";
import Charts from "./components/Charts";
import Table from "./components/Table";

function App() {
  return (
    <StyledApp>
      <SideBar />
      <div className="content">
        <Header />
        <TabBar />
        <Tiles />
        <Charts />
        <Table />
      </div>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;

  /*  */
  /* height: 900px; */
  /*  */

  display: grid;
  grid-template-columns: 240px 1fr;
  /* grid-template-rows: 1fr; */
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
