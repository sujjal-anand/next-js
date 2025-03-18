"use client";
import React, { useEffect, useState } from "react";
import { getCustomers } from "./getcustomers";
import CommonTable from "./commontable";
const page = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getCustomers().then((res) => {
      setdata(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div>customers render</div>
      <div>
        <CommonTable data={data} />
      </div>
    </>
  );
};

export default page;
