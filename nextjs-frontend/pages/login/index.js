import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import LoginHead from "./LoginHead";
import LoginForm from "./LoginForm";

const breadcrumbs = {
  0: { title: "Home", link: "/" },
  1: { title: "Login", link: "/login" },
};

const Login = () => {
  return (
    <>
      <LoginHead />

      <Breadcrumbs crumbs={breadcrumbs} />

      <LoginForm />
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
