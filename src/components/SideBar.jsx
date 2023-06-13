import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as PortfolioIcon } from "assets/icons/portfolio.svg";
import { ReactComponent as MattersIcon } from "assets/icons/matters.svg";
import { ReactComponent as ClientsIcon } from "assets/icons/clients.svg";
import { ReactComponent as PerformanceIcon } from "assets/icons/performance.svg";
import { ReactComponent as AlertsIcon } from "assets/icons/alerts.svg";
import { ReactComponent as SettingsIcon } from "assets/icons/settings.svg";
import { ReactComponent as ReportsIcon } from "assets/icons/reports.svg";
import { ReactComponent as CaretDown } from "assets/icons/caretDown.svg";

const navItems = [
  {
    key: "portfolio",
    label: "My Portfolio",
    icon: <PortfolioIcon />,
    link: "/",
  },
  {
    key: "matters",
    label: "My Matters",
    icon: <MattersIcon />,
    link: "/",
  },
  {
    key: "clients",
    label: "My Clients",
    icon: <ClientsIcon />,
    link: "/",
  },

  {
    key: "performance",
    label: "Performance",
    icon: <PerformanceIcon />,
    link: "/",
  },
  {
    key: "alerts",
    label: "Alerts",
    icon: <AlertsIcon />,
    link: "/",
  },
];

const SideBar = () => {
  const [activeNavItemKey, setActiveNavItemKey] = useState("portfolio");
  const [alertCount, setAlertCount] = useState(10);

  return (
    <StyledSideBar>
      <div className="logo">
        <Logo />
      </div>

      <div className="navigation">
        {navItems.map((item) => (
          <div
            className={`navItem ${
              item.key === activeNavItemKey ? "active" : ""
            }`}
            key={item.label}
            onClick={() => {
              setActiveNavItemKey(item.key);
              item.key === "alerts" &&
                setAlertCount((p) => (p === 0 ? 10 : p - 1));
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.key === "alerts" && (
              <span className={`badge c${alertCount}`}>{alertCount}</span>
            )}
          </div>
        ))}
      </div>
      <div className="sideFooter">
        <div className="navigation">
          <div className="navItem">
            <span>
              <ReportsIcon />
            </span>
            <span>Other Reports</span>
          </div>
          <div className="navItem">
            <span>
              <SettingsIcon />
            </span>
            <span>Settings</span>
          </div>
        </div>
        <div className="divider" />

        <div className="userInfo">
          <span>
            <img src="/avatar.png" alt="" />
            <span className="info">
              <span className="name">Jeanette Foster</span>
              <span className="location">Partner, Litigation</span>
            </span>
          </span>
          <CaretDown />
        </div>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  padding: 12px;
  background-color: #112029;
  display: grid;
  gap: 12px;
  grid-template-rows: 87px 1fr 165px;
  .logo {
    display: grid;
    place-items: center;
    svg {
      margin: 2px 0 0 -7px;
    }
    cursor: pointer;
  }
  .navItem {
    border-radius: 2px;
    padding: 10px;
    display: grid;
    grid-template-columns: 16px 1fr 22px;
    align-items: center;
    gap: 16px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    span:first-child {
      display: grid;
      place-items: center;
    }
    &.active {
      background-color: #1d3544;
    }
    &:hover:not(.active) {
      background-color: #1d354466;
    }
    .badge {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background-color: #e16832;
      display: grid;
      place-items: center;
      font-size: 10px;
      transition: opacity 0.2s ease-in-out;
      &.c0 {
        opacity: 0;
      }
    }
  }

  .navigation {
    display: grid;
    grid-template-rows: repeat(auto-fill, 40px);
    gap: 6px;
  }
  .sideFooter {
    display: grid;
    gap: 18px;
    grid-template-rows: 1fr 1px 1fr;
    .divider {
      height: 1px;
      background-color: #1d3544;
    }
    .userInfo {
      height: 34px;
      display: flex;
      gap: 18px;
      justify-content: space-between;
      padding-right: 12px;
      cursor: pointer;
      span {
        display: flex;
        gap: 10px;
        .info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-weight: 600;
          font-size: 12px;
          .name {
            color: #fff;
          }
          .location {
            color: #596e7c;
          }
        }
      }
      & > svg {
        height: 32px;
        width: 10px;
      }
    }
  }
`;
