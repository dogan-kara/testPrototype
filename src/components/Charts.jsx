import React, { useState } from "react";
import styled from "styled-components";
import { Select, Radio, Button } from "antd";
import { ConfigProvider } from "antd";
import ReactECharts from "echarts-for-react";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";

const Charts = () => {
  const [switchValue, setSwitchValue] = useState("WIP");
  return (
    <StyledDiv>
      <div className="controls">
        <Select defaultValue={"1"}>
          <Select.Option value="1">Matter Parter</Select.Option>
          <Select.Option value="2">Matter Parter 2</Select.Option>
          <Select.Option value="3">Matter Parter 3</Select.Option>
        </Select>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1D3544",
              borderRadius: "16px",
            },
          }}
        >
          <div className="group">
            {["WIP", "Dept", "Lock-up"].map((item) => (
              <Button
                key={item}
                value={item}
                className={switchValue === item ? "active" : ""}
                onClick={() => setSwitchValue(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </ConfigProvider>
      </div>

      <div className="charts">
        <div>
          <div className="title">
            WIP Snapshot <InfoIcon />
          </div>
          <ReactECharts
            opts={{ renderer: "svg" }}
            style={{
              height: "160px",
            }}
            option={{
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                },
              },
              textStyle: {
                fontFamily: "Roboto",
              },
              grid: {
                top: "12px",
                left: "15px",
                right: "0px",
                bottom: "26px",
                containLabel: true,
              },
              xAxis: {
                type: "value",
                max: 610,
                axisLabel: false,
                splitLine: false,
                name: "WIP (£)",
                nameLocation: "center",
                nameGap: 10,
                nameTextStyle: {
                  fontSize: "9px",
                  fontWeight: "600",
                  color: "#8E9AA2",
                },
              },
              yAxis: {
                name: "DAYS",
                nameLocation: "center",
                nameGap: 52,
                nameTextStyle: {
                  fontSize: "9px",
                  fontWeight: "600",
                  color: "#8E9AA2",
                },
                type: "category",
                data: ["LAST 30", "31-90", "91-180", "181+"],
                axisLabel: {
                  color: "#1D1E27",
                  fontSize: "10px",
                  fontWeight: "600",
                },
                axisLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
              },
              tooltip: {
                valueFormatter: (v) => v - 30,
              },
              series: [
                {
                  type: "bar",
                  data: [610, 120, 220, 50].map((v) => ({
                    value: v + 30,
                    label: {
                      formatter: () => `£ ${v.toLocaleString("en-GB")}K`,
                    },
                  })),
                  roundCap: true,
                  showSymbol: false,
                  itemStyle: {
                    borderRadius: [20, 20, 20, 20],
                    color: (p) =>
                      ["#0497A9", "#007583", "#28525B", "#1D1E27"][p.dataIndex],
                  },
                  label: {
                    show: true,
                    position: "insideLeft",
                    padding: 10,
                    textBorderWidth: 0,
                    textBorderColor: "#0002",
                    distance: 20,
                    align: "center",
                    verticalAlign: "center",
                    rotate: 0,
                    // formatter: (p) => `£ ${p.value.toLocaleString("en-GB")}K`,
                    // "£" + p.value.toLocaleString("en-GB") + "K",
                    fontSize: 10,
                    fontWeight: 600,
                  },
                },
              ],
            }}
          />
        </div>
        <div>
          <div className="title">
            Last 12 Months WIP
            <InfoIcon />
          </div>
          <ReactECharts
            opts={{ renderer: "svg" }}
            style={{
              height: "180px",
              marginTop: "-24px",
            }}
            option={{
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                },
              },
              textStyle: {
                fontFamily: "Roboto",
              },
              legend: {
                data: ["LAST 30", "31-90", "91-180", "181+"],
                right: 10,
                itemWidth: 10,
                itemGap: 15,
                icon: "circle",
                textStyle: {
                  fontWeight: "600",
                },
              },
              grid: {
                top: "45px",
                left: "55px",
                right: "0",
                bottom: "32px",
              },
              xAxis: {
                type: "category",
                data: [
                  "Jun '22",
                  "Jul '22",
                  "Aug '22",
                  "Sep '22",
                  "Oct '22",
                  "Nov '22",
                  "Dec '22",
                  "Jan '23",
                  "Feb '23",
                  "Mar '23",
                  "Apr '23",
                  "May '23",
                  "Jun '23",
                ],
                axisLabel: {
                  fontWeight: "600",
                  fontSize: "9px",
                  interval: 0,
                  formatter: (value) =>
                    `${value.slice(0, 3)}\n ${value.slice(4, 7)}`,
                },
                splitLine: false,
              },

              yAxis: [
                {
                  type: "value",
                  max: 800,
                  name: "DEPT (£)",
                  nameLocation: "center",
                  nameGap: 45,
                  nameTextStyle: {
                    fontSize: "9px",
                    fontWeight: "600",
                    color: "#8E9AA2",
                  },

                  axisLabel: {
                    fontWeight: "600",
                    fontSize: "9px",
                    interval: 0,
                    formatter: (value) => `£${value}K`,
                  },
                },
              ],
              series: [
                {
                  name: "LAST 30",
                  type: "bar",
                  stack: "foo",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    180, 220, 220, 200, 170, 205, 225, 195, 175, 180, 160, 150,
                    150,
                  ],
                  itemStyle: {
                    color: "#118FA0",
                  },
                },
                {
                  name: "31-90",
                  type: "bar",
                  stack: "foo",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    180, 220, 220, 200, 170, 205, 225, 195, 175, 180, 160, 150,
                    150,
                  ],
                  itemStyle: {
                    color: "#007583",
                  },
                },
                {
                  name: "91-180",
                  type: "bar",
                  stack: "foo",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    150, 190, 180, 150, 130, 180, 150, 180, 155, 120, 140, 130,
                    120,
                  ],
                  itemStyle: {
                    color: "#334E56",
                  },
                },
                {
                  name: "181+",
                  type: "bar",
                  stack: "foo",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    120, 110, 90, 120, 130, 135, 155, 130, 125, 110, 100, 120,
                    110,
                  ],
                  itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                    color: "#112029",
                  },
                },
              ].map((s) => ({
                ...s,
                itemStyle: {
                  ...s.itemStyle,
                  shadowColor: s.itemStyle.color,
                  shadowBlur: 1
                },
              })),
            }}
          />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Charts;

const StyledDiv = styled.div`
  display: grid;
  gap: 12px;
  .controls {
    display: flex;
    gap: 8px;
    .ant-select {
      width: 175px;
      .ant-select-selection-item:before {
        content: "View: ";
      }
    }
    .group {
      width: 190px;
      height: 32px;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06),
        inset 0px 2px 6px rgba(29, 53, 68, 0.15);
      border-radius: 22px;

      button {
        background: transparent;
        border: none;
        &:not(:first-child) {
          margin-left: -5px;
        }
        &.active {
          background: #1d3544;
          color: #ffffff;
          box-shadow: inset 0px 2px 6px rgba(29, 53, 68, 0.15);
          border-radius: 22px;
        }
      }
    }
  }
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    height: 230px;
    & > div {
      border-radius: 6px;
      background: #ffffff;
      padding: 24px;
    }
    .title {
      font-size: 21px;
      font-weight: 600;
      svg {
        margin-left: 8px;
      }
    }
  }
`;
