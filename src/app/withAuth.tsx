import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (Component: any) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/"); // Redirect if no token
      }
    }, []);
    // console.log(Component, "c");
    // console.log(props, "p");
    return <Component {...props} />;
  };
};

export default withAuth;
