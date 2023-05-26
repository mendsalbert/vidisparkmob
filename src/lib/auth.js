import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const hasSignedUp = localStorage.getItem("hasSignedUp");

    if (!isLoggedIn && !hasSignedUp) {
      // User hasn't signed up, redirect to signup page
      router.replace("/signup");
    } else if (!isLoggedIn) {
      // User hasn't logged in, redirect to login page
      router.replace("/login");
    }
  }, [router]);
};
