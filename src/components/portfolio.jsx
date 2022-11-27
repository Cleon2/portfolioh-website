import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
function Portfolio({ portfolioRef }) {
  return (
    <div ref={portfolioRef} className="mx-10 md:mx-20 mt-20">
      <h1 className="text-4xl md:text-5xl mb-5 md:mb-10">Projects</h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-10 md:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
