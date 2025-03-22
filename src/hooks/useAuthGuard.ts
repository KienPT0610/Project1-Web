"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function getAuthToken() {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("authToken="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
}

export { getAuthToken };

export default function useAuthGuard() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (isClient && !user && !getAuthToken()) {
      router.replace("/auth/login");
    }
    else{
      router.replace("/dashboard");
    }
  }, [user, isClient, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);
}
