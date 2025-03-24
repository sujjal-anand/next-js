// customers/getCustomers.ts (Server Function)
export const getCustomers = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/customers`, {});

    if (!res.ok) {
      throw new Error("Failed to fetch customers");
    }

    return res.json(); // ✅ Parse JSON response
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error; // Ensure the error is handled in the calling function
  }
};
