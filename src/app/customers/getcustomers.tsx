// customers/getCustomers.ts (Server Function)
export const getCustomers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
};
