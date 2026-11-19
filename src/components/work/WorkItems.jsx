import React from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  const content = (
    <>
      <img src={item.image} alt={item.title} className="work__img" />
      <div className="work__meta">
        <h3 className="work__title">{item.title}</h3>
        <span className="work__category">
          {item.categoryLabel || item.category}
        </span>
      </div>
      {item.href && (
        <span className="work__action">
          View case study
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>
      )}
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="work__card work__card--case-study"
        aria-label={`${item.title}, view case study`}
      >
        {content}
      </a>
    );
  }

  return <article className="work__card">{content}</article>;
};

export default WorkItems;
