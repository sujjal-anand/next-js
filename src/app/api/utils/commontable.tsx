"use client";

import React from "react";
import { Table } from "antd";

interface CommonTableProps<T extends object> {
  data: T[];
}

const CommonTable = <T extends object>({ data }: CommonTableProps<T>) => {
  // Extract column names dynamically from the first item in the data array
  const columns = data.length
    ? Object.keys(data[0]).map((key) => ({
        title: key.toUpperCase(), // Capitalized column title
        dataIndex: key,
        key,
      }))
    : [];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={(record) => JSON.stringify(record)}
      />
    </>
  );
};

export default CommonTable;
