import type { NextPage } from "next";
import homeData from "../data/home-data";
import Layout from "./layout";

const Home: NextPage = () => {
  const {mosaicContent} = homeData;

  return (
    <Layout>
      <p>Test</p>
    </Layout>
  );
};

export default Home;
