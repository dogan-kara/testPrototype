import React from "react";
import styled from "styled-components";
import { Select, Tabs } from "antd";

const items = [
  {
    key: "1",
    label: `My Overview`,
  },
  {
    key: "2",
    label: `My Working Capital`,
  },
  {
    key: "3",
    label: `My Activity`,
  },
  {
    key: "4",
    label: `My Performance`,
  },
  {
    key: "5",
    label: `My Pricing & Billing`,
  },
];

const TabBar = () => {
  return (
    <StyledDiv>
      <Tabs size="small" defaultActiveKey="1" items={items} />
      <div className="teamSelector">
        <span>My Team:</span>
        <Select defaultValue="1" getPopupContainer={(p) => p.parentElement}>
          <Select.Option value="1">
            <img src="/avatar.png" alt="" />
            Janette Foster (Me)
          </Select.Option>
          <Select.Option value="2">
            <img src="/avatar.png" alt="" />
            Janette Foster 2
          </Select.Option>
          <Select.Option value="3">
            <img src="/avatar.png" alt="" />
            Janette Foster 3
          </Select.Option>
        </Select>
      </div>
    </StyledDiv>
  );
};

export default TabBar;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 24px;
  height: 30px;
  && .ant-tabs-tab {
    padding: 0;
  }
  && .ant-tabs {
    line-height: 32px;
    .ant-tabs-nav {
      border-bottom: 1px solid #d2d7da;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #1d3544;
    }
    .ant-tabs-tab-btn {
      margin-top: -4px;
      color: #1d354499;
    }
    .ant-tabs-tab + .ant-tabs-tab {
      margin-left: 25px;
    }
    .ant-tabs-ink-bar {
      bottom: 0px;
      height: 4px;
      background: #1d3544 !important;
    }
  }
  .teamSelector {
    display: flex;
    gap: 12px;
    & > span {
      padding-top: 3px;
    }
   .ant-select {
    margin-top: -6px;
    width: 215px;
    .ant-select-arrow {
        margin-top: -14px;
    }
    .ant-select-selection-item, .ant-select-item-option-content {
        display: flex;
        gap: 8px;
        align-items: center;
        img {
            width: 24px;
            height: 24px;
        }
    }
  }
`;
