import Breadcrumbs from "@/components/Breadcrumbs";
import MainLayout from "@/layouts/MainLayout";

const breadcrumbs = {
  0: { title: "Home", link: "/" },
  1: { title: "Dashboard", link: "/dashboard" },
};

const Dashboard = () => {
  return (
    <>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div>There are dashboard...</div>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
