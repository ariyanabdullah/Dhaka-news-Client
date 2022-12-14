import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      {allNews.map((n) => (
        <NewsCard key={n._id} news={n}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
