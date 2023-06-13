import React from "react";
import styled from "styled-components";
import { ReactComponent as MattersIcon } from "assets/icons/matters.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";

import { Button, Input, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: "Filter 1",
  },
  {
    key: "2",
    label: "Filter 2",
    // disabled: true,
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <div className="title">
        <div className="sup">My Portfolio</div>
        <div className="pageTitle">
          <MattersIcon />
          <span>My Working Capital</span>
        </div>
        <div className="sub">
          <div>
            <span className="label">Partner:</span>
            <span>Jeanette Foster</span>
          </div>
          <span className="sep">•</span>
          <div>
            <span className="label">Date:</span>
            <span>April 28, 2023 (Week 32)</span>
          </div>
        </div>
      </div>
      <Space.Compact className="search">
        <Input size="large" placeholder="Search" prefix={<SearchIcon />} />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
        >
          <Button size="large" icon={<FilterIcon />}>
            Filters
          </Button>
        </Dropdown>
      </Space.Compact>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .sup {
      font-size: 12px;
      color: #8e9aa2;
    }
    font-size: 21px;
    color: #1d3544;
    .pageTitle {
      display: grid;
      grid-template-columns: 18px 1fr;
      gap: 9px;
      line-height: 1.4em;
      svg {
        height: 32px;
        path {
          fill: #596e7c;
        }
      }
    }
    .sub {
      display: flex;
      gap: 12px;
      line-height: 1.3em;
      font-size: 14px;
      color: #1d3544;
      div {
        display: flex;
        gap: 6px;
      }
      .label {
        color: #596e7c;
      }
      .sep {
        color: #d2d7da;
      }
    }
  }
  .search {
    height: 36px;
    background-color: #fff;
    input {
      width: 265px;
    }
    button {
      height: 36px;
    }
  }
`;
