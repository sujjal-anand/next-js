"use client"; // Runs on the client side

import { useState, useEffect } from "react";
import { getCustomers } from "./getcustomers";
import CommonTable from "../api/utils/commontable";
import SkeletonTable from "../api/utils/skeletontable";

export default function CustomersTable() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const customers = await getCustomers();
      setData(customers);
      setLoading(false);
    }
    fetchData();
  }, []);

  return loading ? <SkeletonTable /> : <CommonTable data={data} />;
}
