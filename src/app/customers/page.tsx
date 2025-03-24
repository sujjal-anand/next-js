import CustomersTable from "./customertable";

export default function Page() {
  return (
    <div>
      <h1>Customers Render</h1>
      <CustomersTable /> {/* No need for Suspense now */}
    </div>
  );
}
