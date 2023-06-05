import MainLayout from "@/layouts/MainLayout";

const Dashboard = () => {
    return (
        <div>
            There are dashboard...
        </div>
    );
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
