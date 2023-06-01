import axios from "@/lib/axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  // isloading
  // const [isLoading, setIsLoading] = useState(1);

  // user
  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/v1/user", () =>
    axios
      .get("/api/v1/user")
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  // csrf
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  // login
  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/login", ...props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(error.response.data.error);
      });
  };

  // logout
  const logout = async () => {
    if (!error) await axios.post("/logout").then(() => mutate());

    window.location.pathname = "/login";
  };

  const register = async ({ setErrors, ...props }) => {
    await csrf();

    setErrors([]);

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("reset-password", props)
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status));
  };

  useEffect(() => {
    // if (user || error) setIsLoading(0);
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    // isLoading,
    csrf,
    user,
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
  };
};
