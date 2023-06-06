import MainLayout from "@/layouts/MainLayout";
import axios from "@/lib/axios";

const Articles = ({ articles }) => {
  return <div>Articles ....</div>;
};

export default Articles;

export const getStaticProps = async (ctx) => {
  const response = await axios.get("/api/V1/articles");
  const articles = response.data;

  return {
    props: {
      articles,
    },
  };
};

Articles.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
