import Error from "@/components/Error";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/auth";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const { login, isLoading } = useAuth({
    middleware: "guest",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitOperatoin = async (e) => {
    e.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative flex flex-col p-7 items-center justify-center overflow-hidden">
          <span className="loading loading-spinner loading-lg"></span>
          <div className="w-full p-6 rounded-md lg:max-w-xl shadow-md shadow-cyan-500/50">
            <h1 className="text-3xl font-bold text-center text-cyan-500">
              Login
            </h1>

            <form
              className="mt-6"
              autoComplete="off"
              onSubmit={submitOperatoin}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-light"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="block w-full px-4 py-2 mt-2 text-cyan-400 bg-zinc-900 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <Error messages={errors.email} className="mt-2" />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-light"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="block w-full px-4 py-2 mt-2 text-cyan-400 bg-zinc-900 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <Error messages={errors.password} className="mt-2" />
              </div>
              <div className="mb-4 flex items-cente mt-4">
                <label
                  htmlFor="remember"
                  className="text-sm font-semibold text-light"
                >
                  Remember me
                </label>
                <input
                  id="remember"
                  type="checkbox"
                  onChange={(e) => setShouldRemember(e.target.value)}
                  value={shouldRemember}
                  className="text-cyan-400 ms-2"
                />
              </div>

              <Link href="#" className="text-xs text-blue-600 hover:underline">
                Forget Password?
              </Link>
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-4 text-sm text-center text-blue-50">
              Don't have an account?{" "}
              <Link
                href="#"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
