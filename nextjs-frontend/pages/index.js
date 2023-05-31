import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return <div className="bg-accent">Hello friend</div>;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
