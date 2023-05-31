import Breadcrumbs from "@/components/Breadcrumbs";
import MainLayout from "@/layouts/MainLayout";

const breadcrumbs = { 0: { title: "Home", link: `/` } };

const Home = () => {
  return (
    <>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="bg-accent">Hello friend</div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
