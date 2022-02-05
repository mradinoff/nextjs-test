import type { NextPage } from "next";
import homeData from "../data/home-data";
import MosaicContent from "../modules/mosaic-content";
import Layout from "./layout";

const Home: NextPage = () => {
  const {mosaicContent} = homeData;

  return (
    <Layout>
      <MosaicContent {...mosaicContent} />
    </Layout>
  );
};

export default Home;
