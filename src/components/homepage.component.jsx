import React from "react";
import "./homepage.styles.scss";

const items = [
  { title: "HATS", subtitle: "SHOP NOW" },
  { title: "JACKETS", subtitle: "SHOP NOW" },
  { title: "SNEAKERS", subtitle: "SHOP NOW" },
  { title: "WOMENS", subtitle: "SHOP NOW" },
  { title: "MENS", subtitle: "SHOP NOW" }
];

const HomePage = () => {
  return (
    <div className="hompage">
      <div className="directory-menu">
        {items.map((item, i) => {
          console.log(item);
          console.log(i);
          item["key"] = `${i}+`;
          console.log("item::", item);
          return (
            <div className="menu-item">
              <div className="content" key={i}>
                <h1 className="title" key={`${items[i].title}+${i}`}>
                  {items[i].title}
                </h1>
                <span className="subtitle" key={`${items[i].subtitle}+${i}`}>
                  {items[i].subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
