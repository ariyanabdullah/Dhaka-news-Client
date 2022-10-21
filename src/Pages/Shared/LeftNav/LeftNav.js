import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h5>All Categories</h5>

      {categories.map((c) => (
        <p key={c.id}>
          <Link to={`/category/${c.id}`}>{c.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
