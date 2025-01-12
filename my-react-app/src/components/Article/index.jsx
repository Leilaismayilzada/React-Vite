import { useState, useEffect } from "react";
import "./index.scss";
import { getInfo } from "../../http/api";


const Article = () => {
  const [miniArticle, setMiniArticle] = useState([]);

  useEffect(() => {
    getInfo("/Leftside", (data) => {
      setMiniArticle(data);
    });
  }, []);

  return (
    <section className="ArticleContainer">
      <div className="container">
        <div className="ArticleTitle">
          <h1>Suggested Articles</h1>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="ArticleBigCard">
              <div className="ArticleBigCard__Leftside">
                <img
                  src="https://flexiblog-minimal.netlify.app/static/637d816cd8a182db3f510acb35fe69ad/fc596/image.webp"
                  alt="Article"
                />
              </div>
              <div className="ArticleBigCard__Rightside">
                <div className="ArticleBigCard__Rightside__Top">
                  <h3>Food & Drink</h3>
                  <h2>The Pleasure of Defying <br /> Food Fashions</h2>
                  <p>
                    Primo in altis pelle alumnae Lorem markdownum obvius in
                    seque opus, est bicorni forte; laeva…
                  </p>
                </div>
                <div className="ArticleBigCard__Rightside__Name">
                  <div className="ArticleBigCard__Rightside__Name__img">
                    <img
                      src="https://flexiblog-minimal.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/0f66d/jane-smith.webp"
                      alt="Author"
                    />
                  </div>
                  <h2>
                    Jane Smith
                    <p>
                      June 22, 2020
                      <li>
                        <i className="ri-history-line"></i> 1min
                      </li>
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="ArticleMiniCards">
              {miniArticle.length > 0 ? (
                miniArticle.map((item, index) => (
                  <div className="ArticleMiniCard" key={index}>
                    <h1>{item.title}</h1>
                    <p>
                      {item.name}
                      <h3>
                        {item.date}
                        <li>
                          <i className="ri-history-line"></i> {item.time}
                        </li>
                      </h3>
                    </p>
                  </div>
                ))
              ) : (
                <p>No article</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
