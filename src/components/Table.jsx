import React from "react";
import styled from "styled-components";
import { Table, Typography, Select } from "antd";
const { Text } = Typography;

import { ReactComponent as FullScreenIcon } from "../assets/icons/fullScreen.svg";
import { ReactComponent as MoreIcon } from "../assets/icons/more.svg";

const TableComp = () => {
  const data = [
    {
      key: "1",
      clientName: "Client Name",
      clientPartner: "Client Partner",
      matterName: "Matter Name Here",
      compRates: 61024,
      agreedRates: 42078,
      above90: 42078,
      inDraft: 42078,
      hardCosts: "",
      softCosts: "",
    },
    {
      key: "2",
      clientName: "Client Name",
      clientPartner: "Client Partner",
      matterName: "Matter Name Here",
      compRates: 3000,
      agreedRates: 2865,
      above90: 2865,
      inDraft: 2865,
      hardCosts: 1000,
      softCosts: 1500,
    },
    {
      key: "3",
      clientName: "Client Name",
      clientPartner: "Client Partner",
      matterName: "Matter Name Here",
      compRates: 30000,
      agreedRates: 25000,
      above90: 25000,
      inDraft: "",
      hardCosts: 6000,
      softCosts: 6000,
    },
    {
      key: "4",
      clientName: "Client Name",
      clientPartner: "Client Partner",
      matterName: "Matter Name Here",
      compRates: 40000,
      agreedRates: 55000,
      above90: 22000,
      inDraft: 3000,
      hardCosts: "",
      softCosts: "",
    },
  ];

  const columns = [
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
      width: 120,
    },
    {
      title: "Client Partner",
      dataIndex: "clientPartner",
      key: "clientPartner",
      width: 110,
    },
    {
      title: "Matter Name",
      dataIndex: "matterName",
      key: "matterName",
      width: 240,
    },
    {
      title: (
        <div style={{ textAlign: "center", lineHeight: "1.3" }}>
          <div>{"Fees WIP @"}</div>
          <div>{"Computer Rates"}</div>
        </div>
      ),
      dataIndex: "compRates",
      key: "compRates",
    },
    {
      title: (
        <div style={{ textAlign: "center", lineHeight: "1.3" }}>
          <div>{"Fees WIP @"}</div>
          <div>{"Agreed Rates"}</div>
        </div>
      ),
      dataIndex: "agreedRates",
      key: "agreedRates",
    },
    {
      title: <span style={{ color: "#D03A50" }}>{"> 90 Days"}</span>,
      dataIndex: "above90",
      key: "above90",
    },
    {
      title: "In Draft",
      dataIndex: "inDraft",
      key: "inDraft",
    },
    {
      title: "Hard Costs",
      dataIndex: "hardCosts",
      key: "hardCosts",
    },
    {
      title: "Soft Costs",
      dataIndex: "softCosts",
      key: "softCosts",
    },
    {
      title: <FullScreenIcon />,
      key: "actions",
      width: 30,
    },
  ].map((item, index) => ({
    ...item,
    align: "center",
    width: !!item.width ? item.width : index > 5 && index < 9 ? 100 : undefined,
    render: (d) =>
      index > 2 && index < 9 ? (
        <span>
          {!!d && "£"} {d.toLocaleString("en-GB")}
        </span>
      ) : index === 1 ? (
        <div className="partner" />
      ) : index === 9 ? (
        <MoreIcon style={{ padding: "5px", cursor: "pointer" }} />
      ) : (
        d
      ),
  }));

  return (
    <StyledDiv>
      <div className="title">
        <span>My WIP</span>
        <Select defaultValue={"1"}>
          <Select.Option value="1">Clients</Select.Option>
          <Select.Option value="2">Clients 2</Select.Option>
          <Select.Option value="3">Clients 3</Select.Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        // scroll={{ y: 150 }}
        summary={(pageData) => {
          //   let totalBorrow = 0;
          //   let totalRepayment = 0;
          //   pageData.forEach(({ borrow, repayment }) => {
          //     totalBorrow += borrow;
          //     totalRepayment += repayment;
          //   });
          return (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2}></Table.Summary.Cell>
                <Table.Summary.Cell index={3}>£ 1,338,104</Table.Summary.Cell>
                <Table.Summary.Cell index={4}>£1,001,519</Table.Summary.Cell>
                <Table.Summary.Cell index={5}>£434,346</Table.Summary.Cell>
                <Table.Summary.Cell index={6}>£310,345</Table.Summary.Cell>
                <Table.Summary.Cell index={7}>£7,500</Table.Summary.Cell>
                <Table.Summary.Cell index={8}>£16,750</Table.Summary.Cell>
                <Table.Summary.Cell index={9}></Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        }}
      />
    </StyledDiv>
  );
};

export default TableComp;

const StyledDiv = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    padding: 5px 0 10px 0;
    & > span {
      font-size: 21px;
      color: #112029;
    }
  }
  .ant-table-wrapper {
    border-radius: 6px;
    overflow: hidden;
    .partner {
      text-align: center;
      display: inline-block;
      border: 2px solid #43946c;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      /* overflow: hidden; */
      position: relative;
      background: url("/avatar.png");
      &:after {
        content: "CP";
        font-size: 7px;
        /* font-weight: 400; */
        color: #fff;
        background-color: #43946c;
        border-radius: 50%;
        position: absolute;
        width: 15px;
        height: 15px;
        top: 54%;
        left: 54%;
        line-height: 15.8px;
        /* display: grid;
        place-items: center; */
      }
    }
    .ant-table-container table > thead > tr:first-child > * {
      background-color: #dce2e5;
      font-size: 12px;
      font-weight: 600;
      color: #596e7c;
      padding: 8px 8px;
      line-height: 0.8;
      &:not(nth-child(1)) {
        text-align: center;
      }
    }
    .ant-table-tbody > tr {
      &:nth-child(even) {
        background-color: #f9f9f9;
      }
      & > td {
        border: none;
        color: #1d3544;
        padding: 2px 16px;
      }
    }
    .ant-table-summary {
      background-color: #dce2e5;
      font-weight: 600;
      color: #1d3544;
      text-align: center;
    }
  }
`;
