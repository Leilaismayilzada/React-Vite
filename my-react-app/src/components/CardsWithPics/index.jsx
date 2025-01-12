
import React, { useState, useEffect } from "react";
import "./style.scss";
import { getInfo } from "../../http/api";

const CardWithPic = () => {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    getInfo("/CardPics", (data) => {
      if (data) {
        setArticles(data);
      }
    });
  }, []);


  return (
    <section className="ArticleContainer">
      <div className="container">
        {articles.length > 0 ? (
          articles.map((item) => (
            <div className="ArticleCard" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="ArticleContent">
                <div className="Category">{item.category}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="AuthorInfo">
                  <img src={item.authorImage} alt={item.author} />
                  <div className="AuthorDetails">
                    {item.author}
                    <span>
                      {item.date} • {item.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </section>
  );
};

export default CardWithPic;
