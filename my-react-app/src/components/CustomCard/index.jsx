import React, { useState, useEffect } from "react";
import "./style.scss";
import { getInfo } from "../../http/api";

const CustomCard = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  useEffect(() => {
    getInfo("/CustomCard", (data) => {
      if (data) {
        setArticles(data);
      }
    });
  }, []);


  const totalPages = Math.ceil(articles.length / articlesPerPage);


  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <section className="CustomArticleContainer">
      <div className="CustomArticleContainerTop">
        <h4>Recently Published</h4>
      </div>
      <div className="container">
        {currentArticles.length > 0 ? (
          currentArticles.map((item) => (
            <div className="CustomArticleCard" key={item.id}>
              <div className="CustomArticleContent">
                <div className="CustomCategory">{item.category}</div>
                <h2 className="CustomTitle">{item.title}</h2>
                <p className="CustomDescription">{item.description}</p>
                <div className="CustomAuthorInfo">
                  <img
                    src={item.authorImage}
                    className="CustomAuthorImage"
                    alt={item.author}
                  />
                  <div className="CustomAuthorDetails">
                    <span className="CustomAuthorName">{item.author}</span> <br />
                    <span className="CustomAuthorMeta">
                      {item.date} • {item.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      <div className="Pagination">
        <button
        className="PaginationPrev"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
         className="PaginationNext"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CustomCard;
