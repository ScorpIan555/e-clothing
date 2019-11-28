import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, imageUrl, linkUrl, id, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title" key={`${title}+${id}`}>
        {title.toUpperCase()}
      </h1>
      <span className="subtitle" key={`${subtitle}+${id}`}>
        {subtitle}
      </span>
    </div>
  </div>
);

export default MenuItem;
