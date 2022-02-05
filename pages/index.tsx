import type { NextPage } from "next";
import homeData from "../data/home-data";
import LatestNews from "../modules/latest-news";
import MosaicContent from "../modules/mosaic-content";
import Layout from "./layout";

const Home: NextPage = () => {
  const {mosaicContent, latestNews} = homeData;

  return (
    <Layout>
      <MosaicContent {...mosaicContent} />
      <LatestNews {...latestNews} />
    </Layout>
  );
};

export default Home;
