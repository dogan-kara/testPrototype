import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowUpIcon } from "assets/icons/arrowUp.svg";
import { ReactComponent as InfoIcon } from "assets/icons/info.svg";

const items = [
  {
    key: "1",
    label: `Fees Billed`,
    count: "1.2M",
    percentage: "5.0",
    isUp: true,
    isYOY: true,
  },
  {
    key: "2",
    label: `Current Dept`,
    count: "780K",
    percentage: "5.0",
    isUp: true,
    isYOY: false,
  },
  {
    key: "3",
    label: `In Draft`,
    count: "320K",
    percentage: "5.0",
    isUp: false,
    isYOY: false,
  },
  {
    key: "4",
    label: `WIP @ Computer Rates`,
    count: "1.3M",
    percentage: "5.0",
    isUp: true,
    isYOY: false,
  },
  {
    key: "5",
    label: `WIP @ Agreed Rates`,
    count: "1.0M",
    percentage: "5.0",
    isUp: true,
    isYOY: false,
  },
];

const Tile = (item) => {
  return (
    <div className="tile" key={item.key}>
      <div className="label">
        {item.label} <InfoIcon />
      </div>
      <div className="data">
        <span className="count">£{item.count} </span>
        <span className={`change ${item.isUp ? "up" : "down"}`}>
          <ArrowUpIcon />
          <span>{item.percentage}%</span>
          <span>{item.isYOY ? "YOY" : "MOM"}</span>
        </span>
      </div>
    </div>
  );
};

const Tiles = () => {
  return <StyledDiv>{items.map((item) => Tile(item))}</StyledDiv>;
};

export default Tiles;

const StyledDiv = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  .tile {
    border-radius: 6px;
    padding: 0 20px;
    background: #ffffff;
    height: 72px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    .label {
      font-size: 12px;
      font-weight: 600;
      margin-top: -5px;
      color: #596e7c;
      svg {
        margin: 0 0 -1px 2px;
      }
    }
    .data {
      display: flex;
      gap: 8px;
      align-items: center;
      .count {
        font-weight: 600;
      }
      .change {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 10px;
        font-weight: 600;
        &.up {
          color: #43946c;
        }
        &.down {
          color: #e14f62;
          svg {
            transform: rotate(90deg);
            path {
              fill: #e14f62;
            }
          }
        }
      }
    }
  }
`;
